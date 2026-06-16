module.exports = [
  {
    id: 1,
    year: "Feb 2025 - May 2026",
    position: "AI Data Engineer",
    client: "LINC Lab",
    category: "Part-Time",
    companyLogo: "/img/companies/sdsup.png",
    h: 160,
    w: 30,

    title: (
      <>
        AI Data Engineer
        <br />
        <span style={{ fontWeight: 400, color: "#BA0C2F" }}>SDSU Research</span>
        <br />
        <span style={{ fontWeight: 400 }}>Lab - LINC</span>
      </>
    ),
    compnayName: "SDSU Research",
    popupTitle: "AI Data Engineer",
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
          Built the ingestion + retrieval layer over <strong>ChromaDB + Azure OpenAI</strong> — parsing 1.5K+ multi-format clinical docs via Google LangExtract (<strong>~15 hrs/week</strong> of annotation eliminated), cutting query latency <strong>55%</strong> (1.2s mean / 1.7s p95), and gating answer quality at <strong>0.96 faithfulness</strong> across a <strong>200-query</strong> RAGAS + LLM-as-judge harness.
          <br />
          Built <strong>KALM</strong>, a clinical mental-health chatbot (FastAPI + Azure OpenAI GPT-4.1 + ChromaDB)
          ingesting DSM-5 and workplace safety docs via metadata-tagged chunking and topic-filtered vector retrieval;
          deployed on Render with a Vercel frontend.
          <br />
          Engineered a real-time crisis-signal interceptor and <strong>ALGEE-stage state machine</strong> across 4 AI
          personas. Handled live crisis escalation with strict security: AES-128 encryption, JWT/Supabase auth, prompt
          injection guards, and GDPR-compliant deletion endpoints.
          <br />
          Evaluated <strong>KBLaM</strong> for clinical LLM augmentation — built 1,000+ KB triples and QA pairs;
          pivoted to RAG after evaluation showed insufficient accuracy gains.
          <br />
          Built a <strong>WGAN biosignal pipeline</strong> (PyTorch + Hugging Face) generating 52K synthetic training
          samples; holdout evaluation showed 14.7% MAE reduction over real-data-only baseline (5-fold cross-validation,
          logged in W&B).
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
    position: "Senior Data Engineer",
    client: "CPPIB",
    category: "Full-Time",
    companyLogo: "/img/companies/tresv.png",
    h: 160,
    w: 50,

    title: (
      <>
        Senior Data Engineer
        <br />
        <span style={{ fontWeight: 400, color: "#BA0C2F" }}>
          TresVista Analytics
        </span>
        <br />
        <span style={{ fontWeight: 400 }}>Client – CPPIB</span>
      </>
    ),
    compnayName: "TresVista Analytics",
    popupTitle: "Senior Data Engineer",
    serviceListDescriptions: (
      <>
        <h5>Overview</h5>
        <p style={{ textAlign: "justify" }}>
          At TresVista, I supported CPPIB's investment analytics by building
          scalable, metadata-driven ETL pipelines that integrated alternative
          data from mobility, app performance, and financial vendors into a
          centralized data lake. I collaborated with client teams to define
          SLAs, automate reporting workflows with Python and Power Automate, and
          improve data ingestion latency by 38%, ensuring high reliability and
          faster insights across research streams.
        </p>

        <h5>Analytics Pod (Client: CPPIB, $550B+ AUM)</h5>
        <p style={{ textAlign: "justify" }}>
          Architected and managed the ETL/ELT workflow layer and dimensional schema design on a 
          <strong> Databricks + Airflow stack</strong> for CPPIB's portfolio reporting, with outputs 
          surfaced in Power BI & Valsys dashboards used daily by portfolio managers.
          <br />
          Redesigned <strong>SQS→S3 fan-out logic</strong> and PySpark partition strategy for a 1.2 TB/day ingestion layer; 
          Databricks job-run history showed 38% median latency drop and 19% throughput gain over a 6-week post-deploy window.
          <br />
          Applied <strong>Z-ordering</strong> on 4 high-cardinality Delta tables and rewrote 11 partition-unaware queries; 
          Databricks SQL query history showed median execution time fell from 4.2 min to 2.7 min across all dashboards (36% reduction).
          <br />
          Deployed <strong>Great Expectations</strong> with pytest CI/CD gates; 91% expectation coverage across 3 workstreams. 
          Maintained 100% SLA compliance and zero schema violations across 6 months post-launch.
          <br />
          Built a <strong>VBA plugin</strong> integrating S&P Global and Visible Alpha feeds directly into Excel financial models, 
          automating workflows and eliminating manual data updates for 3 analysts; saving an estimated ~22 hours/week.
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
          ~<strong>45%</strong> reduction in weekly manual analysis; ~<strong>38%</strong> lower ingestion latency.
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
          ServiceNow, and delivered ~$650K (65%) in annual cost savings and faster reporting
          through cloud-native solutions.
        </p>

        <h5>Enterprise Data Engineering (Client: Carrier Global)</h5>
        <p style={{ textAlign: "justify" }}>
          Delivered 5 enterprise client engagements over 3 years — BFSI and manufacturing verticals — in a 
          <strong> 3-person Agile team</strong>. Covered the full delivery lifecycle: sprint planning, 
          code reviews, governance audits, and QBRs with client stakeholders.
          <br />
          Optimized <strong>SAP BODS pipelines</strong> across SAP ECC, HANA, SQL Server, and Oracle via predicate pushdown 
          and composite index tuning; end-of-month reporting cycles dropped from 18-24 hrs to under 3 hrs.
          <br />
          Owned Python automation layer for 12 Oracle→Snowflake schema translations (<strong>AWS Glue</strong>); 
          eliminated 3 manual handoffs and reduced transform runtime by 41%. Overall migration saved ~$650K (65%) in annual operating costs.
          <br />
          Automated 7 recurring <strong>ELT workflows in Python</strong> (previously manual, run by 2 ops staff); 
          time-tracking logs showed 58 hrs/month of manual effort eliminated, equivalent to 0.9 FTE annually.
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
