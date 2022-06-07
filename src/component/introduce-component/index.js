import React from 'react';
import "./styles.scss";
import TimelineCourseComponent from '../timeline-course-component';

const IntroduceComponent = () => {
  
  return (
    <section className='introduce'>
      <div className='introduce__wrapper component__wrapper component-container'>
        <div className='component__grid introduce__layout introduce__left'>
          <div className='introduce__info'>
            <div className='introduce__info-title'>
              Trường dạy lái xe uy tín số 1 tại TP.HCM
              <br/> Sát hạch &amp; đào tạo lái xe các hạng B1, B2, C
            </div>
            <img alt='' src={`${process.env.PUBLIC_URL}/images/introduce-image.jpg`} className='introduce__image'/>

          </div>
        </div>
        <div className='component__grid introduce__layout introduce__right'>
          <div className='introduce__info'>
            <TimelineCourseComponent/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(IntroduceComponent);