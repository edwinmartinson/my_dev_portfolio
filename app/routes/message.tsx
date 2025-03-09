import {
  styleMessage,
  styleMessageDetails,
  styleMessageSection,
} from "~/styles/app.css";
import type { Route } from "./+types/message";
import Tag from "~/components/Tag";
import { colorAccent, colorSecondary } from "~/styles/theme.css";
import Xbtn from "~/components/Xbtn";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";

export default function Message({}: Route.ComponentProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { redirect: boolean };
  const abort = state?.redirect ?? true;

  useEffect(() => {
    if (abort) {
      navigate("/");
    }
  }, [abort]);

  return (
    <main className={styleMessage}>
      {!abort && (
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
