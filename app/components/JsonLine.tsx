import {
  colorAccent,
  colorSecondary,
  colorSurfaceGray,
} from "~/styles/theme.css";

type JsonLineProps =
  | {
      type: "string";
      objKey: string;
      objValue: string;
    }
  | {
      type: "array";
      objKey: string;
      objValue: string[];
    };

export default function JsonLine({ type, objKey, objValue }: JsonLineProps) {
  switch (type) {
    case "string":
      return (
        <p className={colorSurfaceGray}>
          "<span className={colorAccent}>{objKey}</span>":&nbsp; "
          <span className={colorSecondary}>{objValue}</span>"
        </p>
      );

    case "array":
      return (
        <p className={colorSurfaceGray}>
          "<span className={colorAccent}>{objKey}</span>":&nbsp;
          {"["}
          {objValue.map((item, index) => (
            <span key={index} className={colorSurfaceGray}>
              "<span className={colorSecondary}>{item}</span>"
              {objValue.length - 1 !== index ? ", " : ""}
            </span>
          ))}
          {"]"}
        </p>
      );

    default:
      throw new Error("Invalid type");
  }
}
