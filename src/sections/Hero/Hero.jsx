// Hero.jsx

import styles from "./HeroStyles.module.css"; // Importamos modulo css
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Profile pic" />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Cesar <br />
          Mendoza
        </h1>
        <h2>
          Estudiante de <br />
          Ingenieria en Sistemas
        </h2>
        <span>
          <a
            href="https://www.linkedin.com/in/c%C3%A9sar-mendoza-9046232a9/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href="https://github.com/Cesar-mendozaa" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
        </span>
        <p className={styles.description}>
          Cursando el ultimo semestre de la carrea. Buscando un trabajo formal
          en el area de desarrollo.
        </p>
        <a href={CV} download>
          <button className="hover">CV</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
