import React from "react";
import styles from "./SkillsStyles.module.css";
import checkMarkLight from "../../assets/checkmark-light.svg";
import checkMarkDark from "../../assets/checkmark-dark.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  const { theme } = useTheme();

  const checkMarkIcon = theme === "light" ? checkMarkLight : checkMarkDark;

  return (
    <section>
      <div id="skills" className={styles.container}>
        <h1 className="sectionTitle">Habilidades</h1>
        <div className={styles.skillList}>
          <SkillList img={checkMarkIcon} skill={"C# .NET"} />
          <SkillList img={checkMarkIcon} skill={"JavaScript"} />
          <SkillList img={checkMarkIcon} skill={"HTML"} />
          <SkillList img={checkMarkIcon} skill={"CSS"} />
          <SkillList img={checkMarkIcon} skill={"NodeJS"} />
        </div>
        <hr />
        <div className={styles.skillList}>
          <SkillList img={checkMarkIcon} skill={"React"} />
        </div>
        <hr />
        <div className={styles.skillList}>
          <SkillList img={checkMarkIcon} skill={"ASP .NET"} />
        </div>
        <hr />
        <div className={styles.skillList}>
          <SkillList img={checkMarkIcon} skill={"SQL Server"} />
          <SkillList img={checkMarkIcon} skill={"MySQL"} />
          <SkillList img={checkMarkIcon} skill={"MongoDB"} />
        </div>
        <hr />
        <div className={styles.skillList}>
          <SkillList img={checkMarkIcon} skill={"Git"} />
          <SkillList img={checkMarkIcon} skill={"Postman"} />
          <SkillList img={checkMarkIcon} skill={"Bootstrap"} />
        </div>
      </div>
    </section>
  );
}

export default Skills;
