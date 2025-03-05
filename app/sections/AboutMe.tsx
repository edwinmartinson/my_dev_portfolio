import { useEffect } from "react";
import { useLoaderData } from "react-router";
import JsonLine from "~/components/JsonLine";
import Tag from "~/components/Tag";
import { useSiteContext } from "~/context/AppContext";
import type { SiteData } from "~/data";
import useOffsetTop from "~/hooks/useOffsetTop";
import {
  styleAboutMe,
  styleAboutMeContainer,
  styleAboutMeContainerArticle,
  styleAboutMeContainerArticleCollection,
  styleDivider,
  styleAboutMeSubContainer,
  styleAboutMeFlexContainer,
} from "~/styles/app.css";
import { colorSurfaceGray, typeRegularH6 } from "~/styles/theme.css";

export default function AboutMe() {
  const [ref, offsetTop] = useOffsetTop<HTMLElement>();
  const { dispatch } = useSiteContext();

  const { summary, education, stack, experience }: SiteData = useLoaderData();
  const stackKeys = Object.keys(stack);

  useEffect(() => {
    dispatch({
      type: "position",
      payload: { pos: "posAboutMe", val: offsetTop },
    });
  }, [offsetTop]);

  return (
    <section ref={ref} id="about_me" className={styleAboutMe}>
      <Tag tag="h2" tagSize="h6" textSize="h2">
        About Me
      </Tag>
      <div className={styleAboutMeContainer}>
        <article
          className={`${styleAboutMeContainerArticle} ${styleAboutMeSubContainer}`}
        >
          <h6 className={`${colorSurfaceGray} ${typeRegularH6}`}>
            ### summary
          </h6>
          <p className="p1">{summary}</p>
        </article>

        <div
          className={`${styleAboutMeFlexContainer} ${styleAboutMeSubContainer}`}
        >
          <article
            className={`${styleAboutMeContainerArticle} ${styleAboutMeSubContainer}`}
          >
            <h6 className={`${colorSurfaceGray} ${typeRegularH6}`}>
              ### stack
            </h6>
            <div className={styleAboutMeContainerArticleCollection}>
              {stackKeys.map((key, index) => (
                <div key={index}>
                  <JsonLine
                    key={index}
                    type="array"
                    objKey={key}
                    // @ts-ignore
                    objValue={stack[key]}
                  />
                </div>
              ))}
            </div>
          </article>

          <article
            className={`${styleAboutMeContainerArticle} ${styleAboutMeSubContainer}`}
          >
            <h6 className={`${colorSurfaceGray} ${typeRegularH6}`}>
              ### education
            </h6>
            <div>
              {education.map((item, index) => (
                <div
                  key={index}
                  className={styleAboutMeContainerArticleCollection}
                >
                  <JsonLine
                    key={index + 1}
                    type="string"
                    objKey="school"
                    objValue={item.school}
                  />
                  <JsonLine
                    key={index + 2}
                    type="string"
                    objKey="course"
                    objValue={item.course}
                  />
                  <JsonLine
                    key={index + 3}
                    type="string"
                    objKey="graduation"
                    objValue={item.graduationDate}
                  />
                  <hr className={`${styleDivider} ${colorSurfaceGray}`} />
                </div>
              ))}
            </div>
          </article>
        </div>

        <article
          className={`${styleAboutMeContainerArticle} ${styleAboutMeSubContainer}`}
        >
          <h6 className={`${colorSurfaceGray} ${typeRegularH6}`}>
            ### experience
          </h6>
          <div className={styleAboutMeContainerArticleCollection}>
            {experience.map((item, index) => (
              <div
                key={index}
                className={styleAboutMeContainerArticleCollection}
              >
                <JsonLine
                  key={index + 1}
                  type="string"
                  objKey="position"
                  objValue={item.position}
                />
                <JsonLine
                  key={index + 2}
                  type="string"
                  objKey="company"
                  objValue={item.company}
                />
                <JsonLine
                  key={index + 3}
                  type="string"
                  objKey="startDate"
                  objValue={`${item.startDate} - ${item.endDate}`}
                />
                {/* <h6 className={`${colorSurfaceGray} ${typeRegularP1}`}>
                  ## description
                </h6> */}
                {item.role.map((role, index) => (
                  <p key={index} className="p1">
                    {index + 1}. {role}
                  </p>
                ))}
                <hr className={`${styleDivider} ${colorSurfaceGray}`} />
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
