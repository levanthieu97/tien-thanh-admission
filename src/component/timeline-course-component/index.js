import React from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TIMELINE_COURSE } from "../../common/Foundation";

const TimeLineCourse = () => {
  return (
    <div id="timeline">
      {TIMELINE_COURSE.map((item, index) => (
        <div className="timeline-item" key={index}>
          <div className="timeline-icon">
            <FontAwesomeIcon icon={item.icon} />
          </div>
          <div className="timeline-content">
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(TimeLineCourse);
