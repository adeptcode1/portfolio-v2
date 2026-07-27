import SkillItem from "./SkillItem";

function SkillCategory({ category }) {
  return (
    <article className="skill-category">

      <h3>
        {category.title}
      </h3>

      <div className="skill-list">

        {category.items.map((skill) => (
          <SkillItem
            key={skill}
            name={skill}
          />
        ))}

      </div>

    </article>
  );
}

export default SkillCategory;