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

const downloadResume = () => {
  const link = document.createElement("a");
  link.href = "/resume-v1.2.pdf";
  link.download = "edwinmartinson_resume.pdf";
  link.click();
};

export default function Menu() {
  const { state, dispatch } = useSiteContext(SiteContext);
  const closeMenu = () => dispatch({ type: "toggleMenu", payload: false });

  return (
    <section className={styleMenu}>
      <div className={styleMenuContainer}>
        <Xbtn varient="outline" action={closeMenu}>
          close
        </Xbtn>
        <div className={styleMenuLinks}>
          <Xlink varient="bracket" scrollTop={0}>
            hero
          </Xlink>
          <Xlink varient="bracket" scrollTop={state.posAboutMe}>
            about_me
          </Xlink>
          <Xlink varient="bracket" scrollTop={state.posProjects}>
            projects
          </Xlink>
          <Xlink varient="bracket" scrollTop={state.posContactMe}>
            contact_me
          </Xlink>
        </div>

        <div className={styleMenuDownload}>
          <Xbtn varient="filled" action={downloadResume}>
            Download resume
          </Xbtn>
        </div>
      </div>
    </section>
  );
}
