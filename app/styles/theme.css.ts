import { createGlobalTheme, style, globalStyle } from "@vanilla-extract/css";

export const theme = createGlobalTheme(":root", {
  color: {
    clrPrimaryDark: "#221F22",
    clrPrimaryLight: "#2D2A2E",
    clrSecondary: "#FF6188",
    clrAccent: "#FFD866",
    clrAccentLight: "#FFE085",
    clrSurfaceGray: "#727072",
    clrSurfaceWhite: "#FCFCFA",
  },
  font: {
    family: "JetBrains Mono, serif",
    style: "normal",
    lineHeight: {
      p1: "2rem",
      p2: "1.5rem",
      p3: "1rem",
    },
    weight: {
      bold: "700",
      medium: "500",
      regular: "400",
      light: "300",
    },
    size: {
      h1: "3.815em",
      h2: "3.052em",
      h3: "2.441em",
      h4: "1.953em",
      h5: "1.562em",
      h6: "1.250em",
      p1: "1em",
      p2: "0.800em",
      p3: "0.640em",
    },
  },
  radius: {
    sm: "0.25rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
  },
  breakPoints: {
    a: "88rem",
    b: "77rem",
    c: "44rem",
    d: "40rem",
  },
  sectionSpace: "5rem",
});

export const typeBase = style({
  fontFamily: theme.font.family,
  fontStyle: theme.font.style,
});

export const typeBoldH1 = style([
  typeBase,
  {
    fontSize: theme.font.size.h1,
    fontWeight: theme.font.weight.bold,
  },
]);

export const typeBoldH2 = style([
  typeBase,
  {
    fontSize: theme.font.size.h2,
    fontWeight: theme.font.weight.bold,
  },
]);

export const typeBoldH3 = style([
  typeBase,
  {
    fontSize: theme.font.size.h3,
    fontWeight: theme.font.weight.bold,
  },
]);

export const typeBoldH4 = style([
  typeBase,
  {
    fontSize: theme.font.size.h4,
    fontWeight: theme.font.weight.bold,
  },
]);

export const typeBoldH5 = style([
  typeBase,
  {
    fontSize: theme.font.size.h5,
    fontWeight: theme.font.weight.bold,
  },
]);

export const typeBoldH6 = style([
  typeBase,
  {
    fontSize: theme.font.size.h6,
    fontWeight: theme.font.weight.bold,
  },
]);

export const typeBoldP1 = style([
  typeBase,
  {
    fontSize: theme.font.size.p1,
    fontWeight: theme.font.weight.bold,
  },
]);

export const typeBoldP2 = style([
  typeBase,
  {
    fontSize: theme.font.size.p2,
    fontWeight: theme.font.weight.bold,
  },
]);

export const typeBoldP3 = style([
  typeBase,
  {
    fontSize: theme.font.size.p3,
    fontWeight: theme.font.weight.bold,
  },
]);

// Medium weight variants
export const typeMediumH1 = style([
  typeBase,
  {
    fontSize: theme.font.size.h1,
    fontWeight: theme.font.weight.medium,
  },
]);

export const typeMediumH2 = style([
  typeBase,
  {
    fontSize: theme.font.size.h2,
    fontWeight: theme.font.weight.medium,
  },
]);

export const typeMediumH3 = style([
  typeBase,
  {
    fontSize: theme.font.size.h3,
    fontWeight: theme.font.weight.medium,
  },
]);

export const typeMediumH4 = style([
  typeBase,
  {
    fontSize: theme.font.size.h4,
    fontWeight: theme.font.weight.medium,
  },
]);

export const typeMediumH5 = style([
  typeBase,
  {
    fontSize: theme.font.size.h5,
    fontWeight: theme.font.weight.medium,
  },
]);

export const typeMediumH6 = style([
  typeBase,
  {
    fontSize: theme.font.size.h6,
    fontWeight: theme.font.weight.medium,
  },
]);

