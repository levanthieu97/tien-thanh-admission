import React from "react";
import "./styles.scss";
import { COMMENTS } from "../../common/Foundation";

const CommentComponent = () => {

  const showComments = () => {
    return COMMENTS.map((comment, index) => (
      <div className="item" key={index}>
        <div className="item__name">{comment.name}</div>
        <p className="item__content"><q>{comment.content}</q></p>
      </div>
    ))
  }

  return (
    <section id="comment">
      <div className="comment__grid-rectangle"></div>
      <div className="comment__wrapper component-container">
        <div className="comment__title">Học viên nghĩ gì về chúng tôi</div>
        <p className="comment__subtitle">
          Flexible Distance Learning We provide flexible and 24/7 online learning that fits around You. Become an industry leader with accredited
          undergraduate and postgraduate courses online. Fully Online.
        </p>
        <div className="comment__container">
          <div className="comment__grid">
            {showComments()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(CommentComponent);
