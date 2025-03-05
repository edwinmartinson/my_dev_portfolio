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

export default function NavBar({ isActive }: NavBarProps) {
  const { dispatch, state } = useSiteContext();

  const showMenu = () => dispatch({ type: "toggleMenu", payload: true });

  return (
    <nav className={`${styleNav} ${isActive && styleNavActive}`}>
      <div className={styleNavContainer}>
        <div className={styleNavWrapper}>
          <img
            className={styleNavLogo}
            src="/2023_avatar.jpg"
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
        <Xbtn varient="filled">resume</Xbtn>
      </div>
    </nav>
  );
}
