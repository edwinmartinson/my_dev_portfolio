import Tag from "~/components/Tag";
import { styleContactMe } from "~/styles/app.css";

export default function ContactMe() {
  return (
    <section id="contact_me" className={styleContactMe}>
      <Tag tag="h2" tagSize="h6" textSize="h2">
        Contact Me
      </Tag>
    </section>
  );
}
