import { useState } from "react";
import Skills from "./Skills";
import Modal from "react-modal";
import ModalSkillsContent from "./modal/ModalContent";
import ModalEducationContent from "./ModalEdu";
import ModalExperienceContent from "./ModalExp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
                I&apos;m a product-focused data engineer and machine learning
                researcher with 4+ years of experience designing intelligent,
                scalable solutions across analytics, automation, and deep
                learning. I thrive on turning data into real-world
                impact—whether that&apos;s optimizing pipelines, deploying models, or
                building user-centric tools. Outside of engineering, I&apos;m
                passionate about photography.
              </p>
            </div>
            <div className="my_skills">
              <div
                className="skills-header"
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingBottom: "20px",
                  gap: "10px",
                }}
              >
                <h3
                  style={{ margin: 0, display: "flex", alignItems: "center" }}
                >
                  <span>My Skills</span>
                  <span
                    className="skills-arrow"
                    onClick={toggleModalThree}
                    style={{
                      color: "#34495e",
                      fontSize: "14px",
                      fontWeight: "lighter",
                      marginLeft: "20px",
                      cursor: "pointer",
                    }}
                  >
                    Learn more →
                  </span>
                </h3>
              </div>

              <div
                className="wrapper"
                onClick={toggleModalThree}
                style={{ cursor: "pointer" }}
              >
                <div className="dodo_progress">
                  <Skills />
                </div>
              </div>
            </div>

            <div
              // className="row"
              style={{
                display: "flex",
                gap: "10px",
                width: "100%",
                paddingRight: isMobile ? 0 : "2.2rem",
              }}
            >
              <button
                type="button"
                className="color edina_tm_button"
                style={{ flex: 1 }}
                onClick={toggleModalOne}
              >
                Experience
              </button>

              <button
                type="button"
                className="color edina_tm_button"
                style={{ flex: 1 }}
                onClick={toggleModalTwo}
              >
                Education
              </button>
            </div>
          </div>
          {/* End leftpart */}

          <div className="rightpart">
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
                  backgroundImage: "url(img/about/pic3.jpeg)",
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
                  <h3>4+ Years</h3>
                  <span>Of Experiance</span>
                </div>
              </div>
            </div>
          </div>
          {/* End righttpart */}
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
        className="custom-modal about-popup-wrapper"
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
