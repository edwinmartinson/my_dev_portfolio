import {
  styleIntro,
  styleIntroPic,
  styleStack,
  styleTxtWithPic,
} from "~/styles/app.css";
import Tag from "./Tag";
import { useLoaderData } from "react-router";
import type { SiteData } from "~/data";
import { colorAccent, colorSecondary } from "~/styles/theme.css";
import StackImg from "./StackImg";
import { useWindowSize } from "@uidotdev/usehooks";

export default function Intro() {
  const siteData: SiteData = useLoaderData();
  const windowSize = useWindowSize();
  const viewportWidth = windowSize.width as number;

  return (
    <div className={styleIntro}>
      <div className={styleStack}>
        <StackImg key="1" type="python" />
        <StackImg key="2" type="typescript" />
        <StackImg key="3" type="node" />
        <StackImg key="4" type="deno" isPng />
        <StackImg key="5" type="git" />
        <StackImg key="6" type="react" />
        <StackImg key="7" type="figma" />
      </div>
      <span className={styleTxtWithPic}>
        <Tag tag="p" tagSize="h6" textSize="h1">
          {siteData.intro}
        </Tag>
        <img
          className={styleIntroPic}
          src="/2023_avatar.jpg"
          alt="Picture of Edwin"
        />
      </span>
      <Tag
        tag="h1"
        tagSize="h6"
        textSize="h1"
        attribute={{ name: "role", value: "name" }}
        clrClass={colorAccent}
      >
        <br />
        &nbsp;{siteData.name}
        <br />
      </Tag>
      <Tag
        tag="h2"
        tagSize="h6"
        textSize="h1"
        clrClass={colorSecondary}
        attribute={
          viewportWidth <= 640 ? undefined : { name: "role", value: "title" }
        }
      >
        {siteData.title}
      </Tag>
    </div>
  );
}
