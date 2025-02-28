import { style } from "@vanilla-extract/css";
import { theme } from "~/styles/theme.css";

export const styleBase = style({
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

export const styleActive = style({
  selectors: {
    [`${styleBase}.&`]: {
      color: theme.color.clrAccent,
    },
  },
});

export const styleSpan = style({
  selectors: {
    [`${styleBase}:active &`]: {
      color: theme.color.clrSecondary,
    },
    [`${styleActive} &`]: {
      color: theme.color.clrSecondary,
    },
  },
});
