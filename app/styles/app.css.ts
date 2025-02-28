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

// Component: Xlink

export const styleLinkBase = style({
  color: theme.color.clrSurfaceGray,

  ":hover": {
    color: theme.color.clrSecondary,
  },

  ":focus": {
    color: theme.color.clrSecondary,
  },

  ":active": {
    color: theme.color.clrAccent,
  },
});

export const styleLinkActive = style({
  selectors: {
    [`${styleLinkBase}.&`]: {
      color: theme.color.clrAccent,
    },
  },
});

export const styleLinkSpan = style({
  selectors: {
    [`${styleLinkBase}:active &`]: {
      color: theme.color.clrSecondary,
    },
    [`${styleLinkActive} &`]: {
      color: theme.color.clrSecondary,
    },
  },
});

// Component: Xbtn
export const styleBtnOutline = style({
  padding: "0.5rem",
  borderRadius: theme.radius.sm,
  color: theme.color.clrAccent,

  ":hover": {
    backgroundColor: theme.color.clrPrimaryLight,
    color: theme.color.clrSecondary,
  },

  ":active": {
    color: theme.color.clrAccent,
  },

  ":focus": {
    outlineWidth: "0.063rem",
    outlineStyle: "dashed",
    outlineColor: theme.color.clrAccent,
  },
});

export const styleBtnFilled = style({
  padding: "0.5rem",
  borderRadius: theme.radius.sm,
  color: theme.color.clrPrimaryDark,
  backgroundColor: theme.color.clrAccent,

  ":hover": {
    backgroundColor: theme.color.clrAccentLight,
  },

  ":active": {
    color: theme.color.clrAccent,
  },

  ":focus": {
    outlineWidth: "0.063rem",
    outlineStyle: "dashed",
    outlineColor: theme.color.clrSurfaceWhite,
  },
});

export const styleBtnSpan = style({
  color: theme.color.clrSecondary,
});

// Component: NavBar
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

// Component: Menu
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
