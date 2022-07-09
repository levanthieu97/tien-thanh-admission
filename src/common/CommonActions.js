import React from "react";

export default class CommonActions {
  
  static lazyWithPreload(pathComponent) {
    const component = React.lazy(pathComponent);
    component.preload = pathComponent;
    return component;
  }

  static dynamicDateStartCourse() {
    const date = new Date();
    const daysOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return date.getDate() + 7 >= daysOfMonth  ? daysOfMonth : date.getDate() + 7;
  }
}
