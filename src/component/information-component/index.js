import React from "react";
import "./styles.scss";

const InformationComponent = () => {

  const displayContentLeft = () => {
    return (
      <div className="information__grid">
        <div className="container__content">
          <div className="content__title">Chương trình ưu đãi</div>
          <p className="content__desc">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="content__desc">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button type="button" className="btn btn__register">Đăng ký trực tuyến</button>
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
          <div className="information__layout-left">
            {displayContentLeft()}
          </div>
          <div className="information__layout-right">
            <div className="wrapper-right">
              <div className="right-content u-grid-right"/>
              <div className="right-content d-grid-right u-image"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(InformationComponent);
