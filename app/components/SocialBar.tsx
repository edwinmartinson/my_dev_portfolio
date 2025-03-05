import {
  styleSocialBar,
  styleHeroBarIcons,
  styleSocialBarLinks,
  styleSocialBarIcons,
} from "~/styles/app.css";
import Xlink from "./Xlink";
import { colorAccent, colorSecondary } from "~/styles/theme.css";
import type { SiteData } from "~/data";
import { Link, useLoaderData } from "react-router";

export default function SocialBar() {
  const { socials, works }: SiteData = useLoaderData();

  return (
    <div className={styleSocialBar}>
      <span className={styleSocialBarLinks}>
        <Xlink to={socials.linkedin.link} varient="hash">
          linkedin
        </Xlink>
        <Xlink to={socials.twitter.link} varient="hash">
          twitter
        </Xlink>
        <Xlink to={socials.instagram.link} varient="hash">
          instagram
        </Xlink>
        <Xlink to={socials.snapchat.link} varient="hash">
          snapchat
        </Xlink>
        <Xlink to={works.github.link} varient="hash">
          github
        </Xlink>
        <Xlink to={works.codepen.link} varient="hash">
          codepen
        </Xlink>
        <Xlink to={works.dribbble.link} varient="hash">
          dribbble
        </Xlink>
        <Xlink to={works.behance.link} varient="hash">
          behance
        </Xlink>
      </span>

      <span className={styleSocialBarIcons}>
        <Link to={socials.linkedin.link}>
          <img
            className={styleHeroBarIcons}
            src="/svg-linkedin.svg"
            alt="Icon: Linkedin"
          />
        </Link>
        <Link to={socials.twitter.link}>
          <img
            className={styleHeroBarIcons}
            src="/svg-twitter.svg"
            alt="Icon: Twitter"
          />
        </Link>
        <Link to={socials.snapchat.link}>
          <img
            className={styleHeroBarIcons}
            src="/svg-snapchat.svg"
            alt="Icon: Snapchat"
          />
        </Link>
        <Link to={works.github.link}>
          <img
            className={styleHeroBarIcons}
            src="/svg-github.svg"
            alt="Icon: Github"
          />
        </Link>
        <Link to={works.codepen.link}>
          <img
            className={styleHeroBarIcons}
            src="/svg-codepen.svg"
            alt="Icon: Codepen"
          />
        </Link>
        <Link to={works.dribbble.link}>
          <img
            className={styleHeroBarIcons}
            src="/svg-dribbble.svg"
            alt="Icon: Dribbble"
          />
        </Link>
      </span>
    </div>
  );
}
