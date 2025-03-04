import SocialBar from "~/components/SocialBar";
import Intro from "~/components/Intro";
import Xbtn from "~/components/Xbtn";
import { styleHero, styleHeroBtn } from "~/styles/app.css";
import { useNavigate } from "react-router";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section id="hero" className={styleHero}>
      <Intro />
      <div className={styleHeroBtn}>
        <Xbtn varient="outline" action={() => navigate("/#about_me")}>
          scrollDown
        </Xbtn>
      </div>
      <SocialBar />
    </section>
  );
}
