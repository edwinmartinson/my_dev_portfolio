import { style } from "@vanilla-extract/css";
import { theme } from "~/styles/theme.css";

export const styleMenu = style({
  position: "absolute",
  top: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: theme.color.clrPrimaryDark,
  display: "block",
  padding: "3.25rem 1.25rem",
  zIndex: 10,
});

export const styleMenuContainer = style({
  display: "flex",
  gap: "5rem",
  flexDirection: "column",
  alignItems: "flex-start",
});

export const styleMenuLinks = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
});

export const styleMenuDownload = style({
  width: "100%",
  display: "flex",
  justifyContent: "center",
});
