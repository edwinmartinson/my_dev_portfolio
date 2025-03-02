import {
  colorAccent,
  colorSecondary,
  colorSurfaceGray,
  typeMediumH1,
  typeMediumH2,
  typeMediumH3,
  typeMediumH4,
  typeMediumH5,
  typeRegularH6,
  typeRegularP1,
  typeRegularP2,
  typeRegularP3,
} from "~/styles/theme.css";

type TxtSize = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p1" | "p2" | "p3";

type TagProps = {
  tag: string;
  tagSize: TxtSize;
  children: string | React.ReactNode;
  textSize: TxtSize;
  attribute?: {
    name: string;
    value: string;
  };
  clrClass?: string;
};

function getFontClass(txtSize: TxtSize) {
  switch (txtSize) {
    case "h1":
      return typeMediumH1;
    case "h2":
      return typeMediumH2;
    case "h3":
      return typeMediumH3;
    case "h4":
      return typeMediumH4;
    case "h5":
      return typeMediumH5;
    case "h6":
      return typeRegularH6;
    case "p1":
      return typeRegularP1;
    case "p2":
      return typeRegularP2;
    case "p3":
      return typeRegularP3;
    default:
      return typeRegularP1;
  }
}

export default function Tag({
  tag,
  children,
  tagSize,
  textSize,
  attribute,
  clrClass,
}: TagProps) {
  return (
    <h1>
      <span className={getFontClass(tagSize)}>
        <span className={colorSurfaceGray}>{`<`}</span>
        <span className={colorSecondary}>{tag}</span>
        {attribute && (
          <span>
            <span className={colorAccent}> {attribute.name}</span>
            <span className={colorSurfaceGray}>=</span>
            <span className={colorSurfaceGray}>"</span>
            {attribute.value}
            <span className={colorSurfaceGray}>"</span>
          </span>
        )}
        <span className={colorSurfaceGray}>{`>`}</span>
      </span>
      <span className={`${getFontClass(textSize)} ${clrClass}`}>
        {children}
      </span>
      <span className={getFontClass(tagSize)}>
        <span className={colorSurfaceGray}>{`</`}</span>
        <span className={colorSecondary}>{tag}</span>
        <span className={colorSurfaceGray}>{`>`}</span>
      </span>
    </h1>
  );
}
