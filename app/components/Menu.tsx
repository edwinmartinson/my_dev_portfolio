import {
  styleMenu,
  styleMenuContainer,
  styleMenuDownload,
  styleMenuLinks,
} from "./Menu.css";
import Xbtn from "./Xbtn";
import Xlink from "./Xlink";

type MenuProps = {};

export default function Menu() {
  return (
    <section className={styleMenu}>
      <div className={styleMenuContainer}>
        <Xbtn varient="outline">close</Xbtn>
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
