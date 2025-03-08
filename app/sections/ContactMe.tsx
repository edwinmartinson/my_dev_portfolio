import Tag from "~/components/Tag";
import { Form, useLoaderData } from "react-router";
import {
  styleContactMe,
  styleContactMeContainer,
  styleContactMeDetails,
  styleContactMeDetailsContainer,
  styleContactMeForm,
  styleContactMeFormContainer,
  styleContactMeSubContainer,
  styleFieldContainer,
  styleFields,
} from "~/styles/app.css";
import TsLine from "~/components/TsLine";
import Xbtn from "~/components/Xbtn";
import { colorSurfaceGray, typeRegularH6 } from "~/styles/theme.css";
import type { SiteData } from "~/data";
import useOffsetTop from "~/hooks/useOffsetTop";
import { useSiteContext } from "~/context/AppContext";
import { useEffect } from "react";

export default function ContactMe() {
  const [ref, offsetTop] = useOffsetTop<HTMLElement>();
  const { dispatch } = useSiteContext();
  const { socials, works, email, sectionTitle }: SiteData = useLoaderData();

  useEffect(() => {
    dispatch({
      type: "position",
      payload: { pos: "posContactMe", val: offsetTop },
    });
  }, [offsetTop]);

  return (
    <section ref={ref} id="contact_me" className={styleContactMe}>
      <Tag tag="h2" tagSize="h6" textSize="h2">
        {sectionTitle.contactMe}
      </Tag>
      <div className={styleContactMeContainer}>
        <div className={styleContactMeSubContainer}>
          <Form
            className={styleContactMeForm}
            name="contact_me"
            method="POST"
            action="/message"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            encType="application/x-www-form-urlencoded"
          >
            <div className={styleContactMeFormContainer}>
              <h6 className={`${typeRegularH6} ${colorSurfaceGray}`}>
                ### contact form
              </h6>
              <input type="hidden" name="form-name" value="contact_me" />
              <input type="hidden" name="bot-field" />
              <label className={styleFieldContainer}>
                <TsLine varient="type" name="name" value="string" />
                <input
                  name="name"
                  className={styleFields}
                  type="text"
                  placeholder="eg: Theo Brown"
                />
              </label>
              <label className={styleFieldContainer}>
                <TsLine varient="type" name="email" value="string" />
                <input
                  name="email"
                  className={styleFields}
                  type="email"
                  placeholder="eg: foo@bar.com"
                />
              </label>
              <label className={styleFieldContainer}>
                <TsLine varient="type" name="message" value="string" />
                <textarea
                  name="message"
                  className={styleFields}
                  placeholder="eg: Type something..."
                />
              </label>
            </div>
            <Xbtn varient="filled">send</Xbtn>
          </Form>
          <div className={styleContactMeDetails}>
            <div className={styleContactMeDetailsContainer}>
              <h6 className={`${typeRegularH6} ${colorSurfaceGray}`}>
                ### email
              </h6>
              <TsLine
                varient="const"
                name="email"
                type="Mail"
                value={email.text}
                link={email.link}
              />
            </div>

            <div className={styleContactMeDetailsContainer}>
              <h6 className={`${typeRegularH6} ${colorSurfaceGray}`}>
                ### socials
              </h6>
              {Object.keys(socials).map((key, index) => (
                <TsLine
                  key={index}
                  varient="const"
                  name={key}
                  type="Link"
                  // @ts-ignore
                  value={socials[key].text}
                  // @ts-ignore
                  link={socials[key].link}
                />
              ))}
            </div>

            <div className={styleContactMeDetailsContainer}>
              <h6 className={`${typeRegularH6} ${colorSurfaceGray}`}>
                ### works
              </h6>
              {Object.keys(works).map((key, index) => (
                <TsLine
                  key={index}
                  varient="const"
                  name={key}
                  type="Link"
                  // @ts-ignore
                  value={works[key].text}
                  // @ts-ignore
                  link={works[key].link}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
