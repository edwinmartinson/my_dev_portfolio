import { useSiteContext } from "~/context/AppContext";
import { styleMain } from "~/styles/app.css";
import NavBar from "~/components/Navbar";
import Menu from "~/components/Menu";
import type { Route } from "./+types/home";
import { siteData } from "~/data";
import AboutMe from "~/sections/AboutMe";
import Hero from "~/sections/Hero";
import Project from "~/sections/Projects";
import ContactMe from "~/sections/ContactMe";
import Footer from "~/sections/Footer";
import { useWindowScroll } from "@uidotdev/usehooks";

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const origin = request.headers.get("origin");

  const body = {
    "form-name": formData.get("form-name"),
    "bot-field": formData.get("bot-field"),
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  await fetch(`${origin}/contact_me.html`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  });
}

export async function loader({}: Route.LoaderArgs) {
  return siteData;
}

export default function Home() {
  const { state } = useSiteContext();
  const [position, _] = useWindowScroll();
  let y = position.y || 0;

  // throw new Error("Error: I am intentionally throwing an error");

  return (
    <>
      <NavBar isActive={y > state.posAboutMe} />
      {state.showMenu && <Menu />}
      <main className={`${styleMain}`}>
        <Hero />
        <AboutMe />
        <Project />
        <ContactMe />
        <Footer />
      </main>
    </>
  );
}
