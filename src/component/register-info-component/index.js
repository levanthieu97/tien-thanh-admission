import React, { useReducer, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import _ from "lodash";
import "./styles.scss";
import { OPTION_COURSES, TEXT_FIELD, NOTIFICATION_SUCCESS } from "../../common/Foundation";
import RegisterAction  from "../../stores/RegisterAction";
import { closeModal } from "../../reducer/slices/RegisterModalSlice";
import { setToastType } from "../../reducer/slices/GlobalSlice";
import SelectionComponent from "../selection-component";
import emailjs from '@emailjs/browser';
import {v4 as uuid} from 'uuid';

const RegisterInfoComponent = (props) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset
  } = useForm();

  const [state, setState] = useReducer((state, newState) => ({ ...state, ...newState }), {
    selectedError: false,
    course: {value: '', isValid: false, selectedName: 'Khóa học', options: OPTION_COURSES}
  });

  useEffect(() => {
    if(state.course.value) {
      setState({selectedError: false});
    }
  }, [state.course])

  useEffect(() => {
    const findCourse = OPTION_COURSES.find(item => item.value === props.selected);
    if(findCourse) {
      setState({ course: {...state.course, value: findCourse.value, selectedName: findCourse.name} })
    }
  },[props.selected]);

  const registerAccount = async (data) => {
    if(state.course.value === '') {
      setState({selectedError: true});
      return;
    }
    const params = {...data, course: state.course.value};
    try {
      await Promise.all([
        RegisterAction.insertRegisterAdmission(params),
        emailjs.send('service_976h2k1', 'template_wn3atkj', params, 'xNGHCvFr5YN5dFcK3')
      ]);
      handleAfterRegister();
      dispatch(setToastType(NOTIFICATION_SUCCESS));
    } catch (error) {
      handleAfterRegister();
      dispatch(setToastType(NOTIFICATION_SUCCESS));
    }
  };

  const handleAfterRegister = () => {
    reset();
    setState({course: {...state.course, value: '', selectedName: 'Khóa học'}});
    dispatch(closeModal());
  }

  const onSelectedCourse = (option) => {
    setState({ course: {...state.course, value: option.value, selectedName: option.name} });
  };

  return (
    <div className="register-form-container" key={uuid}>
      <div className="form-container">
        <div className="login-form-wrapper">
          {props.title && (
            <header className="form-header">
              <div className="header-title">{props.title}</div>
            </header>
          )}
          <form onSubmit={handleSubmit(registerAccount)} className="form-content">
            <div className="field-content fieldset">
              <label className="label-input" htmlFor="course">
                <span>{`${TEXT_FIELD.COURSE}:`}</span>
              </label>
              <div className="fieldset check__courses">
                <SelectionComponent {...state.course} name={props.classForm} changeSelected={(value) => onSelectedCourse(value)}/>
              </div>
              {state.selectedError && <p className="message-errors">Vui lòng chọn khóa học.</p>}
            </div>
            <div className="field-content">
              <label className="label-input" htmlFor="fullName">
                <span>{`${TEXT_FIELD.FULLNAME}:`}</span>
              </label>
              <div className="fieldset">
                <input
                  className={`form__input ${errors.fullName ? "validate-fail" : ""}`}
                  type="text"
                  name="fullName"
                  placeholder={TEXT_FIELD.FULLNAME}
                  {...register("fullName", {
                    require: true,
                    validate: (value) => {
                      return !_.isEmpty(value);
                    },
                  })}
                />
                {errors.fullName && <p className="message-errors">Vui lòng nhập họ và tên.</p>}
              </div>
            </div>
            <div className="field-content">
              <label className="label-input" htmlFor="phone">
                <span>{`${TEXT_FIELD.PHONE}:`}</span>
              </label>
              <div className="fieldset">
                <input
                  className={`form__input ${errors.phone ? "validate-fail" : ""}`}
                  type="tel"
                  name="phone"
                  placeholder={TEXT_FIELD.PHONE}
                  {...register("phone", {
                    require: true,
                    pattern: /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/,
                    validate: (value) => {
                      return !_.isEmpty(value);
                    },
                  })}
                />
                {errors.phone && <p className="message-errors">Vui lòng nhập số điện thoại.</p>}
              </div>
            </div>
            <div className="field-content">
              <label className="label-input" htmlFor="address">
                <span>{`${TEXT_FIELD.ADDRESS}:`}</span>
              </label>
              <div className="fieldset">
                <input
                  className={`form__input ${errors.address ? "validate-fail" : ""}`}
                  type="text"
                  name="address"
                  placeholder={TEXT_FIELD.ADDRESS}
                  {...register("address", {
                    require: true,
                    validate: (value) => {
                      return !_.isEmpty(value);
                    },
                  })}
                />
                {errors.address && <p className="message-errors">Vui lòng nhập số địa chỉ.</p>}
              </div>
            </div>
            <div className="action-form">
              <button type="submit" onClick={() => trigger()} className={`btn-register ${props.classForm}`}>
                ĐĂNG KÝ
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default React.memo(RegisterInfoComponent);
