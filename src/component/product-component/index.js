import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Swiper from "react-id-swiper";
import { PRODUCTS, IMAGE_PRODUCT } from "../../common/Foundation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { openModal } from "../../reducer/slices/RegisterModalSlice";
import { v1 as uuid } from "uuid";
import "./styles.scss";

const params = {
  observer: true,
  observeParents: true,
  spaceBetween: 20,
  loop: false,
  centeredSlides: false,
  watchOverflow: true,
  slidesPerView: 2.2,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 35,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
};

const ProductComponent = (props) => {
  const swiperRef = useRef(null);
  const [slideActive, setSlideActive] = useState(0);
  const {isSmallLayout} = useSelector(state => state.globalSlice);
  const dispatch = useDispatch();
  
  let lengthProducts = 0;

  const goPrev = () => {
    if (swiperRef.current) {
      const activeIndex = swiperRef.current.swiper.activeIndex;
      swiperRef.current.swiper.slideTo(activeIndex - 1);
      setSlideActive(swiperRef.current.swiper.activeIndex);
    }
  };

  const goNext = () => {
    if (swiperRef.current) {
      const activeIndex = swiperRef.current.swiper.activeIndex;
      swiperRef.current.swiper.slideTo(activeIndex + 1);
      setSlideActive(swiperRef.current.swiper.activeIndex);
    }
  };

  const showImageProduct = () => {
    return IMAGE_PRODUCT.map((product, index) => {
      return (
        <div className="item" key={index}>
          <div className="item__layout">
            <div className={`item__layout-image u-image-${index}`}>
              <div className="item__image-layout"></div>
            </div>
            <div className={`item__layout-image d-image-${index}`}>
              <div className="item__image-layout"></div>
            </div>
          </div>
        </div>
      );
    });
  };

  const showRegisterModal = (type) => {
    dispatch(openModal(type));
  }

  const showProduct = () => {
    lengthProducts = isSmallLayout ? 0 : PRODUCTS.length;
    return PRODUCTS.map((product, index) => {
      return (
        <div className="product__container" key={index}>
          <div className="product__layout">
            <img alt="" src={`${process.env.PUBLIC_URL}/images/hang-b1.jpg`} className="product__image"/>
            <div className="product__title">{product.title}</div>
            <ul className="product__content">
              {
                product.content.map(content => (
                  <li className="content-item" key={uuid()}>
                    <FontAwesomeIcon icon={faSquareCheck} pull="left" className="icon-item"/>
                    <div><span className="title">{content.name}:</span> {content.description}</div>
                  </li>
                ))
              }
            </ul>
            <button type="button" onClick={() => showRegisterModal(product.type)} className="product__more btn__form">Đăng ký</button>
          </div>
        </div>
      );
    });
  };

  return (
    <section id="product">
      <div className="product__shape-1"></div>
      <div className="product__grid-upper component-container">
        <div className="product__grid-layout">{showImageProduct()}</div>
      </div>

      {isSmallLayout ? (
        <div className="product__grid-downer component-container">
          <div className="product__grid-layout">{showProduct()}</div>
        </div>
      ) : (
        <div className="component-container product__carousel">
          <button type="button" className={`swiper-btn swiper-button-prev ${slideActive > 0 ? "active" : "no-active"}`} onClick={goPrev}>
            <FontAwesomeIcon icon={faArrowLeft}/>
          </button>
          <Swiper {...params} className="swiper-wrapper" ref={swiperRef}>
            {showProduct()}
          </Swiper>
          <button
            type="button"
            className={`swiper-btn swiper-button-next ${slideActive < lengthProducts - 4 ? "active" : "no-active"}`}
            onClick={goNext}
          >
            <FontAwesomeIcon icon={faArrowRight}/>
          </button>
        </div>
      )}
      <div className="product__spacing">
      </div>
    </section>
  );
};

export default React.memo(ProductComponent);
