import { SiteContext, useSiteContext } from "~/context/AppContext";
import { styleMain } from "~/styles/app.css";
import NavBar from "~/components/Navbar";
import Menu from "~/components/Menu";
import type { Route } from "./+types/home";
import { siteData } from "~/data";
import AboutMe from "~/sections/AboutMe";
import Hero from "~/sections/Hero";
import Project from "~/sections/Projects";
import ContactMe from "~/sections/ContactMe";

export async function loader({}: Route.LoaderArgs) {
  return siteData;
}

export default function Home() {
  const { state } = useSiteContext(SiteContext);

  return (
    <>
      <NavBar />
      {state.showMenu && <Menu />}
      <main className={`${styleMain}`}>
        <Hero />
        <AboutMe />
        <Project />
        <ContactMe />
      </main>
    </>
  );
}
