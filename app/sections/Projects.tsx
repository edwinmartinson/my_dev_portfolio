import { useLoaderData } from "react-router";
import Repo from "~/components/Repo";
import Tag from "~/components/Tag";
import Xbtn from "~/components/Xbtn";
import Xlink from "~/components/Xlink";
import type { SiteData } from "~/data";
import {
  styleProjects,
  styleProjectsContainer,
  styleProjectsMoreContainer,
  styleRepoContainer,
} from "~/styles/app.css";

export default function Project() {
  const { projects, works }: SiteData = useLoaderData();

  return (
    <section id="projects" className={styleProjects}>
      <Tag tag="h2" tagSize="h6" textSize="h2">
        Projects
      </Tag>
      <div className={styleProjectsContainer}>
        <Repo
          title={projects.at(0)!.title}
          description={projects.at(0)!.description}
          stack={projects.at(0)!.stack}
          link={projects.at(0)!.link}
        />
        <Repo
          title={projects.at(0)!.title}
          description={projects.at(0)!.description}
          stack={projects.at(0)!.stack}
          link={projects.at(0)!.link}
        />
        <Repo
          title={projects.at(0)!.title}
          description={projects.at(0)!.description}
          stack={projects.at(0)!.stack}
          link={projects.at(0)!.link}
        />
        <Repo
          title={projects.at(0)!.title}
          description={projects.at(0)!.description}
          stack={projects.at(0)!.stack}
          link={projects.at(0)!.link}
        />
      </div>
      <div className={styleProjectsMoreContainer}>
        <p>
          You can find more on my&nbsp;
          <Xlink varient="bracket" to={`${works.github.link}?tab=repositories`}>
            Github
          </Xlink>
        </p>
      </div>
    </section>
  );
}
