import React from "react";
import "./styles.scss";

const CheckBox = (props) => {
  const checkedValue = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <label htmlFor={props.label + "-" + props.name} className={`checkbox ${props.type ? "checkbox--" + props.type : ""}`} key={props.key}>
      <input name={props.name} onChange={checkedValue} type="checkbox" id={props.label + "-" + props.name} value={props.value} checked={props.selected}/>
      <span className="checkbox__check" />
      <p>{props.label}</p>
    </label>
  );
};

export default React.memo(CheckBox);
