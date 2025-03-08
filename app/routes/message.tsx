import {
  styleMessage,
  styleMessageDetails,
  styleMessageSection,
} from "~/styles/app.css";
import type { Route } from "./+types/message";
import Tag from "~/components/Tag";
import { colorAccent, colorSecondary } from "~/styles/theme.css";
import Xbtn from "~/components/Xbtn";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();

  if (formData.get("form-name") !== "contact_me") {
    return { redirect: true };
  } else return { redirect: false };
}

export default function Message({ actionData }: Route.ComponentProps) {
  const navigate = useNavigate();
  const data = actionData;
  const hideSection = data === undefined || data.redirect === true;

  useEffect(() => {
    if (data === undefined || data.redirect === true) {
      navigate("/");
    }
  }, [data]);

  return (
    <main className={styleMessage}>
      {!hideSection && (
        <section className={styleMessageSection}>
          <div className={styleMessageDetails}>
            <Tag tag="h1" tagSize="p1" textSize="h5">
              <span className={colorSecondary}>Message</span>
              &nbsp;
              <span className={colorAccent}>sent</span>
            </Tag>
            <p className="p1">
              Thanks for reaching out. I will get back to you shortly via the
              email entered.
            </p>
          </div>
          <Xbtn
            varient="filled"
            action={() => navigate("/", { replace: true })}
          >
            return to homepage
          </Xbtn>
        </section>
      )}
    </main>
  );
}
