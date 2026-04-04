import React from "react";

const skillsContent = [
  {
    category: "Data Engineering & Cloud",
    technologies: [
      "Databricks",
      "Airflow",
      "AWS Glue",
      "PySpark",
      "Delta Lake",
      "Kafka",
      "Snowflake",
      "BigQuery",
      "S3",
      "Redshift",
      "EC2",
      "Athena",
      "Azure AI Foundry",
      "GCP",
    ],
  },
  {
    category: "AI & MLOps",
    technologies: [
      "PyTorch",
      "Hugging Face",
      "LangChain",
      "OpenAI API",
      "RAG",
      "LLM Fine-tuning",
      "ChromaDB",
      "FastAPI",
      "Flask",
      "Docker",
    ],
  },
  {
    category: "Programming",
    technologies: ["Python", "PySpark", "SQL", "TypeScript", "JavaScript", "React", "Next.js"],
  },
  {
    category: "Data & BI Tools",
    technologies: ["PostgreSQL", "MongoDB", "Tableau", "PowerBI", "Git", "Jira", "Confluence"],
  },
];

const Skills = () => {
  return (
    <div className="skills-grid-container">
      {skillsContent.map((val, i) => (
        <div className="skill-category-box" key={i}>
          <h6 className="category-title">{val.category}</h6>
          <div className="chips-wrapper">
            {val.technologies.map((tech, j) => (
              <span key={j} className="skill-chip">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
      <style jsx>{`
        .skills-grid-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 25px;
          margin-top: 10px;
          width: 100%;
          padding-left: 20px; /* Aligns grid with the header above */
        }
        @media (max-width: 480px) {
          .skills-grid-container {
            grid-template-columns: 1fr;
          }
        }
        .skill-category-box {
          background: #f9f9f9;
          padding: 15px;
          border-radius: 8px;
          border: 1px solid rgba(0, 0, 0, 0.1);
        }
        .category-title {
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 15px;
          color: #333;
          font-weight: 700;
        }
        .chips-wrapper {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .skill-chip {
          background: #f5f5f5;
          color: #333;
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
          border: 1px solid #e0e0e0;
          transition: all 0.2s ease;
        }
        .skill-chip:hover {
          background: #BA0C2F;
          color: #fff;
          border-color: #BA0C2F;
        }
      `}</style>
    </div>
  );
};

export default Skills;
