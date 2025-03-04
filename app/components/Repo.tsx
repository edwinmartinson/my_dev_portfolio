import { Link } from "react-router";
import {
  styleDivider,
  styleRepo,
  styleRepoBtn,
  styleRepoCircleBtn,
  styleRepoCircleBtnIcon,
  styleRepoContainer,
  styleRepoStack,
  styleRepoTech,
} from "~/styles/app.css";
import {
  colorSecondary,
  colorSurfaceGray,
  typeMediumH6,
} from "~/styles/theme.css";
import Xbtn from "./Xbtn";

type RepoProps = {
  title: string;
  description: string;
  stack: string[];
  link: string;
};

export default function Repo({ title, description, stack, link }: RepoProps) {
  const visitLink = () => {
    window.open(link, "_blank");
  };

  return (
    <div className={styleRepo}>
      <div className={styleRepoContainer}>
        <h6 className={`${typeMediumH6} ${colorSecondary}`}>{title}</h6>
        <p className="p1">{description}</p>
        <div className={styleRepoStack}>
          {stack.map((tech, index) => (
            <span key={index} className={styleRepoTech}>
              #{tech}
            </span>
          ))}
        </div>
        <Xbtn className={styleRepoBtn} varient="filled" action={visitLink}>
          view respository
        </Xbtn>
        <hr className={`${styleDivider} ${colorSurfaceGray}`} />
      </div>
      <Link to={link}>
        <div className={styleRepoCircleBtn}>
          <img
            className={styleRepoCircleBtnIcon}
            src="/svg-github.svg"
            alt="Icon: Github"
          />
        </div>
      </Link>
    </div>
  );
}
