import React from "react";
import "./styles.scss";
import { PRODUCTS } from "../../common/Foundation";

const ProductComponent = (props) => {

  const showImageProduct = () => {
    return PRODUCTS.map((product, index) => {
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

  const showProduct = () => {

    return PRODUCTS.map((product, index) => {
      return (
        <div className="product__container" key={index}>
          <div className="product__layout">
            <span className="product__circle"></span>
            <div className="product__title">{product.title}</div>
            <p className="product__description">{product.content}</p>
            <div className="product__more text__link">more</div>
          </div>
        </div>
      )
    })
  }

  return (
    <section id="product">
      <div className="product__shape-1"></div>
      <div className="product__grid-upper component-container">
        <div className="product__grid-layout">{showImageProduct()}</div>
      </div>
      <div className="product__grid-downer component-container">
        <div className="product__grid-layout">
          {showProduct()}
        </div>
      </div>
      <div className="product__spacing">
        <div className="product__button text__link">Đăng ký tư vấn ngay</div>
      </div>
    </section>
  );
};

export default React.memo(ProductComponent);
