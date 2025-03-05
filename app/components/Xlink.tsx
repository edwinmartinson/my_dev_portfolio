import { useWindowScroll } from "@uidotdev/usehooks";
import { Link } from "react-router";
import { useSiteContext } from "~/context/AppContext";
import { styleLinkBase, styleLinkSpan } from "~/styles/app.css";

type XlinkProps = {
  to?: string;
  varient: "bracket" | "hash";
  children: string;
  isPageLink?: boolean;
  extraClass?: string;
  scrollTop?: number;
  clickAction?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
};

export default function Xlink({
  to = "/",
  varient,
  clickAction,
  extraClass,
  children,
  scrollTop,
}: XlinkProps) {
  const [position, scrollTo] = useWindowScroll();
  const isBracket = varient === "bracket";
  const isHash = varient === "hash";
  const { dispatch } = useSiteContext();

  const navHandler = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    dispatch({ type: "toggleMenu", payload: false });
    scrollTo({
      left: 0,
      top: scrollTop,
      behavior: "smooth",
    });
  };

  return (
    <Link
      to={to}
      className={`${styleLinkBase} ${extraClass}`}
      onClick={scrollTop != undefined ? navHandler : clickAction}
    >
      {isBracket && "[ "}
      {isHash && `#`}
      <span className={styleLinkSpan}>{children}</span>
      {isBracket && " ]"}
    </Link>
  );
}
