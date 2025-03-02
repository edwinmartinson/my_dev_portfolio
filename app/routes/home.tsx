import { styleHero, styleHeroBtn, styleMain } from "~/styles/app.css";
import NavBar from "~/components/Navbar";
import Menu from "~/components/Menu";
import { useState } from "react";
import Intro from "~/components/Intro";
import type { Route } from "./+types/home";
import { siteData } from "~/data";
import Xbtn from "~/components/Xbtn";
import HeroBar from "~/components/HeroBar";

export async function loader({}: Route.LoaderArgs) {
  return siteData;
}

export default function Home() {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
  return (
    <>
      <NavBar />
      {isMenuActive && <Menu />}
      <main className={`${styleMain}`}>
        <section id="hero" className={styleHero}>
          <Intro />
          <div className={styleHeroBtn}>
            <Xbtn varient="outline">scrollDown</Xbtn>
          </div>
          <HeroBar />
        </section>
        <section id="about_me"></section>
        <section id="projects"></section>
        <section id="contact_me"></section>
      </main>
    </>
  );
}
