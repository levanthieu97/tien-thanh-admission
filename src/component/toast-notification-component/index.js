import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { closeToastNotification } from "../../reducer/slices/GlobalSlice";

const ToastNotificationComponent = (props) => {
  const { toast } = useSelector((state) => state.globalSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (toast && toast.content && toast.toastType) {
        deleteToast();
      }
    }, toast.autoDeleteTime);

    return () => {
      clearTimeout(timer);
    };
  }, [toast]);

  const deleteToast = () => {
    dispatch(closeToastNotification());
  };

  return toast.content && (
    <React.Fragment>
      <div className={`notification-container top-right`}>
        <div className={`notification toast top-right ${toast.toastType}`}>
          <button onClick={() => deleteToast()}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <div>
            <p className="notification-title">{toast.content}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default React.memo(ToastNotificationComponent);