export const typeMediumP1 = style([
  typeBase,
  {
    fontSize: theme.font.size.p1,
    fontWeight: theme.font.weight.medium,
  },
]);

export const typeMediumP2 = style([
  typeBase,
  {
    fontSize: theme.font.size.p2,
    fontWeight: theme.font.weight.medium,
  },
]);

export const typeMediumP3 = style([
  typeBase,
  {
    fontSize: theme.font.size.p3,
    fontWeight: theme.font.weight.medium,
  },
]);

// Regular weight variants
export const typeRegularH1 = style([
  typeBase,
  {
    fontSize: theme.font.size.h1,
    fontWeight: theme.font.weight.regular,
  },
]);

export const typeRegularH2 = style([
  typeBase,
  {
    fontSize: theme.font.size.h2,
    fontWeight: theme.font.weight.regular,
  },
]);

export const typeRegularH3 = style([
  typeBase,
  {
    fontSize: theme.font.size.h3,
    fontWeight: theme.font.weight.regular,
  },
]);

export const typeRegularH4 = style([
  typeBase,
  {
    fontSize: theme.font.size.h4,
    fontWeight: theme.font.weight.regular,
  },
]);

export const typeRegularH5 = style([
  typeBase,
  {
    fontSize: theme.font.size.h5,
    fontWeight: theme.font.weight.regular,
  },
]);

export const typeRegularH6 = style([
  typeBase,
  {
    fontSize: theme.font.size.h6,
    fontWeight: theme.font.weight.regular,
  },
]);

export const typeRegularP1 = style([
  typeBase,
  {
    fontSize: theme.font.size.p1,
    fontWeight: theme.font.weight.regular,
  },
]);

export const typeRegularP2 = style([
  typeBase,
  {
    fontSize: theme.font.size.p2,
    fontWeight: theme.font.weight.regular,
  },
]);

export const typeRegularP3 = style([
  typeBase,
  {
    fontSize: theme.font.size.p3,
    fontWeight: theme.font.weight.regular,
  },
]);

// Light weight variants
export const typeLightH1 = style([
  typeBase,
  {
    fontSize: theme.font.size.h1,
    fontWeight: theme.font.weight.light,
  },
]);

export const typeLightH2 = style([
  typeBase,
  {
    fontSize: theme.font.size.h2,
    fontWeight: theme.font.weight.light,
  },
]);

export const typeLightH3 = style([
  typeBase,
  {
    fontSize: theme.font.size.h3,
    fontWeight: theme.font.weight.light,
  },
]);

export const typeLightH4 = style([
  typeBase,
  {
    fontSize: theme.font.size.h4,
    fontWeight: theme.font.weight.light,
  },
]);

export const typeLightH5 = style([
  typeBase,
  {
    fontSize: theme.font.size.h5,
    fontWeight: theme.font.weight.light,
  },
]);

export const typeLightH6 = style([
  typeBase,
  {
    fontSize: theme.font.size.h6,
    fontWeight: theme.font.weight.light,
  },
]);

export const typeLightP1 = style([
  typeBase,
  {
    fontSize: theme.font.size.p1,
    fontWeight: theme.font.weight.light,
  },
]);

export const typeLightP2 = style([
  typeBase,
  {
    fontSize: theme.font.size.p2,
    fontWeight: theme.font.weight.light,
  },
]);

export const typeLightP3 = style([
  typeBase,
  {
    fontSize: theme.font.size.p3,
    fontWeight: theme.font.weight.light,
  },
]);

// colors

export const colorPrimaryDark = style({
  color: theme.color.clrPrimaryDark,
});

export const colorPrimaryLight = style({
  color: theme.color.clrPrimaryLight,
});

export const colorSecondary = style({
  color: theme.color.clrSecondary,
});

export const colorAccent = style({
  color: theme.color.clrAccent,
});

export const colorSurfaceGray = style({
  color: theme.color.clrSurfaceGray,
});

export const colorSurfaceWhite = style({
  color: theme.color.clrSurfaceWhite,
});
