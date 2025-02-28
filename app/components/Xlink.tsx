import { Link } from "react-router";
import {
  styleLinkActive,
  styleLinkBase,
  styleLinkSpan,
} from "~/styles/app.css";

type XlinkProps = {
  to: string;
  varient: "bracket" | "hash";
  isActive?: boolean;
  children: string;
};

export default function Xlink({ to, varient, isActive, children }: XlinkProps) {
  const isBracket = varient === "bracket";
  const isHash = varient === "hash";

  return (
    <Link to={to} className={`${styleLinkBase} ${isActive && styleLinkActive}`}>
      {isBracket && "[ "}
      {isHash && `#`}
      <span className={styleLinkSpan}>{children}</span>
      {isBracket && " ]"}
    </Link>
  );
}
