import React from "react";

const GiftContentComponent = (props) => {
  return (
    <div className="content">
      <div className="header-line-horizontal"/>
      <div className="content__title">{props.title}</div>
      <p className="content__desc">{props.description}</p>
    </div>
  );
};

export default React.memo(GiftContentComponent);
