import { Link } from "react-router";
import {
  colorAccent,
  colorSecondary,
  colorSurfaceGray,
  colorSurfaceWhite,
} from "~/styles/theme.css";

type TsLineProps = {
  varient: "type" | "const";
  name: string;
  type?: string;
  value: string;
  link?: string;
};

export default function TsLine({
  varient,
  name,
  type,
  value,
  link,
}: TsLineProps) {
  switch (varient) {
    case "type":
      return (
        <p className={colorSurfaceGray}>
          <span className={colorAccent}>type</span>&nbsp;
          <span className={colorSecondary}>{name}</span>
          &nbsp;=&nbsp;
          <span className={colorAccent}>{value}</span>;
        </p>
      );
    case "const":
      return (
        <p className={`${colorSurfaceGray}`}>
          <span className={colorAccent}>const</span>&nbsp;
          <span className={colorSecondary}>{name}</span>:&nbsp;
          <span className={colorAccent}>{type}</span>
          &nbsp;=&nbsp;&quot;
          <Link to={link ? link : ""}>
            <span className={colorSurfaceWhite}>{value}</span>
          </Link>
          &quot;;
        </p>
      );
  }
}
