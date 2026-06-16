import { useState } from "react";
import Skills from "./Skills";
import Modal from "react-modal";
import ModalSkillsContent from "./modal/ModalContent";
import ModalEducationContent from "./ModalEdu";
import ModalExperienceContent from "./ModalExp";
import Image from "next/image";

Modal.setAppElement("#__next");

import { useEffect } from "react";

const About = () => {
  const [isModalOneOpen, setModalOneOpen] = useState(false);
  const [isModalTwoOpen, setModalTwoOpen] = useState(false);
  const [isModalThreeOpen, setModalThreeOpen] = useState(false);
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  const toggleModalOne = () => setModalOneOpen(!isModalOneOpen);
  const toggleModalTwo = () => setModalTwoOpen(!isModalTwoOpen);
  const toggleModalThree = () => setModalThreeOpen(!isModalThreeOpen);

  useEffect(() => {
    const modalOpen = isModalOneOpen || isModalTwoOpen || isModalThreeOpen;

    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOneOpen, isModalTwoOpen, isModalThreeOpen]);

  return (
    //    ABOUT
    <div className="edina_tm_about" id="about">
      <div className="container">
        <div className="about_title">
          <h3>About Me</h3>
        </div>
        <div className="content">
          <div
            className="leftpart"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <div className="info">
              <h3>
                Hello, I&apos;m <span>Prajwal Tidke</span>
              </h3>
              <p>
                I build the production data backbone that makes AI systems work — most recently the ingestion, retrieval, and evaluation layer behind KALM, a clinical mental-health RAG system at SDSU&apos;s LINC Lab. Before that, 5+ years of data engineering across finance and manufacturing, including the end-to-end stack for a $550B+ AUM fund (CPPIB).
              </p>
              <p>
                I work across the full data stack and am drawn to roles where robust data
                infrastructure and applied AI intersect. Holding an MS in Big Data
                Analytics from SDSU (4.0 GPA), I am eligible for 36 months of US work
                authorization (STEM OPT).
              </p>
            </div>
            {/* Skills section moved below */}


            <div
              // className="row"
              style={{
                display: "flex",
                gap: "10px",
                width: "100%",
                paddingRight: isMobile ? 0 : "2.2rem",
              }}
            >
              {/* <button
                type="button"
                className="color edina_tm_button"
                style={{ flex: 1 }}
                onClick={toggleModalOne}
              >
                Experience
              </button> */}

              <button
                type="button"
                className="color edina_tm_button"
                onClick={toggleModalTwo}
              >
                Education
              </button>
            </div>
          </div>
          {/* End leftpart */}

          <div className="rightpart" style={{ paddingLeft: "8rem" }}>
            <div className="image">
              <Image
                width={445}
                height={599}
                src="/img/thumbs/26-35.jpg"
                alt="thumb"
              />

              <div
                className="main"
                style={{
                  backgroundImage: "url(img/about/pic2.png)",
                }}
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="200"
              ></div>

              <div
                className="experience"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <div className="info">
                  <h3>5+ Years</h3>
                  <span>Of Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End content */}

        {/* Start My Skills (Full Width) */}
        <div
          className="my_skills"
          style={{
            marginTop: "60px",
            borderTop: "1px solid rgba(0, 0, 0, 0.05)",
            paddingTop: "40px",
          }}
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="100"
        >
          <div
            className="skills-header"
            style={{
              display: "flex",
              alignItems: "center",
              paddingBottom: "30px",
              gap: "10px",
            }}
          >
            <h3 style={{ margin: 0, display: "flex", alignItems: "center" }}>
              <span>My Technical Stack</span>
            </h3>
          </div>

          <div className="wrapper">
            <div className="dodo_progress">
              <Skills />
            </div>
          </div>
        </div>
      </div>

      {/* Start About Details Modal */}
      <Modal
        isOpen={isModalOneOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal about-popup-wrapper"
        overlayClassName="custom-overlay "
        closeTimeoutMS={500}
      >
        <div
          className="edina_tm_modalbox"
          onScroll={(e) => e.stopPropagation()}
        >
          <button className="close-modal" onClick={toggleModalOne}>
            <Image
              width={45}
              height={45}
              src="/img/svg/cancel.svg"
              alt="close icon"
            />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="description_wrap scrollable">
              <ModalExperienceContent />
            </div>
          </div>
          {/* End box inner */}
        </div>
        {/* End modal box news */}
      </Modal>
      <Modal
        isOpen={isModalTwoOpen}
        onRequestClose={toggleModalTwo}
        contentLabel="My dialog"
        className="custom-modal about-popup-wrapper auto-height"
        overlayClassName="custom-overlay "
        closeTimeoutMS={500}
      >
        <div
          className="edina_tm_modalbox"
          onScroll={(e) => e.stopPropagation()}
        >
          <button className="close-modal" onClick={toggleModalTwo}>
            <Image
              width={45}
              height={45}
              src="/img/svg/cancel.svg"
              alt="close icon"
            />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="description_wrap scrollable">
              <ModalEducationContent />
            </div>
          </div>
          {/* End box inner */}
        </div>
        {/* End modal box news */}
      </Modal>
      <Modal
        isOpen={isModalThreeOpen}
        onRequestClose={toggleModalThree}
        contentLabel="My dialog"
        className="custom-modal about-popup-wrapper"
        overlayClassName="custom-overlay "
        closeTimeoutMS={500}
      >
        <div
          className="edina_tm_modalbox"
          onScroll={(e) => e.stopPropagation()}
        >
          <button className="close-modal" onClick={toggleModalThree}>
            <Image
              width={45}
              height={45}
              src="/img/svg/cancel.svg"
              alt="close icon"
            />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="description_wrap scrollable">
              <ModalSkillsContent />
            </div>
          </div>
          {/* End box inner */}
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  About Details Modal */}
    </div>
    // /ABOUT
  );
};

export default About;
