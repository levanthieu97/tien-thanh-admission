import React, { useReducer } from "react";
import "./styles.scss";
import Swiper from "react-id-swiper";
import { SCHOOL_CAROUSEL } from "../../common/Foundation";

const ProductCarousel = (props) => {
  const [state, setState] = useReducer((state, newState) => ({ ...state, ...newState }), {
    mainImage: SCHOOL_CAROUSEL[0].path,
    mainType: SCHOOL_CAROUSEL[0].type,
  });
  const params = {
    observer: true,
    observeParents: true,
    spaceBetween: 10,
    centeredSlides: false,
    watchOverflow: true,
    slidesPerView: 2.3,
    // direction: "vertical",
    controller: {
      inverse: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 15
      },
    },
  };

  const setMainImage = (item) => {
    setState({
      mainImage: item.path,
      mainType: item.type,
    });
  };

  const displayProduct = () => {
    return (
      <Swiper {...params}>
        {SCHOOL_CAROUSEL.map((item, index) => (
          <div key={index} className={`item ${item.path === state.mainImage ? "img-active" : ""}`} onClick={() => setMainImage(item)}>
            <img src={item.path} alt="" />
          </div>
        ))}
      </Swiper>
    );
  };

  const displayMainProduct = () => {
    let srcVideo = '';
    if(state.mainType === "video") {
      srcVideo = SCHOOL_CAROUSEL.find(item => item.path === state.mainImage) || '';
    }
    return state.mainType === "video" ? (
      <iframe
        className="u-image carousel__image"
        src={srcVideo.src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    ) : (
      <img className="u-image carousel__image" src={state.mainImage} alt="" />
    );
  };

  return (
    <section id="products-carousel">
      <div className="carousel__wrapper"></div>
      <div className="carousel__background" />
      {displayMainProduct()}
      <div className="carousel__container component-container">
        <div className="carousel__grid">{displayProduct()}</div>
        <p className="carousel__description">Những hình ảnh thực tế.</p>
      </div>
    </section>
  );
};

export default React.memo(ProductCarousel);
