import { resetStyleBtn } from "~/styles/reset.css";
import {
  styleBtnFilled,
  styleBtnOutline,
  styleBtnSpan,
} from "~/styles/app.css";

type XbtnProps = {
  action?: () => void;
  varient: "outline" | "filled";
  isActive?: boolean;
  className?: string;
  children: string;
};

export default function Xbtn({
  action,
  varient,
  isActive,
  className,
  children,
}: XbtnProps) {
  const isOutline = varient === "outline";
  const isFilled = varient === "filled";

  return (
    <button
      className={`${resetStyleBtn} ${isOutline && styleBtnOutline} ${
        isFilled && styleBtnFilled
      } ${className}`}
      onClick={action}
    >
      {isFilled && "[ "}
      <span className={`${isOutline && styleBtnSpan}`}>{children}</span>
      {isOutline && "()"}
      {isFilled && " ]"}
    </button>
  );
}
