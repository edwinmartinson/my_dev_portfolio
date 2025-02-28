import { style } from "@vanilla-extract/css";
import { theme } from "~/styles/theme.css";

export const styleOutline = style({
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

export const styleFilled = style({
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

export const styleSpan = style({
  color: theme.color.clrSecondary,
});
