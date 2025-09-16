import Modal from "react-modal";
import Tilt from "react-parallax-tilt";
import ExperienceData from "../../data/experience";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Social from "../Social"; // if you want the Share section like portfolio

Modal.setAppElement("#__next");

const Experience = () => {
  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleBServicesData = (id) => {
    const find = ExperienceData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  const handleModle = (id) => {
    handleBServicesData(id);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="service_list">
      <ul className="grid-wrapper columns-3">
        {ExperienceData.map((item) => (
          <li data-aos="fade-right" data-aos-duration="1200" key={item.id}>
            <Tilt>
              <div className="list_inner" onClick={() => handleModle(item?.id)}>
                <div className="hover">
                  <div className="service_title">
                    <h3>{item.title}</h3>
                  </div>
                  <div className="learn_more">
                    Learn More<span></span>
                  </div>
                </div>
              </div>
            </Tilt>
          </li>
        ))}
      </ul>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Experience Modal"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="edina_tm_modalbox">
          <button className="close-modal" onClick={() => setIsOpen(false)}>
            <Image
              width={45}
              height={45}
              src="/img/svg/cancel.svg"
              alt="close icon"
            />
          </button>

          <div className="box_inner">
            <div className="description_wrap scrollable">
              {/* image placeholder */}
              {/* <div className="image">
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${singleData?.experienceImage || "/img/about/avatar.jpg"})`,
                  }}
                ></div>
              </div> */}

              <div className="portfoiol_content-inner">
                <div className="left-content">
                  <h3 className="title">{singleData?.popupTitle}</h3>
                  {singleData?.firstDescriptionText}
                  {singleData?.serviceListDescriptions}
                </div>

                <div className="right-content">
                  <ul className="list">
                    <li>
                      <h5>Client</h5>
                      <span>{singleData?.client || "—"}</span>
                    </li>
                    <li>
                      <h5>Category</h5>
                      <span>{singleData?.category || "Experience"}</span>
                    </li>
                    <li>
                      <h5>Date</h5>
                      <span>{singleData?.year || "—"}</span>
                    </li>
                  </ul>
                  {singleData?.companyLogo && (
                    <div
                      className="company-logo"
                      style={{ marginTop: "1rem" }}
                    >
                      <Image
                        src={singleData.companyLogo}
                        alt={`${singleData.compnayName} logo`}
                        width={singleData.h}
                        height={singleData.w}
                        objectFit="contain"
                      />
                    </div>
                  )}
                </div>
              </div>
              {/* End .portfoiol_content-inner */}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Experience;
