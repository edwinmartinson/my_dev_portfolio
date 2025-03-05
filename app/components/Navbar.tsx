import {
  styleNav,
  styleNavActive,
  styleNavContainer,
  styleNavlinks,
  styleNavLogo,
  styleNavMenuBtn,
  styleNavWrapper,
} from "~/styles/app.css";
import Xbtn from "./Xbtn";
import Xlink from "./Xlink";
import { useSiteContext } from "~/context/AppContext";

type NavBarProps = {
  isActive?: boolean;
};

const downloadResume = () => {
  const link = document.createElement("a");
  link.href = "/resume-v1.2.pdf";
  link.download = "edwinmartinson_resume.pdf";
  link.click();
};

export default function NavBar({ isActive }: NavBarProps) {
  const { dispatch, state } = useSiteContext();

  const showMenu = () => dispatch({ type: "toggleMenu", payload: true });

  return (
    <nav className={`${styleNav} ${isActive && styleNavActive}`}>
      <div className={styleNavContainer}>
        <div className={styleNavWrapper}>
          <img
            className={styleNavLogo}
            src="/avater.webp"
            alt="Picture of Edwin"
          />
          <div className={styleNavlinks}>
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
          <Xbtn className={styleNavMenuBtn} varient="outline" action={showMenu}>
            menu
          </Xbtn>
        </div>
        <Xbtn varient="filled" action={downloadResume}>
          resume
        </Xbtn>
      </div>
    </nav>
  );
}
