import { resetStyleBtn } from "~/styles/reset.css";
import { styleFilled, styleOutline, styleSpan } from "./Xbtn.css";

type XbtnProps = {
  action?: (event: React.MouseEvent<HTMLButtonElement>) => void;
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
      className={`${resetStyleBtn} ${isOutline && styleOutline} ${
        isFilled && styleFilled
      } ${className}`}
    >
      {isFilled && "[ "}
      <span className={`${isOutline && styleSpan}`}>{children}</span>
      {isOutline && "()"}
      {isFilled && " ]"}
    </button>
  );
}
