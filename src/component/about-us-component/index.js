import React from "react";
import "./styles.scss";
import RegisterInfoComponent from "../register-info-component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const AboutUsComponent = () => {

  return (
    <section id="about-us">
      <div className="about-us__rectangle"></div>
      <div className="about-us__wrapper">
        <div className="about-us__layout">
          <h2 className="layout__title">LOGO</h2>
          <div className="layout__form">
            <RegisterInfoComponent classForm='btn__about-us'/>
          </div>
          <div className="layout__rectangle"></div>
          <div className="layout__info">
          <ul className='banner__list-desc'>
            <li className='banner__list-item'>
              <FontAwesomeIcon icon={faCircleUser} pull="left" className="icon-space"/>
              <div className="item"><span>Facebook:</span> Quốc Quốc</div>
            </li>
            <li className='banner__list-item'>
              <FontAwesomeIcon icon={faPhone} pull="left"/>
              <div className="item item-phone"><span>Phone:</span> 0123456789</div>
            </li>
            <li className='banner__list-item'>
              <FontAwesomeIcon icon={faPhone} pull="left"/>
              <div className="item item-phone"><span>Phone:</span> 0123456789</div>
            </li>
            <li className='banner__list-item'>
              <FontAwesomeIcon icon={faEnvelope} pull="left" className="icon-space"/>
              <div className="item"><span>Email:</span> abcxyz@gmail.com</div>
            </li>
            <li className='banner__list-item'>
              <FontAwesomeIcon icon={faLocationDot} pull="left"/>
              <div className="item"><span>Địa chỉ:</span> 20 Lê Thiệt, P. Phú Thọ Hòa, Q. Tân Phú, TP.HCM</div>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(AboutUsComponent);
