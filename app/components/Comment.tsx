import { colorSurfaceGray, typeMediumH6 } from "~/styles/theme.css";

type CommentProps = {
  children: string;
};

export default function Comment({ children }: CommentProps) {
  return (
    <h1 className={colorSurfaceGray}>
      <span>{`<-- `}</span>
      <span className={typeMediumH6}>{children}</span>
      <span>{` -->`}</span>
    </h1>
  );
}
