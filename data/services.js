module.exports = [
  {
    id: 1,
    imgIcon: "/img/svg/wildfire.svg",
    title: (
      <>
        Wildfire Risk <br /> Prediction in California
      </>
    ),
    imageCredit: (
      <p>
        Photo by{" "}
        <a
          href="https://unsplash.com/@brianwangenheim"
          target="_blank"
          rel="noreferrer"
        >
          Brian Wangenheim
        </a>{" "}
        on{" "}
        <a
          href="https://unsplash.com/photos/brown-wooden-signage-on-brown-sand-during-daytime-VRuyoZFXISo"
          target="_blank"
          rel="noreferrer"
        >
          Unsplash
        </a>
      </p>
    ),
    popupImg: "/img/service/wildfire.jpg",
    popupTitle: "Wildfire Risk Prediction Using ML & Spatiotemporal Features",
    firstDescriptionText: (
      <>
        <p>
          Spatiotemporal ML pipeline to forecast wildfire-prone zones in
          California by fusing NDVI, weather, land cover, and satellite fire
          detections.
        </p>
      </>
    ),
    serviceListDescriptions: (
      <>
        <h3>Description</h3>
        <p>
          Wildfires devastate California annually. We designed a scalable ML
          system that unifies heterogeneous environmental data to produce
          actionable risk maps for early warning and resource allocation.
          Forecasting fire risk requires handling multi-source data (NDVI,
          ERA5/Meteostat weather, land cover, satellite fire detections) and
          capturing temporal/seasonal dynamics for reliable local risk
          estimates.
        </p>

        <h3>Data & Tools</h3>
        <p>
          Data: NASA FIRMS, ERA5 & Meteostat, NDVI time-series, land cover
          rasters.
          <br />
          Tools: Python, PyTorch, Scikit-learn, GeoPandas, Rasterio, CatBoost,
          XGBoost, FT-Transformer, ArcGIS.
        </p>

        <h3>Approach</h3>
        <p>
          • Raster sampling, temporal alignment, and spatial joins to build a
          unified feature store (500k+ samples).
          <br />• Feature engineering: NDVI trends, wind speed, seasonal tags,
          vegetation stress indicators.
          <br />• Modeling: Random Forest/CatBoost/XGBoost baselines; MLP and
          FT-Transformer as neural baselines.
          <br />• Interpretability: feature importance, cluster analysis;
          geo-aggregated risk visualization.
        </p>

        <h3>Results</h3>
        <p>
          • ~71.67% F1-score with RF/CatBoost on FRP risk classification.
          <br />• Top predictors: NDVI, wind speed, seasonal patterns.
          <br />• Localized risk maps (ArcGIS) enabling targeted readiness.
        </p>

        <h3>Impact</h3>
        <p>
          Demonstrates how ML-driven geospatial analytics can support early
          warning, suppression planning, and community preparedness.
        </p>

        {/* <h3>Links</h3>
        <p>GitHub: <a href="https://github.com/pTidke/BDA602" target="_blank" rel="noreferrer">github.com/pTidke/BDA602</a></p> */}
      </>
    ),
  },
  {
    id: 2,
    imgIcon: "/img/svg/healthcare.svg",
    title: (
      <>
        Medi-vu: <br /> Healthcare Access Tool
      </>
    ),
    imageCredit: (
      <p>
        Photo by{" "}
        <a
          href="https://unsplash.com/@dawson2406"
          target="_blank"
          rel="noreferrer"
        >
          Stephen Dawson
        </a>{" "}
        on{" "}
        <a
          href="https://unsplash.com/photos/turned-on-monitoring-screen-qwtCeJ5cLYs"
          target="_blank"
          rel="noreferrer"
        >
          Unsplash
        </a>
      </p>
    ),
    popupImg: "/img/service/medivu.jpg",
    popupTitle: "Medi-vu: Geographic Healthcare & Disease Analysis",
    firstDescriptionText: (
      <>
        <p>
          Geospatial decision-support that connects healthcare infrastructure
          with disease burden to expose underserved regions in California.
        </p>
      </>
    ),
    serviceListDescriptions: (
      <>
        <h3>Description</h3>
        <p>
          <em>Medi-vu</em> helps policymakers visualize where capacity (beds,
          staff, Medi-Cal providers) trails disease mortality, bringing equity
          to public health planning. Agencies lacked an integrated dashboard to
          analyze healthcare deserts—areas with high mortality but low
          infrastructure. We centralized, standardized, and mapped these data
          for action.
        </p>

        <h3>Data & Tools</h3>
        <p>
          Data: Hospital capacity, Medi-Cal provider networks, cause-specific
          mortality.
          <br />
          Tools: Databricks (PySpark), Python, Tableau, ArcGIS, Excel.
        </p>

        <h3>Approach</h3>
        <p>
          • Processed 1M+ records in PySpark; standardized/linked across
          sources.
          <br />• Computed access scores by combining provider/beds with
          population & mortality.
          <br />• Designed interactive Tableau + ArcGIS dashboards with spatial
          filters/layers.
          <br />• Region ranking for prioritization and investment targeting.
        </p>

        <h3>Results</h3>
        <p>
          • Identified 5+ high-burden, low-access regions.
          <br />• Automated ETL dramatically reduced manual prep and refresh
          time.
          <br />• Dashboards support real-time slicing by disease, geography,
          and metrics.
        </p>

        <h3>Impact</h3>
        <p>
          Enables data-driven investments and equitable interventions across
          rural and urban communities.
        </p>

        {/* <h3>Links</h3>
        <p>Website: <a href="https://your-project-website.com" target="_blank" rel="noreferrer">medi-vu.io</a> | Video: <a href="https://www.youtube.com/watch?v=your-video-link" target="_blank" rel="noreferrer">YouTube Demo</a></p> */}
      </>
    ),
  },
  {
    id: 3,
    imgIcon: "/img/svg/traffic.svg",
    title: (
      <>
        TrafficSensAI: <br /> Traffic Risk Predictor
      </>
    ),
    imageCredit: (
      <p>
        Photo by{" "}
        <a
          href="https://unsplash.com/@dieselson"
          target="_blank"
          rel="noreferrer"
        >
          son diesel
        </a>{" "}
        on{" "}
        <a
          href="https://unsplash.com/photos/white-and-green-car-toy-nTK8mi81K7U"
          target="_blank"
          rel="noreferrer"
        >
          Unsplash
        </a>
      </p>
    ),
    popupImg: "/img/service/traffic.jpg",
    popupTitle: "TrafficSensAI: Predictive Traffic Accident Analysis Tool",
    firstDescriptionText: (
      <>
        <p>
          Full-stack ML + geospatial platform that clusters accident hotspots
          and predicts severity to inform proactive road-safety planning.
        </p>
      </>
    ),
    serviceListDescriptions: (
      <>
        <h3>Description</h3>
        <p>
          TrafficSensAI anticipates where and how severely accidents may occur,
          enabling targeted interventions before incidents happen.
          Municipalities relied on historical reports, not forecasts. We built a
          predictive system with interactive geovisualization for planners and
          safety teams.
        </p>

        <h3>Data & Tools</h3>
        <p>
          Data: 10k+ historical accident records, weather, time-of-day,
          infrastructure.
          <br />
          Tools: Python, Pandas, Scikit-learn, DBSCAN, Random Forest, ArcGIS,
          React.js, Flask.
        </p>

        <h3>Approach</h3>
        <p>
          • DBSCAN clustering to identify persistent hotspot corridors.
          <br />• Random Forest severity model with contextual feature
          engineering.
          <br />• ArcGIS heatmaps and filters for spatial exploration.
          <br />• React.js frontend + Flask APIs with sub-500ms responses.
        </p>

        <h3>Results</h3>
        <p>
          • ~82% accuracy on severity classification.
          <br />• Clustered hotspots into actionable zones for enforcement &
          design.
          <br />• Interactive UI for “what-if” and corridor-level analysis.
        </p>

        <h3>Impact</h3>
        <p>
          Supports data-driven safety campaigns, infrastructure changes, and
          prioritization of limited resources.
        </p>

        {/* <h3>Links</h3>
        <p>GitHub: <a href="https://github.com/pTidke/TrafficSensAI" target="_blank" rel="noreferrer">github.com/pTidke/TrafficSensAI</a></p> */}
      </>
    ),
  },
  {
    id: 4,
    imgIcon: "/img/svg/anomaly.svg",
    title: (
      <>
        Anomaly Detection <br /> with WGAN
      </>
    ),
    imageCredit: (
      <p>
        Photo by{" "}
        <a
          href="https://unsplash.com/@jakobowens1"
          target="_blank"
          rel="noreferrer"
        >
          Jakob Owens
        </a>{" "}
        on{" "}
        <a
          href="https://unsplash.com/photos/orange-and-blue-round-light-dGXGDairmK0"
          target="_blank"
          rel="noreferrer"
        >
          Unsplash
        </a>
      </p>
    ),
    popupImg: "/img/service/anomaly.jpg",
    popupTitle: "Enhancing Tabular Anomaly Detection via WGAN & Transformers",
    firstDescriptionText: (
      <>
        <p>
          Research study on whether WGAN-GP augmentation can improve anomaly
          detection in imbalanced tabular datasets and remain interpretable.
        </p>
      </>
    ),
    serviceListDescriptions: (
      <>
        <h3>Description</h3>
        <p>
          Anomalies are rare and hard to learn from. We evaluated
          class-conditional WGAN-GP to synthesize minority samples and bolster
          downstream detectors. Classical detectors (OC-SVM, Deep SVDD) degrade
          under severe imbalance. Could GAN-based augmentation improve accuracy
          and robustness across models?
        </p>

        <h3>Data & Tools</h3>
        <p>
          Data: Sparse tabular biological datasets.
          <br />
          Tools: PyTorch, Scikit-learn, WGAN-GP, TabTransformer, Autoencoders,
          OC-SVM, Deep SVDD.
        </p>

        <h3>Approach</h3>
        <p>
          • Class-conditional WGAN-GP with diversity & feature-matching losses.
          <br />• Benchmarks: OC-SVM/Deep SVDD vs. MLP, LSTM, TabTransformer.
          <br />• Attention/feature attributions for interpretability and QA.
        </p>

        <h3>Results</h3>
        <p>
          • 20–30% improvement in detection under severe imbalance.
          <br />• Largest gains for classical baselines with GAN-augmented
          training.
          <br />• Interpretability supports domain review and trust.
        </p>

        <h3>Impact</h3>
        <p>
          Extends anomaly detection to low-prevalence domains (healthcare,
          finance, security) where labeled anomalies are scarce.
        </p>

        {/* <h3>Links</h3>
        <p>GitHub: <a href="https://github.com/pTidke/BDA602" target="_blank" rel="noreferrer">github.com/pTidke/BDA602</a></p> */}
      </>
    ),
  },
];
