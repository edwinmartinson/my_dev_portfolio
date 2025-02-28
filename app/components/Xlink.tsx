import { Link } from "react-router";
import { styleActive, styleBase, styleSpan } from "./Xlink.css";

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
    <Link to={to} className={`${styleBase} ${isActive && styleActive}`}>
      {isBracket && "[ "}
      {isHash && `#`}
      <span className={styleSpan}>{children}</span>
      {isBracket && " ]"}
    </Link>
  );
}
