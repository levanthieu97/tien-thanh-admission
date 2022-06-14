import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./styles.scss";
import { Link } from "react-router-dom";
import { setSmallLayout } from "../../reducer/slices/GlobalSlice";

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
          <div className="header__logo">Logo</div>
        </Link>
      </div>
    </header>
  );
};

export default React.memo(HeaderComponent);