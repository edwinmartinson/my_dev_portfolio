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
import { SiteContext, useSiteContext } from "~/context/AppContext";

type NavBarProps = {
  isActive?: boolean;
};

export default function NavBar({ isActive }: NavBarProps) {
  const { dispatch } = useSiteContext(SiteContext);

  const showMenu = () => dispatch({ type: "toggleMenu" });

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
            <Xlink to="/#hero" varient="bracket">
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
          <Xbtn className={styleNavMenuBtn} varient="outline" action={showMenu}>
            menu
          </Xbtn>
        </div>
        <Xbtn varient="filled">resume</Xbtn>
      </div>
    </nav>
  );
}
