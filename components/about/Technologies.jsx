import technologies from "../../data/technologies";

const SkillBox = ({ title, items }) => (
  <div className="box-stats with-margin">
    <h6 className="">{title}</h6>
    <div className="coursework-grid">
      {items.map((tech, idx) => (
        <span key={idx} className="course-block">
          {tech.technology}
        </span>
      ))}
    </div>
  </div>
);

// ETL
export const ETLTechnologies = () => {
  const items = technologies.filter((t) => t.skill === "ETL Development & Automation");
  return <SkillBox title="ETL Development & Automation" items={items} />;
};

// ML
export const MLTechnologies = () => {
  const items = technologies.filter((t) => t.skill === "Machine Learning & MLOps");
  return <SkillBox title="Machine Learning & MLOps" items={items} />;
};

// Cloud
export const CloudTechnologies = () => {
  const items = technologies.filter((t) => t.skill === "Cloud & Data Platforms");
  return <SkillBox title="Cloud & Data Platforms" items={items} />;
};

// Languages
export const LanguageTechnologies = () => {
  const items = technologies.filter((t) => t.skill === "Programming Languages");
  return <SkillBox title="Programming Languages" items={items} />;
};

// Tools
export const ToolTechnologies = () => {
  const items = technologies.filter((t) => t.skill === "Other Tools");
  return <SkillBox title="Other Tools" items={items} />;
};
