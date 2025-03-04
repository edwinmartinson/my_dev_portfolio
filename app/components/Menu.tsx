import {
  styleMenu,
  styleMenuContainer,
  styleMenuDownload,
  styleMenuLinks,
} from "~/styles/app.css";
import Xbtn from "./Xbtn";
import Xlink from "./Xlink";
import { SiteContext, useSiteContext } from "~/context/AppContext";

type MenuProps = {};

export default function Menu() {
  const { dispatch } = useSiteContext(SiteContext);
  const closeMenu = () => dispatch({ type: "toggleMenu" });

  return (
    <section className={styleMenu}>
      <div className={styleMenuContainer}>
        <Xbtn varient="outline" action={closeMenu}>
          close
        </Xbtn>
        <div className={styleMenuLinks}>
          <Xlink to="/#hero" varient="bracket" isActive>
            hero
          </Xlink>
          <Xlink to="/#about_me" varient="bracket">
            about_me
          </Xlink>
          <Xlink to="/#projects" varient="bracket">
            projects
          </Xlink>
          <Xlink to="/#contact_me" varient="bracket">
            contact_me
          </Xlink>
        </div>

        <div className={styleMenuDownload}>
          <Xbtn varient="filled">Download resume</Xbtn>
        </div>
      </div>
    </section>
  );
}
