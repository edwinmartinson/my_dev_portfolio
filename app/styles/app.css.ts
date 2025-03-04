import { globalStyle, style } from "@vanilla-extract/css";
import { theme } from "./theme.css";

globalStyle("h1, h2, h3", {
  "@media": {
    "screen and (max-width: 50.5rem)": {
      fontSize: "0.75rem",
    },

    "screen and (max-width: 40rem)": {
      fontSize: "0.5rem",
    },
  },
});

globalStyle("h6, p", {
  "@media": {
    "screen and (max-width: 40rem)": {
      fontSize: "0.75rem",
    },
  },
});

export const styleBody = style({
  backgroundColor: theme.color.clrPrimaryDark,
  color: theme.color.clrSurfaceWhite,
  fontFamily: theme.font.family,
  padding: "0",
  // overflowX: "hidden",
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
  // width: "calc(100dvw - 2rem)",
  width: "100%",
  boxSizing: "border-box",
  display: "grid",
  gridTemplateColumns: "1fr minmax(0rem, 88rem) 1fr",
  justifyContent: "center",
  position: "absolute",
  top: "0",
  padding: "0 1rem",

  "@media": {
    "screen and (max-width: 88rem)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const styleNavContainer = style({
  boxSizing: "border-box",
  gridColumn: "2/3",
  width: "100%",
  padding: "1rem 0",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  "@media": {
    "screen and (max-width: 88rem)": {
      gridColumn: "1/-1",
    },
  },
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

// Section: Hero
export const styleHero = style({
  height: "61.375rem",
  display: "grid",
  gridTemplateColumns: "repeat(2, 5.5rem)  1fr repeat(2, 5.5rem)",
  gridTemplateRows: "4.5rem 1fr auto auto",
  columnGap: "1rem",
  padding: "0 1rem",
  // marginBottom: theme.sectionBottomMargin,

  "@media": {
    "screen and (max-width: 77rem)": {
      gridTemplateColumns: "1fr",
    },
    "screen and (max-width: 44rem)": {
      height: "100vh",
    },
  },
});

// Component: Intro
export const styleIntro = style({
  gridColumn: "3 / 4",
  gridRow: "2 / 3",
  alignSelf: "center",
  width: "fit-content",

  "@media": {
    "screen and (max-width: 77rem)": {
      gridColumn: "1 / -1",
      justifySelf: "center",
    },
  },
});

export const styleTxtWithPic = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "1rem",
});

export const styleIntroPic = style({
  width: "6rem",
  height: "6rem",
  aspectRatio: "1/1",
  borderRadius: "6rem",
  borderWidth: "0.188rem",
  borderStyle: "solid",
  color: theme.color.clrSurfaceWhite,

  "@media": {
    "screen and (max-width: 44rem)": {
      display: "none",
    },
  },
});

export const styleStack = style({
  width: "fit-content",
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  marginBottom: "1rem",
});

export const styleStackImg = style({
  width: "3.5rem",
  height: "3.5rem",
  aspectRatio: "1/1",

  "@media": {
    "screen and (max-width: 40rem)": {
      width: "1.75rem",
      height: "1.75rem",
    },
  },
});

export const styleHeroBtn = style({
  gridColumn: "1 / -1",
  gridRow: "3 / 4",
  alignSelf: "center",
  justifySelf: "center",
  marginBottom: "5.5rem",

  "@media": {
    "screen and (max-width: 44rem)": {
      // display: "none",
    },
  },
});

// Component: SocailBar
export const styleSocialBar = style({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gridColumn: "1 / -1",
  gridRow: "4 / 5",
  marginBottom: "2rem",

  "@media": {
    "screen and (max-width: 44rem)": {
      gap: "1.75rem",
    },
  },
});

export const styleSocialBarLinks = style({
  display: "inline-flex",
  gap: "1.5rem",
  flexWrap: "wrap",
  justifyContent: "center",

  "@media": {
    "screen and (max-width: 40rem)": {
      display: "none",
    },
  },
});

export const styleSocialBarIcons = style({
  display: "none",
  alignItems: "center",
  gap: "1.5rem",

  "@media": {
    "screen and (max-width: 40rem)": {
      display: "flex",
    },
  },
});

export const styleHeroBarIcons = style({
  width: "1.75rem",
  height: "1.75rem",
  aspectRatio: "1/1",
});

// Section: AboutMe
export const styleAboutMe = style({
  paddingTop: theme.sectionSpace,
  paddingLeft: "1rem",
  paddingRight: "1rem",
});

export const styleAboutMeContainer = style({
  marginTop: "2.25rem",
  width: "100%",
  display: "grid",
  gridTemplateColumns: "1fr minmax(0rem, 64rem) 1fr",
  gap: "1rem",
});

export const styleAboutMeSubContainer = style({
  gridColumn: "2 / 3",
});

export const styleAboutMeFlexContainer = style({
  display: "flex",
  gap: "1.5rem",

  "@media": {
    "screen and (max-width: 53rem)": {
      flexDirection: "column",
    },
  },
});

export const styleAboutMeContainerArticle = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
  width: "100%",
});

export const styleAboutMeContainerArticleCollection = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

export const styleDivider = style({
  borderStyle: "dashed",
  margin: "16px 0",
});

globalStyle(`&{styleAboutMeContainerArticle}  .p1`, {
  lineHeight: theme.font.lineHeight.p1,
});

// Section: Projects
export const styleProjects = style({
  paddingTop: theme.sectionSpace,
  paddingLeft: "1rem",
  paddingRight: "1rem",
});

export const styleProjectsContainer = style({
  marginTop: "2.25rem",
  width: "100%",
  display: "grid",
  gridTemplateColumns: "1fr minmax(0rem, 64rem) 1fr",
  gap: "1rem",
});

export const styleProjectsMoreContainer = style({
  marginTop: "2.5rem",
  gridColumn: "1 / -1",
  display: "flex",
  justifyContent: "center",
});

// Component: Repo
export const styleRepo = style({
  gridColumn: "2 / 3",
  display: "flex",
  gap: "5rem",
  alignSelf: "stretch",

  "@media": {
    "screen and (max-width: 53rem)": {
      gap: 0,
    },
  },
});

export const styleRepoContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
});

globalStyle(`&{styleRepoContainer}  .p1`, {
  lineHeight: theme.font.lineHeight.p1,
});

export const styleRepoStack = style({
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
});

export const styleRepoTech = style({
  color: theme.color.clrAccent,

  "@media": {
    "screen and (max-width: 53rem)": {
      color: theme.color.clrSurfaceGray,
    },
  },
});

export const styleRepoCircleBtn = style({
  backgroundColor: theme.color.clrPrimaryLight,
  width: "10rem",
  height: "10rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",

  "@media": {
    "screen and (max-width: 53rem)": {
      display: "none",
    },
  },
});

export const styleRepoCircleBtnIcon = style({
  display: "flex",
  width: "4rem",
  height: "4rem",
  aspectRatio: "1/1",
});

export const styleRepoBtn = style({
  display: "none",

  "@media": {
    "screen and (max-width: 53rem)": {
      display: "block",
    },
  },
});

// Section: ContactMe
export const styleContactMe = style({
  paddingTop: theme.sectionSpace,
  paddingLeft: "1rem",
  paddingRight: "1rem",
});

export const styleContactMeContainer = style({
  marginTop: "2.25rem",
  width: "100%",
  display: "grid",
  gridTemplateColumns: "1fr minmax(0rem, 64rem) 1fr",
  gap: "1rem",
});

export const styleContactMeSubContainer = style({
  gridColumn: "2 / 3",
});
