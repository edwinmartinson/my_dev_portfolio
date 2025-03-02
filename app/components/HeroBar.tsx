import {
  styleHeroBar,
  styleHeroBarIcons,
  styleHeroBarLinks,
  styleHeroBarSocials,
} from "~/styles/app.css";
import Xlink from "./Xlink";
import { colorAccent, colorSecondary } from "~/styles/theme.css";
import type { SiteData } from "~/data";
import { useLoaderData } from "react-router";

export default function HeroBar() {
  const { isOpenForWork, socials }: SiteData = useLoaderData();

  return (
    <div className={styleHeroBar}>
      <span className={styleHeroBarLinks}>
        <Xlink to="/#" varient="hash">
          linkedin
        </Xlink>
        <Xlink to="/#" varient="hash">
          twitter
        </Xlink>
        <Xlink to="/#" varient="hash">
          github
        </Xlink>
        <Xlink to="/#" varient="hash">
          codepen
        </Xlink>
        <Xlink to="/#" varient="hash">
          dribbble
        </Xlink>
      </span>

      <span className={styleHeroBarSocials}>
        <img
          className={styleHeroBarIcons}
          src="/svg-linkedin.svg"
          alt="Icon: Linkedin"
        />
        <img
          className={styleHeroBarIcons}
          src="/svg-twitter.svg"
          alt="Icon: Twitter"
        />
        <img
          className={styleHeroBarIcons}
          src="/svg-github.svg"
          alt="Icon: Github"
        />
        <img
          className={styleHeroBarIcons}
          src="/svg-codepen.svg"
          alt="Icon: Codepen"
        />
        <img
          className={styleHeroBarIcons}
          src="/svg-dribbble.svg"
          alt="Icon: Dribbble"
        />
      </span>
      <p>
        <span className={colorAccent}>{"{ "}</span>
        <span className={colorSecondary}>isOpenToWork:</span>
        <span>{isOpenForWork ? "true" : "false"}</span>
        <span className={colorAccent}>{" }"}</span>
      </p>
    </div>
  );
}
