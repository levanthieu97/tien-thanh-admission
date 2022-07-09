import React from "react";
import "./styles.scss";
import { COMMENTS } from "../../common/Foundation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const textDesc = `Những khóa đào tạo chất lượng lái xe ô tô được trung tâm Tiến Thành chúng tôi tổ chức thường xuyên hàng tuần. Với kiến thức, kỹ năng truyền tải dễ hiểu giúp học viên tự tin đạt kết quả cao và nắm vững tay lái khi tham gia giao thông.`;
const STARTS = Array(5).fill(0);

const CommentComponent = () => {
  const showComments = () => {
    return COMMENTS.map((comment, index) => (
      <div className="item" key={index}>
        <div className="item__name">{comment.name}</div>
        <div className="item__start">
          {STARTS.map((start, i) => (
            <FontAwesomeIcon icon={faStar} key={i} color="#f1c50e"/>
          ))}
        </div>
        <p className="item__content">
          <q><i>{comment.content}</i></q>
        </p>
      </div>
    ));
  };

  return (
    <section id="comment">
      <div className="comment__grid-rectangle"></div>
      <div className="comment__wrapper component-container">
        <div className="comment__title">Học viên nghĩ gì về chúng tôi</div>
        <p className="comment__subtitle" dangerouslySetInnerHTML={{__html: textDesc}}/>
        <div className="comment__container">
          <div className="comment__grid">{showComments()}</div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(CommentComponent);
