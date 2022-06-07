import React from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen, faAddressCard, faCarSide } from "@fortawesome/free-solid-svg-icons";

const TimeLineCourse = () => {
  return (
    <div id="timeline">
      <div className="timeline-item">
        <div className="timeline-icon">
          <FontAwesomeIcon icon={faUserPen} />
        </div>
        <div className="timeline-content">
          <h2>ĐĂNG KÝ HỌC LÁI XE</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo maiores magnam modi ab libero praesentium blanditiis.</p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-icon">
          <FontAwesomeIcon icon={faCarSide} />
        </div>
        <div className="timeline-content">
          <h2>HỌC LÁI XE</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo maiores magnam modi ab libero praesentium blanditiis.</p>

        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-icon">
          <FontAwesomeIcon icon={faAddressCard} />
        </div>
        <div className="timeline-content">
          <h2>THI VÀ CẤP BẰNG CHO HỌC VIÊN</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo maiores magnam modi ab libero praesentium blanditiis.</p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(TimeLineCourse);
