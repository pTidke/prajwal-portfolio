import { useState } from "react";
import Modal from "react-modal";
import ReactTooltip from "react-tooltip";
import Slider from "react-slick";
import Social from "../Social";
import portfolioData from "../../data/portfolio";
import Image from "next/image";
import CircularGallery from "./Gallary";

Modal.setAppElement("#__next");

const Portfolio = () => {
  var settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          arrow: false,
          autoplay: false,
          draggable: true,
          speed: 300,
          dots: true,
        },
      },
    ],
  };

  const myGalleryItems = [
    { image: "/img/gallery/img_17.jpeg" },
    { image: "/img/gallery/img_3.jpeg" },
    { image: "/img/gallery/img_25.jpeg" },
    { image: "/img/gallery/img_10.jpeg" },
    { image: "/img/gallery/img_6.jpeg" },
    { image: "/img/gallery/img_1.jpeg" },
    { image: "/img/gallery/img_13.jpeg" },
    { image: "/img/gallery/img_21.jpeg" },
    { image: "/img/gallery/img_5.jpeg" },
    { image: "/img/gallery/img_28.jpeg" },
    { image: "/img/gallery/img_30.jpeg" },
    { image: "/img/gallery/img_4.jpeg" },
    { image: "/img/gallery/img_9.jpeg" },
    { image: "/img/gallery/img_23.jpeg" },
    { image: "/img/gallery/img_12.jpeg" },
    { image: "/img/gallery/img_15.jpeg" },
    { image: "/img/gallery/img_7.jpeg" },
    { image: "/img/gallery/img_26.jpeg" },
    { image: "/img/gallery/img_19.jpeg" },
    { image: "/img/gallery/img_2.jpeg" },
    { image: "/img/gallery/img_14.jpeg" },
    { image: "/img/gallery/img_11.jpeg" },
    { image: "/img/gallery/img_22.jpeg" },
    { image: "/img/gallery/img_8.jpeg" },
    { image: "/img/gallery/img_20.jpeg" },
    { image: "/img/gallery/img_18.jpeg" },
    { image: "/img/gallery/img_24.jpeg" },
    { image: "/img/gallery/img_27.jpeg" },
    { image: "/img/gallery/img_16.jpeg" },
    { image: "/img/gallery/img_29.jpeg" },
  ];

  return (
    <div className="portfolio_inner my_carousel gallery_zoom">
      <div style={{ height: "550px", position: "relative" }}>
        <CircularGallery
          items={myGalleryItems}
          autoScrollSpeed={0.1}
          bend={0.1}
          textColor="#000000ff"
          borderRadius={0.05}
          scrollSpeed={3}
          scrollEase={0.025}
        />
      </div>
    </div>
  );
};

export default Portfolio;
