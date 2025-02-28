import { styleMain } from "~/styles/app.css";
import NavBar from "~/components/Navbar";
import Menu from "~/components/Menu";
import { useState } from "react";

export default function Home() {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
  return (
    <>
      <NavBar />
      {isMenuActive && <Menu />}
      <main className={`${styleMain}`}>
        <section id="hero">
          <div></div>
        </section>
        <section id="about_me"></section>
        <section id="projects"></section>
        <section id="contact_me"></section>
      </main>
    </>
  );
}
