import { style } from "@vanilla-extract/css";
import { theme } from "~/styles/theme.css";

export const styleNav = style({
  width: "100vw",
  padding: "1rem",
  display: "flex",
  justifyContent: "center",
  position: "absolute",
  top: "0",
});

export const styleNavContainer = style({
  width: "90rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const styleNavWrapper = style({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
});

export const styleNavLogo = style({
  width: " 2.5rem",
  height: "2.5rem",
  aspectRatio: "1/1",
  borderRadius: "2.5rem",
  borderWidth: "0.125rem",
  borderStyle: "solid",
  color: theme.color.clrSurfaceWhite,
});

export const styleNavActive = style([
  styleNav,
  {
    backgroundColor: theme.color.clrPrimaryLight,
  },
]);

export const styleNavlinks = style({
  display: "flex",
  gap: "0.5rem",

  "@media": {
    "screen and (max-width: 44rem)": {
      display: "none",
    },
  },
});

export const styleNavMenuBtn = style({
  display: "none",
  "@media": {
    "screen and (max-width: 44rem)": {
      display: "block",
    },
  },
});
