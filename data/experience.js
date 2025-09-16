module.exports = [
  {
    id: 1,
    year: "Feb 2025 - Present",
    position: "Research Assistant",
    client: "LINC Lab",
    category: "Part-Time",
    companyLogo: "/img/companies/sdsup.png",
    h: 160,
    w: 30,

    title: (
      <>
        Research Assistant
        <br />
        <span style={{ fontWeight: 400, color: "#BA0C2F" }}>SDSU Research</span>
        <br />
        <span style={{ fontWeight: 400 }}>Lab - LINC</span>
      </>
    ),
    compnayName: "SDSU Research",
    popupTitle: "Research Assistant",
    serviceListDescriptions: (
      <>
        <h5>Overview</h5>
        <p style={{ textAlign: "justify" }}>
          I work at the intersection of{" "}
          <strong>LLMs, healthcare, and biosignals</strong>, contributing to two
          active research tracks: (1) a{" "}
          <strong>knowledge-grounded mental health chatbot</strong> that uses
          KB-aligned LLMs to explore empathetic, safe responses, and (2) a{" "}
          <strong>core temperature prediction</strong> system built on
          multimodal biosignals for occupational safety. Both efforts are in the{" "}
          <em>research phase</em>, emphasizing rigorous methodology,
          uncertainty/interpretability, and reproducibility.
        </p>

        <h5>Mental Health Chatbot (Research Landscape)</h5>
        <p style={{ textAlign: "justify" }}>
          Fine-tuned <strong>LLaMA</strong> with <strong>KBLaM</strong> to
          ground conversations in psychological knowledge; designed domain
          prompts and scenario banks for controlled evaluation.
          <br />
          Built a <strong>multilingual, privacy-aware prototype</strong>{" "}
          tailored to low-resource mobile environments (construction context),
          with attention to safety policies and guardrails.
          <br />
          Defined qualitative/quantitative rubrics for{" "}
          <strong>empathy, contextual relevance, and safety</strong>; created
          experiment logs and ablation plans to isolate KB effects.
        </p>

        <h5>Core Temperature Prediction from Biosignals</h5>
        <p style={{ textAlign: "justify" }}>
          Trained <strong>MLP, LSTM, LagMLP (temporal attention)</strong> over
          PPG/ECG/EDA; engineered temporal windows, normalization schemes, and
          signal quality filters.
          <br />
          Achieved ~<strong>25% MAE reduction</strong> vs. baselines; applied{" "}
          <strong>WGAN-based augmentation</strong> and{" "}
          <strong>Monte Carlo Dropout</strong> to quantify uncertainty and
          improve robustness.
          <br />
          Evaluated generalization via{" "}
          <strong>Leave-One-Subject-Out (LOSO-CV)</strong>; surfaced
          fairness/domain shift issues and documented mitigation directions.
        </p>

        <h5>Impact</h5>
        <p style={{ textAlign: "justify" }}>
          Advances the research frontier on{" "}
          <strong>knowledge-grounded LLMs</strong> for mental health contexts.
          <br />
          Demonstrates feasible <strong>biosignal-driven ML</strong> for safety
          monitoring with explicit uncertainty estimates.
          <br />
          Establishes reproducible pipelines and documentation for future
          clinical/industrial collaboration.
        </p>
      </>
    ),
  },

  {
    id: 2,
    year: "Oct 2023 - Aug 2024",
    position: "Associate Data Engineer",
    client: "CPPIB",
    category: "Full-Time",
    companyLogo: "/img/companies/tresv.png",
    h: 160,
    w: 50,

    title: (
      <>
        Associate Data Engineer
        <br />
        <span style={{ fontWeight: 400, color: "#BA0C2F" }}>
          TresVista Analytics
        </span>
        <br />
        <span style={{ fontWeight: 400 }}>Client – CPPIB</span>
      </>
    ),
    compnayName: "TresVista Analytics",
    popupTitle: "Associate Data Engineer",
    serviceListDescriptions: (
      <>
        <h5>Overview</h5>
        <p style={{ textAlign: "justify" }}>
          At TresVista, I supported CPPIB's investment analytics by building
          scalable, metadata-driven ETL pipelines that integrated alternative
          data from mobility, app performance, and financial vendors into a
          centralized data lake. I collaborated with client teams to define
          SLAs, automate reporting workflows with Python and Power Automate, and
          improve data ingestion latency by 50%, ensuring high reliability and
          faster insights across research streams.
        </p>

        <h5>Data Ingestion & ETL</h5>
        <p style={{ textAlign: "justify" }}>
          Integrated vendor feeds: <strong>Placer.ai</strong>{" "}
          (mobility/foot-traffic), <strong>Sensor Tower</strong> &amp;{" "}
          <strong>Similarweb</strong> (app performance),{" "}
          <strong>S&amp;P Global</strong>, <strong>Visible Alpha</strong>,{" "}
          <strong>Earnest Analytics</strong> (financial/transactional).
          <br />
          Built <strong>metadata-driven ingestion</strong> with schema
          harmonization, dynamic source onboarding, and reusable transformation
          modules in <strong>Databricks (PySpark)</strong>.<br />
          Orchestrated dependencies and SLAs with{" "}
          <strong>Apache Airflow</strong>; implemented{" "}
          <strong>AWS SQS/SNS/S3</strong> event triggers, retries, and alerting
          for reliability.
        </p>

        <h5>Automation & Optimization</h5>
        <p style={{ textAlign: "justify" }}>
          Automated recurring analyst workflows using{" "}
          <strong>Python, Excel/VBA, Power Automate</strong>, cutting manual
          effort by ~<strong>70%</strong> and removing key-person risk.
          <br />
          Reduced ingestion latency by ~<strong>50%</strong> through optimized
          partitioning, checkpointing, and backfill strategies; added lineage
          and monitoring hooks for traceability.
          <br />
          Standardized <strong>validation rules</strong> (row-counts, schema
          drift, freshness) to enforce quality across feeds; documented runbooks
          and escalation paths.
        </p>

        <h5>Client Engagement & Governance</h5>
        <p style={{ textAlign: "justify" }}>
          Co-defined <strong>KPIs/SLAs</strong> with investment stakeholders;
          translated research questions into datasets, pipeline contracts, and
          dashboard requirements.
          <br />
          Managed a <strong>2-person analytics team</strong>; contributed to
          hiring and technical evaluations; facilitated stand-ups and weekly
          governance reviews.
          <br />
          Proposed architecture improvements for timeliness/reliability (e.g.,
          vendor API quotas, delta handling, sandbox vs. prod environments).
        </p>

        <h5>Impact</h5>
        <p style={{ textAlign: "justify" }}>
          ~<strong>70%</strong> reduction in manual reporting effort; ~
          <strong>50%</strong> faster ingestion cycles.
          <br />
          Consistent, governed alternative-data flows enabling repeatable
          investment analysis.
          <br />
          Clear documentation and metrics improved trust and adoption across
          teams.
        </p>
      </>
    ),
  },

  {
    id: 3,
    year: "Jul 2020 - Oct 2023",
    position: "Senior Data Engineer",
    client: "Carrier Global",
    category: "Full-Time",
    companyLogo: "/img/companies/lti.png",
    h: 180,
    w: 50,

    title: (
      <>
        Senior Data Engineer
        <br />
        <span style={{ fontWeight: 400, color: "#BA0C2F" }}>LTIMindtree</span>
        <br />
        <span style={{ fontWeight: 400 }}>Client – Carrier Global</span>
      </>
    ),
    compnayName: "LTIMindtree",
    popupTitle: "Senior Data Engineer",
    serviceListDescriptions: (
      <>
        <h5>Overview</h5>
        <p style={{ textAlign: "justify" }}>
          At LTIMindtree, I led engineering for Carrier Global’s enterprise data
          warehouse and cloud modernization efforts. My work focused on
          developing and migrating ETL pipelines using SAP BODS and AWS Glue,
          optimizing reporting across SAP ECC, Oracle, and Snowflake. I also
          managed a small team, governed SLAs and support processes in
          ServiceNow, and delivered 50% cost savings and faster reporting
          through cloud-native solutions.
        </p>

        <h5>Global Data Warehouse</h5>
        <p style={{ textAlign: "justify" }}>
          Developed centralized ETL in <strong>SAP BODS</strong> across{" "}
          <strong>SAP ECC</strong>, <strong>HANA</strong>,{" "}
          <strong>Oracle</strong>, <strong>SQL Server</strong>, and flat files;
          implemented robust error-handling and restartability.
          <br />
          Administered BODS (repositories, job servers, patching, access
          control); enforced governance and audit readiness across environments.
          <br />
          Supported <strong>Snowflake</strong> consumers by resolving incidents,
          triaging ad-hoc requests, and tuning queries; validated flows with{" "}
          <strong>SAP IDT/WEBI</strong> reports.
        </p>

        <h5>Raise to Cloud Modernization</h5>
        <p style={{ textAlign: "justify" }}>
          Converted <strong>SAP BODS → AWS Glue (PySpark)</strong> with modular
          workflow logic, better partitioning, and CI-friendly structures.
          <br />
          Engineered <strong>Oracle → Snowflake</strong> migration via SAP
          Workbench; replaced brittle FTP jobs with <strong>AWS S3</strong>{" "}
          event-driven ingestion.
          <br />
          Delivered ~<strong>50%</strong> projected cost savings and ~
          <strong>80%</strong> faster reporting through cloud-native patterns
          and optimized storage/compute.
        </p>

        <h5>Leadership & Governance</h5>
        <p style={{ textAlign: "justify" }}>
          Served as <strong>Project Lead</strong> for a 2-person team; managed
          backlog/sprints, risk, vendor coordination, and stakeholder
          communication.
          <br />
          Built <strong>ServiceNow</strong> dashboards to track incidents, SLAs,
          and compliance KPIs; authored SOPs for support handover and production
          hygiene.
          <br />
          Drove standards for code reviews, promotion workflows, and
          documentation to reduce operational toil and mean-time-to-recover.
        </p>

        <h5>Impact</h5>
        <p style={{ textAlign: "justify" }}>
          Established a <strong>cloud-first, governed analytics</strong>{" "}
          foundation for enterprise reporting.
          <br />
          Achieved measurable gains in cost, performance, and reliability that
          scaled across teams.
          <br />
          Enhanced organizational maturity in{" "}
          <strong>ETL engineering, observability, and compliance</strong>.
        </p>
      </>
    ),
  },
];
