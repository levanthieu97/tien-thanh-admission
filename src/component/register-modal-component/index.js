import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import RegisterInfoComponent from "../register-info-component";
import { closeModal } from "../../reducer/slices/RegisterModalSlice";
import "./styles.scss";

const RegisterModalComponent = (props) => {
  const { isOpen, selectionCourse } = useSelector((state) => state.registerModalSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const closeRegisterModal = () => {
    dispatch(closeModal());
  }

  return (
    isOpen && (
      <React.Fragment>
        <div className="modal__background"/>
        <div id="modal">
          <div className="modal__container">
            <div className="modal__header">
              <h5 className="modal__header-title">Đăng ký học lái xe ngay hôm nay !</h5>
            </div>
            <button type="button" className="modal__btn-close" onClick={() => closeRegisterModal()}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <div className="modal__content">
              <RegisterInfoComponent classForm="btn__register-modal" name="register-modal" selected={selectionCourse}/>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  );
};

export default React.memo(RegisterModalComponent);
