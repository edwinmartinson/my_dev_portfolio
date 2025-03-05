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

export default function ContactMe() {
  const { socials, works, email }: SiteData = useLoaderData();
  return (
    <section id="contact_me" className={styleContactMe}>
      <Tag tag="h2" tagSize="h6" textSize="h2">
        Contact Me
      </Tag>
      <div className={styleContactMeContainer}>
        <div className={styleContactMeSubContainer}>
          <Form className={styleContactMeForm}>
            <div className={styleContactMeFormContainer}>
              <h6 className={`${typeRegularH6} ${colorSurfaceGray}`}>
                ### contact form
              </h6>
              <label className={styleFieldContainer}>
                <TsLine varient="type" name="name" value="string" />
                <input
                  className={styleFields}
                  type="text"
                  placeholder="eg: Theo Brown"
                />
              </label>
              <label className={styleFieldContainer}>
                <TsLine varient="type" name="email" value="string" />
                <input
                  className={styleFields}
                  type="email"
                  placeholder="eg: foo@bar.com"
                />
              </label>
              <label className={styleFieldContainer}>
                <TsLine varient="type" name="message" value="string" />
                <textarea
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
