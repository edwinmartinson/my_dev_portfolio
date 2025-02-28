import {
  styleNav,
  styleNavActive,
  styleNavContainer,
  styleNavlinks,
  styleNavLogo,
  styleNavMenuBtn,
  styleNavWrapper,
} from "./Navbar.css";
import Xbtn from "./Xbtn";
import Xlink from "./Xlink";

type NavBarProps = {
  isActive?: boolean;
};

export default function NavBar({ isActive }: NavBarProps) {
  return (
    <nav className={`${styleNav} ${isActive && styleNavActive}`}>
      <div className={styleNavContainer}>
        <div className={styleNavWrapper}>
          <img className={styleNavLogo} src="public/2023_avatar.jpg" alt="" />
          <div className={styleNavlinks}>
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
          <Xbtn className={styleNavMenuBtn} varient="outline">
            menu
          </Xbtn>
        </div>
        <Xbtn varient="filled">resume</Xbtn>
      </div>
    </nav>
  );
}
