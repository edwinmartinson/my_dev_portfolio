import { globalStyle, style } from "@vanilla-extract/css";

// Box sizing rules
globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
});

// HTML and body height
globalStyle("html, body", {
  minHeight: "100vh",
  margin: 0,
  padding: 0,
});

// Base HTML and body styles
globalStyle("html", {
  MozTextSizeAdjust: "none",
  WebkitTextSizeAdjust: "none",
  textSizeAdjust: "none",
});

globalStyle("body", {
  lineHeight: 1.5,
  position: "relative",
});

// Reset margins
globalStyle("body, h1, h2, h3, h4, p, figure, blockquote, dl, dd", {
  fontSize: "1rem",
  marginBlockEnd: 0,
});

// List styles
globalStyle("ul[role='list'], ol[role='list']", {
  listStyle: "none",
});

// Typography
globalStyle("h1, h2, h3, h4, button, input, label", {
  lineHeight: 1.1,
});

globalStyle("h1, h2, h3, h4", {
  textWrap: "balance",
});

// Links
globalStyle("a:not([class])", {
  textDecorationSkipInk: "auto",
  color: "currentColor",
});

globalStyle("a", {
  textDecoration: "none",
});

// Media elements
globalStyle("img, picture", {
  maxWidth: "100%",
  display: "block",
});

// Form elements
globalStyle("input, button, textarea, select", {
  fontFamily: "inherit",
  fontSize: "inherit",
});

globalStyle("textarea:not([rows])", {
  minHeight: "10em",
});

// Target elements
globalStyle(":target", {
  scrollMarginBlock: "5ex",
});

export const applyReset = style({
  vars: {
    "--reset-styles": "applied",
  },
});

export const resetStyleBtn = style({
  background: "none",
  border: "none",
  padding: 0,
  margin: 0,
  font: "inherit",
  color: "inherit",
  cursor: "pointer",
  outline: "none",
  WebkitAppearance: "none",
  MozAppearance: "none",
  userSelect: "none",
  WebkitUserSelect: "none",

  ":focus": {
    outline: "none",
  },
});
