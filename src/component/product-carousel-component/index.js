import React from "react";
import "./styles.scss";
import { COURSE_CAROUSEL } from "../../common/Foundation";

const ProductCarousel = () => {
  const displayProduct = () => {
    return COURSE_CAROUSEL.map((course, index) => (
      <div className="item" key={index}>
        <div className="item__layout">
          <div className="item__title">{course.title}</div>
          <div className="item__content"></div>
        </div>
      </div>
    ));
  };

  return (
    <section id="products-carousel">
      <div className="carousel__wrapper"></div>
      <div className="carousel__background" />
      <video controls className="u-image carousel__image">
        <source src={`${process.env.PUBLIC_URL}/images/course-oto.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="carousel__container component-container">
        <div className="carousel__grid">{displayProduct()}</div>
      </div>
    </section>
  );
};

export default React.memo(ProductCarousel);
