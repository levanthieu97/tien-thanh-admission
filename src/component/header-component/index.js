import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./styles.scss";
import { Link } from "react-router-dom";
import { setSmallLayout } from "../../reducer/slices/GlobalSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const HeaderComponent = () => {
  const dispatch = useDispatch();
  const ref = useRef({ innerWidth: 0 });

  const resize = () => {
    if (ref.current.innerWidth !== window.innerWidth) {
      ref.current.innerWidth = window.innerWidth;
      dispatch(setSmallLayout(window.innerWidth <= 767));
    }
  };

  useEffect(() => {
    window.listenEvent("resize", resize);
    return () => {
      window.stopListenEvent("resize", resize);
    };
  }, []);


  return (
    <header className="header">
      <div className="component-container">
        <Link to="/">
          <img className="header__logo" src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Tiến Thành Logo"></img>
        </Link>
        <div className="header__space"></div>
        <div className="header__contact">
          <button type="button" className="btn-contact"><FontAwesomeIcon icon={faPhone} pull="left" className="icon-phone"/> 0862 376 568</button>
        </div>
      </div>
    </header>
  );
};

export default React.memo(HeaderComponent);
