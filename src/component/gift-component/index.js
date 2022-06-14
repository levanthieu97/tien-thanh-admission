import React from "react";
import "./styles.scss";
import { GIFT_CONTENT } from "../../common/Foundation";
import GiftContentComponent from "./gift-content-component";

const GiftComponent = () => {
  return (
    <section className="gift">
      <div className="gift__wrapper component-container">
        <div className="gift__wrapper-title">Lý do bạn nên chọn TIẾN THÀNH</div>
        <p className="gift__wrapper-subtitle">
          Với nhiều năm kinh nghiệm, chúng tôi có đội ngũ giàu kinh nghiệm và cơ sở vật chất tiên tiến sẽ cung cấp dịch vụ đào tạo lái xe chất lượng
          hàng đầu cho các học viên.
        </p>
        <div className="gift__content">
          <div className="gift__content-grid">
            {GIFT_CONTENT.map((content, index) => {
              return (
                <React.Fragment key={index}>
                  <GiftContentComponent title={content.title} description={content.content} />
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(GiftComponent);
