import { style } from "@vanilla-extract/css";
import { theme } from "./theme.css";

export const styleBody = style({
  backgroundColor: theme.color.clrPrimaryDark,
  color: theme.color.clrSurfaceWhite,
  fontFamily: theme.font.family,
});

export const styleMain = style({
  maxWidth: "90rem",
  margin: "0 auto",
});
