import React from "react";
import "./styles.scss";
import RegisterInfoComponent from "../register-info-component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faGooglePlusSquare } from '@fortawesome/free-brands-svg-icons';

const AboutUsComponent = () => {

  return (
    <section id="about-us">
      <div className="about-us__rectangle"></div>
      <div className="about-us__wrapper">
        <div className="about-us__layout">
          <img className="about-us__logo" src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Tiến Thành Logo"></img>
          <div className="layout__form">
            <RegisterInfoComponent classForm='btn__about-us'/>
          </div>
          <div className="layout__rectangle"></div>
          <div className="layout__info">
          <ul className='banner__list-desc'>
            <li className='banner__list-item'>
              <FontAwesomeIcon icon={faFacebookSquare} pull="left" className="icon-space"/>
              <div className="item"><span>Facebook:</span> Quốc Quốc</div>
            </li>
            <li className='banner__list-item'>
              <FontAwesomeIcon icon={faGooglePlusSquare} pull="left" className="icon-space"/>
              <div className="item"><span>Email:</span> hotrotienthanh@gmail.com</div>
            </li>
            <li className='banner__list-item'>
              <FontAwesomeIcon icon={faPhone} pull="left"/>
              <div className="item item-phone"><span>Phone:</span> 0862 376 568</div>
            </li>
            <li className='banner__list-item'>
              <FontAwesomeIcon icon={faPhone} pull="left"/>
              <div className="item item-phone"><span>Phone:</span> 0977 346 168</div>
            </li>
            <li className='banner__list-item'>
              <FontAwesomeIcon icon={faLocationDot} pull="left"/>
              <div className="item"><span>Địa chỉ:</span> 40 Lê Thiệt, P. Phú Thọ Hòa, Q. Tân Phú, TP.HCM</div>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(AboutUsComponent);
