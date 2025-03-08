import { useEffect } from "react";
import { useLoaderData } from "react-router";
import Repo from "~/components/Repo";
import Tag from "~/components/Tag";
import Xlink from "~/components/Xlink";
import { useSiteContext } from "~/context/AppContext";
import type { SiteData } from "~/data";
import useOffsetTop from "~/hooks/useOffsetTop";
import {
  styleProjects,
  styleProjectsContainer,
  styleProjectsMoreContainer,
} from "~/styles/app.css";

export default function Project() {
  const { projects, works, sectionTitle }: SiteData = useLoaderData();
  const [ref, offsetTop] = useOffsetTop<HTMLElement>();
  const { dispatch } = useSiteContext();

  useEffect(() => {
    dispatch({
      type: "position",
      payload: { pos: "posProjects", val: offsetTop },
    });
  }, [offsetTop]);

  return (
    <section ref={ref} id="projects" className={styleProjects}>
      <Tag tag="h2" tagSize="h6" textSize="h2">
        {sectionTitle.projects}
      </Tag>
      <div className={styleProjectsContainer}>
        {projects.map((item, index) => (
          <Repo
            key={index}
            title={item.title}
            description={item.description}
            stack={item.stack}
            link={item.link}
          />
        ))}
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
