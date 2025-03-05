import SocialBar from "~/components/SocialBar";
import Intro from "~/components/Intro";
import Xbtn from "~/components/Xbtn";
import { styleHero, styleHeroBtn } from "~/styles/app.css";
import { useSiteContext } from "~/context/AppContext";
import { useIntersectionObserver, useWindowScroll } from "@uidotdev/usehooks";
import { useEffect } from "react";

export default function Hero() {
  const { state } = useSiteContext();
  const [position, scrollTo] = useWindowScroll();

  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });

  const aboutHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    scrollTo({
      left: 0,
      top: state.posAboutMe,
      behavior: "smooth",
    });
  };

  return (
    <section ref={ref} id="hero" className={styleHero}>
      <Intro />
      <div className={styleHeroBtn}>
        <Xbtn varient="outline" action={aboutHandler}>
          scrollDown
        </Xbtn>
      </div>
      <SocialBar />
    </section>
  );
}
