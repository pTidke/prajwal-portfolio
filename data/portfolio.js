module.exports = [
  {
    id: 1,
    title: (
      <>
        KALM: <span style={{ color: "#BA0C2F", fontWeight: 400 }}>AI-Powered Mental Health Support Chatbot</span>
      </>
    ),
    tagline: "RAG-based clinical chatbot with real-time crisis detection, therapeutic conversation framework, and encrypted session management.",
    portfolioImage: "/img/portfolio/kalm.png",
    description: "KALM is a production RAG chatbot designed to provide mental health support for construction workers — a population with disproportionately high suicide rates and low access to services. The system combines clinical knowledge retrieval with safety-first conversation design.",
    techStack: ["FastAPI", "Azure OpenAI", "ChromaDB", "Supabase", "Next.js", "AES-128"],
    details: [
      "RAG pipeline ingesting DSM-5 + 7 clinical documents into ChromaDB with topic-aware routing across 7 categories.",
      "5-stage ALGEE therapeutic framework with adaptive stage advancement and minimum-turn thresholds.",
      "Multi-layered safety system: 53 crisis signal patterns with 2-tier escalation and automated resource injection.",
      "AES-128 Fernet encryption for all stored messages — zero plaintext exposure in database.",
    ],
    metrics: [
      "1,000+ knowledge chunks",
      "53 crisis signal patterns",
      "9 RESTful API endpoints",
      "5-stage therapeutic flow",
    ],
    viewLive: "https://kalm-omega.vercel.app",
    viewCode: "https://github.com/pTidke/kalm-rag", // Placeholder based on common naming
  },
  {
    id: 2,
    title: (
      <>
        AllAboutTax: <span style={{ color: "#BA0C2F", fontWeight: 400 }}>AI-Powered Tax Advisory Platform</span>
      </>
    ),
    tagline: "Full-stack AI tax assistant with persistent conversation memory, real-time streaming, and role-based access control.",
    portfolioImage: "/img/portfolio/allabouttax.png",
    description: "AllAboutTax is an AI-powered web application built to assist users with the Indian tax regime (FY 2025-26 rules). It features a custom OpenAI Assistant with persistent memory and a headless CMS.",
    techStack: ["Next.js 15", "React 19", "OpenAI Assistants API", "PostgreSQL", "Prisma", "Sanity CMS"],
    details: [
      "Stateful AI integration using OpenAI Assistants API with threadId permanently mapped to users in PostgreSQL.",
      "Real-time streaming via Vercel AI SDK's AssistantResponse routing with 30s serverless connection support.",
      "Freemium rate limiting: questionsToday and lastQuestionAt tracking per user role.",
      "Headless CMS via Sanity Studio with ISR (revalidate: 30) for sub-second static content serving.",
    ],
    metrics: [
      "React 19 / Next.js 15",
      "OpenAI Assistants API",
      "Prisma / PostgreSQL",
      "Sanity Headless CMS",
    ],
    viewLive: "https://allabouttax.in",
    viewCode: "https://github.com/pTidke/allabouttax",
  },
  {
    id: 3,
    title: (
      <>
        AISI: <span style={{ color: "#BA0C2F", fontWeight: 400 }}>Composite Country-Level AI Scoring</span>
      </>
    ),
    tagline: "7-dimension AI resilience scoring system built from 31 heterogeneous data sources across 195 countries.",
    portfolioImage: "/img/portfolio/aisi.png",
    description: "AISI quantifies national AI capability across 7 dimensions using a composite scoring methodology with log-normalized metrics and coverage-weighted aggregation.",
    techStack: ["Python", "Pandas", "Next.js", "Three.js", "Ant Design Charts", "Nivo"],
    details: [
      "Ingested 31 heterogeneous CSV files across 5 ETO datasets into 8 master datasets (~53.7k rows).",
      "Semiconductor pipeline: 6-step ETL with provider deduplication and 4-way left-join chain.",
      "Scoring: Log transformations on skewed metrics and coverage-weighted aggregation to handle 'no data' vs 'low capability'.",
      "Visualization: Three.js 3D globe with ~70 collaboration arcs and 15+ interactive React chart components.",
    ],
    metrics: [
      "53,700+ rows processed",
      "195 countries scored",
      "31 source data files",
      "15+ interactive charts",
    ],
    viewLive: "https://aisi-bda600.vercel.app",
    viewCode: "https://github.com/pTidke/aisi-bda600",
  },
  {
    id: 4,
    title: (
      <>
        TrafficSensAI: <span style={{ color: "#BA0C2F", fontWeight: 400 }}>Predictive Traffic Accident Analysis Tool</span>
      </>
    ),
    tagline: "Full-stack ML + geospatial platform for predictive accident severity classification and hotspot detection.",
    portfolioImage: "/img/portfolio/trafficsensai.png",
    description: "TrafficSensAI predicts accident severity and surfaces high-risk urban hotspots using spatial clustering and ensemble classification, served through an interactive geospatial frontend.",
    techStack: ["Python", "Scikit-Learn", "DBSCAN", "Random Forest", "Flask", "React", "ArcGIS"],
    details: [
      "DBSCAN spatial clustering to identify persistent hotspot corridors from historical incident data.",
      "Random Forest severity classifier with feature engineering for weather and infrastructure variables.",
      "Flask REST API serving real-time predictions to a React frontend with ArcGIS integration.",
    ],
    metrics: [
      "500K+ records",
      "87%+ accuracy",
    ],
    viewLive: "https://trafficsensai.onrender.com/",
    viewCode: "https://github.com/pTidke/TrafficSensAI",
  },
  {
    id: 5,
    title: (
      <>
        Wildfire: <span style={{ color: "#BA0C2F", fontWeight: 400 }}>Geospatial ML for Forest Fire Risk Assessment</span>
      </>
    ),
    tagline: "Geospatial ML for forest fire risk assessment using satellite and meteorological data.",
    portfolioImage: "/img/portfolio/wildfire.png",
    description: "A machine learning project focused on assessing wildfire risks by analyzing multi-dimensional spatial data including weather patterns and historical fire events.",
    techStack: ["Python", "XGBoost", "Geopandas", "Rasterio"],
    details: [
      "Built predictive models using XGBoost achieving a ~71.67% F1-score.",
      "Integrated meteorological and geospatial datasets to surface high-risk zones.",
    ],
    metrics: [
      "71.67% F1-score",
    ],
    viewLive: "#",
    viewCode: "https://github.com/pTidke/wildfire-risk",
  },
  {
    id: 6,
    title: (
      <>
        Medi-vu: <span style={{ color: "#BA0C2F", fontWeight: 400 }}>Healthcare Data Analytics & Visualization Platform</span>
      </>
    ),
    tagline: "Scalable healthcare data analytics platform for clinical outcome visualization.",
    portfolioImage: "/img/portfolio/medivu.png",
    description: "A Databricks and PySpark showcase demonstrating large-scale healthcare data processing and visualization through interactive BI dashboards.",
    techStack: ["Databricks", "PySpark", "Tableau", "SQL"],
    details: [
      "Processed 1M+ records in PySpark for clinical insight generation.",
      "Designed interactive Tableau dashboards for executive healthcare reporting.",
    ],
    metrics: [
      "1M+ records processed",
    ],
    viewLive: "#",
    viewCode: "https://github.com/pTidke/Medi-vu",
  },
];
