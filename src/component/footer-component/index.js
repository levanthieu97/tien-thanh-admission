import React from "react";
import "./styles.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const FooterComponent = () => {

  return (
    <footer id="footer">
      <div className="footer__container component-container">
        <p className="footer__content">Tien Thanh is Powered by Thieu Le <span><FontAwesomeIcon icon={faHeart} className="icon-heart"/></span> Every Universe !</p>
      </div>
    </footer>
  );
};

export default React.memo(FooterComponent);
