import React, { useEffect, useState, useRef, useCallback } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import "./styles.scss";
import _ from "lodash";

const SelectionComponent = (props) => {
  const { name, options, className = "", value, selectedName } = props;
  const dropdownRef = useRef(null);
  const refSelected = options.reduce((list, option) => {
    list[option.value] = React.createRef();
    return list;
  }, {});
  const [isActive, setIsActive] = useState(false);
  const [cursor, setCursor] = useState(-1);
  useEffect(() => {
    if (isActive) {
      if (!_.isEmpty(value.toString()) && refSelected[value]) {
        refSelected[value].current.scrollIntoView({
          inline: "end",
          behavior: "smooth",
          block: "nearest",
        });
      }
      const index = options.findIndex((option) => option.value === value);
      setCursor(index);
    }
  }, [isActive, value]);

  const handleClickOutside = useCallback(
    (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsActive(false);
        setCursor(-1);
      }
    },
    [dropdownRef]
  );

  useEffect(() => {
    if (isActive) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isActive, handleClickOutside]);

  const selectOption = (value) => {
    setIsActive(false);
    props.changeSelected(value);
  };

  const hoverHandler = (e, index) => {
    e.preventDefault();
    setCursor(index);
  };

  return (
    <div id="selection" tabIndex="0" ref={dropdownRef} key={name}>
      <div className="form-field">
        <div className={`text-field-container dropdown ${className}`}>
          <div className={`text-field ${isActive ? "field-focus" : ""}`} onClick={(e) => setIsActive(!isActive)}>
            <FontAwesomeIcon icon={faAddressBook} className={`prefix-icon field-icon ${value ? "active" : ""}`} />
            <FontAwesomeIcon icon={isActive ? faCaretUp : faCaretDown} className={`suffix-icon field-icon`} />
            <div className={`field-control ${!value ? "placeholder" : ""}`}>{selectedName}</div>
          </div>
          {isActive && (
            <div className="dropdown-content">
              {options.map((option, index) => (
                <div
                  ref={refSelected[option.value]}
                  className={`dropdown-item ${index === cursor ? "active" : ""}`}
                  key={index}
                  onClick={() => selectOption(option)}
                  onMouseEnter={(e) => hoverHandler(e, index)}
                >
                  <p className="value">{option.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(SelectionComponent);
