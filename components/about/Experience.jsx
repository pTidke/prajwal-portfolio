import Image from "next/image";
import experienceContent from "../../data/experience";

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <Image
              width={19}
              height={19}
              src="/img/about/briefcase.png"
              alt="icon"
            />
            <i className="fa fa-briefcase"></i>
          </div>

          <span className="time open-sans-font text-uppercase">{val.year}</span>

          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>

          <div className="open-sans-font text-justify">
            {val.details.split("\n").map((line, idx) => {
              if (line.trim().startsWith("•")) {
                return (
                  <ul
                    key={idx}
                    className="resume-points"
                  >
                    <li style={{ listStyleType: "disc" }}>
                      {line.replace("•", "").trim()}
                    </li>
                  </ul>
                );
              } else {
                return (
                  <p
                    key={idx}
                    style={{ marginBottom: "0.25rem", fontWeight: 600 }}
                  >
                    {line.trim()}
                  </p>
                );
              }
            })}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
