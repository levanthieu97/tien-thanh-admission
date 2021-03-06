import React, { useEffect, useRef } from "react";
import _ from "lodash";
import { v1 as uuid } from "uuid";
import "./styles.scss";
import {GET_MONTH, PHONE_NUMBER} from "../../common/Foundation"
import CommonActions from "../../common/CommonActions";

const messages = ["Trường dạy lái xe Tiến Thành xin kính chào.", `Khóa dạy lái sẽ bắt đầu vào ngày ${CommonActions.dynamicDateStartCourse()} tháng ${GET_MONTH} năm 2022.`, `Số điện thoại liên lạc: ${PHONE_NUMBER[0]}, ${PHONE_NUMBER[1]}`];

const MarqueeComponent = () => {
  const marquee = useRef();
  const defaultTime = 7;
  useEffect(() => {
    const currentMarquee = marquee.current;
    if (currentMarquee) {
      const marqueeLength = _.get(currentMarquee, "clientWidth", 0);
      const marqueeTravelTime = marqueeLength !== 0 ? Math.ceil(marqueeLength / 60) : getDefaultMarqueeTravelTime();
      currentMarquee.style.animation = `scrollLeft ${marqueeTravelTime}s linear infinite`;
    }
  }, []);

  const getDefaultMarqueeTravelTime = () => {
    let marqueeTravelTime = defaultTime;

    const numberOfChars = _.get(marquee, "current.innerText.length");
    if (numberOfChars > 0) {
      marqueeTravelTime = Math.ceil((numberOfChars * defaultTime) / 60);
    }

    return Math.max(defaultTime, marqueeTravelTime);
  }

  const showContent = _.isEmpty(messages)
    ? ["Welcome"]
    : _.map(messages, (ann, index) => {
        return (
          <span
            key={index}
            dangerouslySetInnerHTML={{
              __html: ann
                .replace(/<.+?>/g, "")
                .replace(/&nbsp;/gi, "")
                .toString()
                .trim(),
            }}
          ></span>
        );
      });

  return (
    <div className="hot-new__container">
      <div className="body-wrapper">
        <div className="marquee-container">
          <span className="marquee-fade"> </span>{" "}
          <div key={uuid()} className="marquee" ref={marquee}>
            {" "}
            {showContent}
            {""}
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default React.memo(MarqueeComponent);
