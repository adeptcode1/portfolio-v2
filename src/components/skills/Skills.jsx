import { portfolio } from "../../data/portfolio";
import SkillCategory from "./SkillCategory";

import "../../styles/skills.css";

function Skills() {

  const { skills } = portfolio;

  return (

    <section
      id="skills"
      className="skills-section"
    >

      <div className="skills-container">

        <div className="skills-heading">

          <p className="section-eyebrow">
            {skills.eyebrow}
          </p>

          <h2 className="section-title">
            {skills.title}
          </h2>

        </div>

        <div className="skills-grid">

          {skills.categories.map((category) => (

            <SkillCategory
              key={category.title}
              category={category}
            />

          ))}

        </div>

      </div>

    </section>

  );

}

export default Skills;