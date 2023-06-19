import React from 'react';
import Cart from "../Cart/Cart";
import {useNavigate} from "react-router-dom";

const Header = ({cartProducts,addToCart,title,link,linkTitle}) => {
  const navigate = useNavigate();
  return (
    <div className="header-inner">
      <div className="wrapper">
        <div className="header-inner-box">
          <div onClick={() => navigate(link)} className="back-to-main">
            <svg width="45" height="6" viewBox="0 0 45 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 3L5 5.88675V0.113249L0 3ZM45 2.5L4.5 2.5V3.5L45 3.5V2.5Z" fill="#557892"/>
            </svg>
            <span>{linkTitle}</span>
          </div>
          <Cart cartProducts={cartProducts} addToCart={addToCart} />
        </div>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Header;