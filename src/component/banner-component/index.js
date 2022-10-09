import React from 'react';
import "./styles.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';
import RegisterInfoComponent from '../register-info-component';

const formTitle = {
  title: 'Đăng ký ngay để được tư vấn',
  classForm: '',
  name: 'banner'
}

const BannerComponent = () => {
  
  return (
    <section className='banner'>
      <div className='banner__wrapper component__wrapper component-container'>
        <div className='component__grid banner__info'>
          <div className='banner__title1'>TIẾN THÀNH</div>
          <div  className='banner__title2'>Trung tâm đào tạo lái xe ô tô <br/>đạt chuẩn và chất lượng</div>
          <ul className='banner__list-desc'>
            <li className='banner__list-item'>
              <FontAwesomeIcon icon={faUserCheck} pull="left"/>
              <div>Chuyên đào tạo và sát hạch thi GPLX</div>
            </li>
            <li className='banner__list-item'>
              <FontAwesomeIcon icon={faUserCheck} pull="left"/>
              <div>Học phí trọn gói theo quy định của SỞ GTVT TPHCM.</div>
            </li>
            <li className='banner__list-item'>
              <FontAwesomeIcon icon={faUserCheck} pull="left"/>
              <div>Lịch học tự chọn do học viên tự sắp xếp.</div>
            </li>
          </ul> 
        </div>
        <div className='component__grid banner__register-container'>
          <RegisterInfoComponent {...formTitle}/>
        </div>
      </div>
    </section>
  )
}

export default React.memo(BannerComponent);