import React from "react";
import {
  FiInstagram,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

const SocialShare = [
  {
    iconName: <FiLinkedin />,
    link: "https://www.linkedin.com/in/ptidke9/",
  },
  {
    iconName: <FiInstagram />,
    link: "https://www.instagram.com/clickoftime/",
  },
  { iconName: <FiGithub />, link: "https://github.com/pTidke" },
];
const Social = () => {
  return (
    <ul>
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            {val.iconName}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
