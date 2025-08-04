import React from "react";
import Technologies from "../Technologies";
import {
  ETLTechnologies,
  MLTechnologies,
  CloudTechnologies,
  LanguageTechnologies,
  ToolTechnologies,
} from "../Technologies";

const ModalContent = () => {
  return (
    <>
      <div className="row resume-box">
        <div className="col-12 achievements-wrapper">
          {/* <h3>Achievements</h3> */}
          <ETLTechnologies />
          <CloudTechnologies />
          <MLTechnologies />
          <LanguageTechnologies />
          <ToolTechnologies />
        </div>
        <div className="col-6 achievements-wrapper">
          {/* <h3>Achievements</h3> */}
          {/* <MLTechnologies />
          <LanguageTechnologies /> */}
        </div>
      </div>
    </>
  );
};

export default ModalContent;
