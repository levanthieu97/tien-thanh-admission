import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../reducer/slices/RegisterModalSlice";
import "./styles.scss";
import {GET_MONTH} from "../../common/Foundation"

const InformationComponent = () => {
  const dispatch = useDispatch();

  const showRegisterModal = () => {
    dispatch(openModal());
  };

  const displayContentLeft = () => {
    return (
      <div className="information__grid">
        <div className="container__content">
          <div className="content__title">Chương trình ưu đãi</div>
          <p className="content__desc">
            Duy nhất 20 suốt ưu đãi cực sốc trị giá đến 3 triệu đồng dành cho 20 học viên đầu tiên, cùng vô vàn quà tặng khác.
          </p>
          <p className="content__desc">
            Với nhiều gói chương trình đào tạo lái xe với các mức học phí linh hoạt, học viên của trường học lái xe Tiến Thành sẽ có nhiều sự lựa chọn
            và tìm cho mình một khóa học lái xe phù hợp.
          </p>
          <p className="content__desc">{`Thời gian chỉ từ: 15.${GET_MONTH} – 31.${GET_MONTH} Đăng ký nhanh chóng`}</p>
          <button type="button" className="btn btn__register" onClick={() => showRegisterModal()}>
            Đăng ký trực tuyến
          </button>
        </div>
      </div>
    );
  };

  return (
    <section id="information">
      <div className="information__container" />
      <img alt="" src={`${process.env.PUBLIC_URL}/images/information.jpg`} className="information__image-1 u-image" />
      <div className="information__content">
        <div className="information__layout">
          <div className="information__layout-left">{displayContentLeft()}</div>
          <div className="information__layout-right">
            <div className="wrapper-right">
              <div className="right-content u-grid-right" />
              <div className="right-content d-grid-right u-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(InformationComponent);
