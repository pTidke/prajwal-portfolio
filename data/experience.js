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

        <h5>SDSU Research (KALM / KBLaM)</h5>
        <p style={{ textAlign: "justify" }}>
          Architected <strong>KALM</strong>, a RAG-based mental health chatbot
          for construction workers using FastAPI, GPT-4, and ChromaDB —
          engineering a 5-stage <strong>ALGEE therapeutic framework</strong>,
          real-time crisis detection (<strong>53 signal patterns</strong>), 4 AI
          personas, and AES-128 encrypted storage across 1,000+ clinical
          knowledge chunks.
          <br />
          Implemented <strong>KBLaM architecture</strong> — constructed 10K+
          domain-specific knowledge-base triples, built QA evaluation datasets,
          and fine-tuned <strong>LLaMA</strong>, achieving 12% improvement in
          domain-specific accuracy.
          <br />
          Engineered <strong>WGAN-based synthetic data pipeline</strong> for
          biosignal analysis, generating 50K+ samples and reducing core-temperature
          prediction MAE by 15% over baseline.
        </p>

        <h5>Impact</h5>
        <p style={{ textAlign: "justify" }}>
          Advances the research frontier on{" "}
          <strong>knowledge-grounded LLMs</strong> for mental health contexts.
          <br />
          Demonstrates feasible <strong>biosignal-driven ML</strong> for safety
          monitoring with explicit uncertainty estimates.
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

        <h5>Analytics Pod (Client: CPPIB, $550B+ AUM)</h5>
        <p style={{ textAlign: "justify" }}>
          Embedded with <strong>Canada Pension Plan Investment Board</strong> as
          part of a 2-person analytics pod, owning the full data engineering
          stack — from relational schema design in <strong>Databricks</strong>{" "}
          to executive reported dashboards for senior portfolio managers.
          <br />
          Re-architected ingestion with <strong>AWS SQS/SNS</strong> into S3/PySpark
          across <strong>1 TB+ daily data</strong>, delivering 20% faster
          ingestion, 40% lower latency, and 15% higher reporting throughput.
          <br />
          Built <strong>VBA automation plugin</strong> integrating S&P Global
          and Visible Alpha data feeds into Excel financial models, pushing
          cleaned outputs to the Valsys database for KPI dashboard refresh —
          reclaiming <strong>25 hrs/week</strong> and reducing manual errors by
          70%.
          <br />
          Standardized <strong>validation rules</strong> (row-counts, schema
          drift, freshness) and enforced data SLAs across 3+ client workstreams,
          achieving <strong>zero reporting deadline misses</strong>.
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

        <h5>Enterprise Data Engineering (Client: Carrier Global)</h5>
        <p style={{ textAlign: "justify" }}>
          Led a 3-person data engineering pod delivering enterprise-scale data
          solutions across <strong>6+ clients including Carrier Global</strong>.
          Responsible for full delivery lifecycle — sprint planning, code
          reviews, client QBRs, and governance audits.
          <br />
          Spearheaded migration of legacy SAP workflows to{" "}
          <strong>AWS Glue</strong> with <strong>Oracle-to-Snowflake</strong>{" "}
          transfers, cutting infrastructure + licensing costs by ~
          <strong>50%</strong>.
          <br />
          Optimized <strong>SAP BODS ETL pipelines</strong> integrating ECC,
          HANA, SQL Server, and Oracle, compressing reporting from days to
          hours (<strong>80% faster execution</strong>).
          <br />
          Automated 5+ recurring data-mapping workflows, reclaiming{" "}
          <strong>1.5 FTEs annually</strong> and maintaining continuous audit
          readiness under enterprise governance frameworks.
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
