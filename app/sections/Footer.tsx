import { useLoaderData } from "react-router";
import Tag from "~/components/Tag";
import type { SiteData } from "~/data";
import { styleFooter, styleFooterImg } from "~/styles/app.css";
import { colorAccent, colorSecondary } from "~/styles/theme.css";

export default function Footer() {
  const { isOpenForWork }: SiteData = useLoaderData();
  return (
    <footer className={styleFooter}>
      <Tag tag="h2" tagSize="h6" textSize="h2">
        Thanks for visiting
      </Tag>
      <img className={styleFooterImg} src="/avater.webp" alt="logo" />
      <p>
        <span className={colorAccent}>{"{ "}</span>
        <span className={colorSecondary}>isOpenToWork:</span>
        <span>{isOpenForWork ? " true" : " false"}</span>
        <span className={colorAccent}>{" }"}</span>
      </p>
    </footer>
  );
}
