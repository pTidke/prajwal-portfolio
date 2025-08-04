import React from "react";

const skillsContent = [
  {
    name: "ETL Development & Automation",
    skillPercent: "95",
    technologies: [
      "Apache Airflow",
      "Databricks",
      "SAP BODS",
      "Power Automate",
      "VBA",
    ],
  },
  {
    name: "Machine Learning & MLOps",
    skillPercent: "80",
    technologies: ["scikit-learn", "TensorFlow", "PyTorch", "MLflow", "WandB"],
  },
  {
    name: "Cloud & Data Platforms",
    skillPercent: "95",
    technologies: ["AWS", "Snowflake", "Azure", "GCP", "SAP HANA"],
  },
  {
    name: "Programming Languages",
    skillPercent: "85",
    technologies: ["Python", "SQL", "JavaScript", "Shell"],
  },
  {
    name: "Other Tools",
    skillPercent: "90",
    technologies: ["Git", "Docker", "Jira", "Figma", "Notion"],
  },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="progress_inner" key={i}>
          <span className="label">{val.name}</span>
          <div className="background">
            <div className="bar">
              <div
                className="bar_in"
                style={{ width: val.skillPercent + "%" }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;
