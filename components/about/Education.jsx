import { FaUniversity } from "react-icons/fa";
import educationContent from "../../data/education";

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <FaUniversity size={20} color="#fff" />
          </div>

          <span className="time open-sans-font text-uppercase">{val.year}</span>

          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>

          <p className="coursework-title open-sans-font">Relevant Coursework:</p>

          <div className="coursework-grid">
            {val.coursework.map((course, idx) => (
              <span key={idx} className="course-block open-sans-font">
                {course}
              </span>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Education;
