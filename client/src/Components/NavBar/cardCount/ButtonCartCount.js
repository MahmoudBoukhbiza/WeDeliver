import React from 'react';
import { useNavigate } from 'react-router';
import './styles.css';

const ButtonCartCount = ({ cartCount }) => {
  const navigate = useNavigate();
  return (
    <div className='btnCartCount' onClick={() => navigate('/order')}>
      <div className='count'>{cartCount >= 100 ? '99+' : cartCount}</div>
      <i class='fas fa-shopping-cart'></i>
    </div>
  );
};

export default ButtonCartCount;
