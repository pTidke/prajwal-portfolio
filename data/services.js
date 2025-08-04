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
      <p >
        Photo by{" "}
        <a href="https://unsplash.com/@brianwangenheim?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noreferrer">
          Brian Wangenheim
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/photos/brown-wooden-signage-on-brown-sand-during-daytime-VRuyoZFXISo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noreferrer">
          Unsplash
        </a>
      </p>
    ),
    popupImg: "/img/service/wildfire.jpg",
    popupTitle: "Wildfire Risk Prediction Using ML & Spatiotemporal Features",
    firstDescriptionText: (
      <>
        <p>
          This project presents a scalable wildfire risk prediction system for California using satellite fire detections, vegetation indices (NDVI), weather data (ERA5, Meteostat), and land cover maps. Data was integrated using spatial joins and time alignment to build a feature-rich modeling dataset.
        </p>
        <p>
          Machine learning models like Random Forest and CatBoost achieved 71%+ accuracy in classifying fire risk. Neural baselines such as MLP and FT-Transformer were also evaluated. Key predictors included NDVI, wind speed, and seasonal patterns.
        </p>
      </>
    ),
    serviceListDescriptions: (
      <>
        <h3>Core Contributions</h3>
        <p>
          A modular pipeline for wildfire prediction integrating open-source environmental data and interpretable ML models.
        </p>
        <div className="in_list">
          <ul>
            <li>
              <p>Spatiotemporal data fusion using GeoPandas, Rasterio, Earth Engine.</p>
            </li>
            <li>
              <p>Modeling with Random Forest, CatBoost, FT-Transformer, MLP.</p>
            </li>
            <li>
              <p>FRP risk classification, feature importance, and spatial cluster analysis.</p>
            </li>
            <li>
              <p>Future-ready design: GNNs for spread, voting ensembles, real-time input.</p>
            </li>
          </ul>
        </div>
        <p><strong>Technologies Used:</strong> Python, PyTorch, GeoPandas, Google Earth Engine, CatBoost</p>
        <p>
          Project GitHub:{" "}
          <a href="https://github.com/pTidke/BDA602" target="_blank" rel="noreferrer">
            github.com/pTidke/BDA602
          </a>
        </p>
      </>
    )
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
      <p >
        Photo by{" "}
        <a href="https://unsplash.com/@dawson2406?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noreferrer">
          Stephen Dawson
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/photos/turned-on-monitoring-screen-qwtCeJ5cLYs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noreferrer">
          Unsplash
        </a>
      </p>
    ),
    popupImg: "/img/service/medivu.jpg",
    popupTitle: "Medi-vu: Geographic Healthcare & Disease Analysis",
    firstDescriptionText: (
      <>
        <p>
          Medi-vu is a geospatial data-driven tool that analyzes healthcare accessibility and disease mortality trends across California. It integrates hospital infrastructure, Medi-Cal providers, and disease mortality data to identify underserved regions and inform policy decisions.
        </p>
        <p>
          The project uses Tableau for dashboard visualization and ArcGIS for mapping. Results reveal clear disparities in healthcare infrastructure, especially in rural regions with high disease mortality.
        </p>
      </>
    ),
    serviceListDescriptions: (
      <>
        <h3>Core Features</h3>
        <p>
          Combines healthcare access metrics with disease patterns to deliver actionable insights for public health planning.
        </p>
        <div className="in_list">
          <ul>
            <li>
              <p>Healthcare access scoring using nurse-patient ratios and bed availability.</p>
            </li>
            <li>
              <p>Disease mortality trends mapped across regions (heart disease, cancer, Alzheimer's).</p>
            </li>
            <li>
              <p>Geospatial dashboard built with Tableau and ArcGIS.</p>
            </li>
            <li>
              <p>Actionable recommendations for underserved zones.</p>
            </li>
          </ul>
        </div>
        <p><strong>Technologies Used:</strong> Tableau, ArcGIS, Python, Excel, Medi-Cal Datasets</p>
        <p>
          Project Video:{" "}
          <a href="https://www.youtube.com/watch?v=your-video-link" target="_blank" rel="noreferrer">
            YouTube Demo
          </a>{" "}
          | Website:{" "}
          <a href="https://your-project-website.com" target="_blank" rel="noreferrer">
            medi-vu.io
          </a>
        </p>
      </>
    )
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
      <p >
        Photo by{" "}
        <a href="https://unsplash.com/@dieselson?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noreferrer">
          son diesel
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/photos/white-and-green-car-toy-nTK8mi81K7U?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noreferrer">
          Unsplash
        </a>
      </p>
    ),
    popupImg: "/img/service/traffic.jpg",
    popupTitle: "TrafficSensAI: Predictive Traffic Accident Analysis Tool",
    firstDescriptionText: (
      <>
        <p>
          TrafficSensAI is a machine learning system for predicting accident severity and identifying traffic hotspots using historical collision data. It uses DBSCAN clustering to reveal high-risk zones and Random Forest models to classify accident severity across California and U.S. cities.
        </p>
        <p>
          The tool offers granular risk ratings and supports urban planning, enforcement, and awareness by leveraging accident trends, time-of-day factors, and environmental conditions.
        </p>
      </>
    ),
    serviceListDescriptions: (
      <>
        <h3>Core Capabilities</h3>
        <p>
          ML-powered framework for traffic safety analysis and hotspot prediction using open datasets and spatial clustering.
        </p>
        <div className="in_list">
          <ul>
            <li>
              <p>DBSCAN clustering for accident-prone zone detection.</p>
            </li>
            <li>
              <p>Random Forest model to predict accident severity from contextual features.</p>
            </li>
            <li>
              <p>Time-of-day, weather, and infrastructure-based feature engineering.</p>
            </li>
            <li>
              <p>Interactive geospatial visualizations and risk heatmaps.</p>
            </li>
          </ul>
        </div>
        <p><strong>Technologies Used:</strong> Python, Pandas, Scikit-learn, ArcGIS, DBSCAN</p>
        <p>
          Demo available upon request — interactive dashboard in development.
        </p>
      </>
    )
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
      <p >
        Photo by{" "}
        <a href="https://unsplash.com/@jakobowens1?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noreferrer">
          Jakob Owens
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/photos/orange-and-blue-round-light-dGXGDairmK0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noreferrer">
          Unsplash
        </a>
      </p>
    ),
    popupImg: "/img/service/anomaly.jpg",
    popupTitle: "Enhancing Tabular Anomaly Detection via WGAN & Transformers",
    firstDescriptionText: (
      <>
        <p>
          This project explores deep learning and GAN-based augmentation for anomaly detection in tabular data. It benchmarks MLP, LSTM, and a custom BERT-style Transformer against classical models like OC-SVM and Deep SVDD.
        </p>
        <p>
          A class-conditional WGAN-GP with diversity and feature matching loss was used to generate synthetic anomalies, significantly improving model performance—especially under severe class imbalance.
        </p>
      </>
    ),
    serviceListDescriptions: (
      <>
        <h3>Key Highlights</h3>
        <p>
          A unified deep learning + generative modeling framework for robust anomaly detection in structured data.
        </p>
        <div className="in_list">
          <ul>
            <li>
              <p>Custom Transformer model with value-aware token scaling for tabular inputs.</p>
            </li>
            <li>
              <p>WGAN-GP for class-conditional anomaly generation using 3 loss functions.</p>
            </li>
            <li>
              <p>Up to 20–30% performance improvement on benchmark datasets.</p>
            </li>
            <li>
              <p>OC-SVM, MLP, and LSTM benefited most from synthetic balancing.</p>
            </li>
          </ul>
        </div>
        <p><strong>Technologies Used:</strong> PyTorch, Scikit-learn, WGAN-GP, TabTransformer, OC-SVM</p>
        <p>
          Code Repository:{" "}
          <a href="https://github.com/pTidke/BDA602" target="_blank" rel="noreferrer">
            github.com/pTidke/BDA602
          </a>
        </p>
      </>
    )
  }
];
