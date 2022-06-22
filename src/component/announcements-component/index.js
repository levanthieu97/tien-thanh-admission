import React from "react";
import "./styles.scss";

const AnnouncementsComponent = () => {

  return (
    <section id="announcements" className="u-clearfix">
      <div className="component-container">
        <div className="announcements__shape"></div>
        <div className="announcements__layout">
          <div className="announcements__content">
            <h4 className="announcements__title">Thông tư về học lái ô tô của bộ GTVT</h4>
            <div className="announcements__strange"></div>
            <div className="announcements__description">
              <h5 className="announcements__description-title">Bộ GTVT vừa ban hành Thông tư 4/2022/TTBGTVT</h5>
              <p>
                Cho phép các cơ sở đào tạo, sát hạch lái xe phải trang bị và sử dụng cabin học lái xe ô tô để đào tạo lái xe ô tô được lùi thời hạn
                đến trước ngày 31/12/2022, thay vì áp dụng từ ngày 1/7/2022
              </p>
            </div>
            <i className="announcements__sub-title">
              Thông tư này giúp các cơ sở đào tạo lái xe ô tô có thêm thời gian đầu tư trang thiết bị mô phỏng và dời thời gian thay đổi tăng mức học
              phí.
            </i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(AnnouncementsComponent);
