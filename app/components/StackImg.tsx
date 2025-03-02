import { styleStackImg } from "~/styles/app.css";

type Stack =
  | "python"
  | "typescript"
  | "node"
  | "deno"
  | "git"
  | "react"
  | "figma";

type StackImgProps = {
  type: Stack;
  isPng?: boolean;
};

export default function StackImg({ type, isPng }: StackImgProps) {
  return (
    <img
      className={styleStackImg}
      src={`/svg-${type}.${isPng ? "png" : "svg"}`}
      alt="Logo of web technology."
    />
  );
}
