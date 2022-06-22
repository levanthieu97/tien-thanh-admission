import React, {useReducer} from "react";
import "./styles.scss";
import Swiper from 'react-id-swiper';
import { SCHOOL_CAROUSEL } from "../../common/Foundation";

const imageVideo = `${process.env.PUBLIC_URL}/images/image-video.png`;

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
        inverse: true
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 15
      },
      1024: {
          slidesPerView: 5,
          spaceBetween: 15
      }
  }
  }

  const setMainImage = (item) => {
    setState({
      mainImage: item.path,
      mainType: item.type,
    })
  }

  const displayProduct = () => {
    return (
      <Swiper {...params}>
        {SCHOOL_CAROUSEL.map((item, index) => (
          <div key={index} className={`item ${item.path === state.mainImage ? "img-active" : ""}`} onClick={() => setMainImage(item)}>
            <img src={item.type === "image" ? item.path : imageVideo} alt="" />
          </div>
        ))}
      </Swiper>
    );
  };

  const displayMainProduct = () => {
    return state.mainType === "video" ? 
      (
        <video controls className="u-image carousel__image">
          <source src={state.mainImage} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) :
      (
        <img className="u-image carousel__image" src={state.mainImage} alt="" />
      )
  }

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
