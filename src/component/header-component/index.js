import React from 'react';
import "./styles.scss";
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
  
  return (
    <header className='header'>
      <div className='component-container'>
        <Link to='/'>
          <div className='header__logo'>Logo</div>
        </Link>
      </div>
    </header>
  )
}

export default React.memo(HeaderComponent);