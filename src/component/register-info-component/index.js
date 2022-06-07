import React, { useReducer } from "react";
import { useForm } from "react-hook-form";
import _ from "lodash";
import "./styles.scss";
import { OPTION_COURSES, TEXT_FIELD } from "../../common/Foundation";
import CheckBox from "../checkbox-component";
import {v4 as uuid} from 'uuid';


const RegisterInfoComponent = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();

  const [state, setState] = useReducer((state, newState) => ({ ...state, ...newState }), {
    selectedCourse: "",
  });

  const registerAccount = (data) => {
    console.log(data);
  };

  const onSelectedCourse = (value) => {
    console.log(value);
    console.log(state.selectedCourse);
    setState({ selectedCourse: value });
  };

  const showCourse = () => {
    return OPTION_COURSES.map((course, index) => (
      <div key={uuid} className={`checkbox-label ${state.selectedCourse === course.value ? "gift_collapsed" : ""}`}>
        <CheckBox label={course.value} onChange={onSelectedCourse} value={course.value} name={props.name} selected={state.selectedCourse === course.value} />
      </div>
    ));
  };

  return (
    <div className="register-form-container">
      <div className="form-container">
        <div className="login-form-wrapper">
          {props.title && (
            <header className="form-header">
              <div className="header-title">{props.title}</div>
            </header>
          )}
          <form onSubmit={handleSubmit(registerAccount)} className="form-content">
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
                {errors.firstName && <p className="message-errors">Please enter your first name.</p>}
              </div>
            </div>
            <div className="field-content">
              <label className="label-input" htmlFor="phone">
                <span>{`${TEXT_FIELD.PHONE}:`}</span>
              </label>
              <div className="fieldset">
                <input
                  className={`form__input ${errors.phone ? "validate-fail" : ""}`}
                  type="text"
                  name="phone"
                  placeholder={TEXT_FIELD.PHONE}
                  {...register("phone", {
                    require: true,
                    validate: (value) => {
                      return !_.isEmpty(value);
                    },
                  })}
                />
                {errors.lastName && <p className="message-errors">Please enter your last name.</p>}
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
                {errors.password && <p className="message-errors">Please enter your password.</p>}
              </div>
            </div>
            <div className="field-content">
              <label className="label-input" htmlFor="course">
                <span>{`${TEXT_FIELD.COURSE}:`}</span>
              </label>
              <div className="fieldset check__courses">{showCourse()}</div>
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
