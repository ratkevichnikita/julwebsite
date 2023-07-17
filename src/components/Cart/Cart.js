import React, {useState, useEffect, useContext} from 'react';
import './cart.css'
import {useNavigate} from "react-router-dom";
import {Context} from "../../context";

const Cart = () => {

  const navigate = useNavigate();

  const [cartModalActive, setCartModalActive] = useState(false);
  const {cartProducts,addToCart} = useContext(Context)

  const onHandleClick = () => {
    setCartModalActive(!cartModalActive)
  }

  useEffect(() => {
    const onClick = e =>  {
      if(!e.target.closest('.cart-content') && !e.target.closest('.cart-modal-content') ) {
        setCartModalActive(false)
      }
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
      <div onClick={onHandleClick} className={cartProducts?.length > 0 ? 'cart sticky': 'cart'}>
        {cartProducts?.length > 0 && (
          <div className="cart-content">
            <div className="cart__count">
              {`(${cartProducts?.length})`}
            </div>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.47371 8.60941V6.39889C9.47371 3.24226 11.9384 0.666992 15 0.666992C18.0616 0.666992 20.5263 3.24226 20.5263 6.39889V8.60941H24.3461C24.5211 8.60954 24.6896 8.67597 24.8176 8.79533C24.9455 8.91469 25.0235 9.07811 25.0358 9.25268L26.3489 28.5948C26.3604 28.7775 26.2993 28.9574 26.1788 29.0953C26.0583 29.2332 25.8882 29.3178 25.7056 29.3309H4.34087C4.15795 29.3309 3.98253 29.2582 3.85319 29.1289C3.72385 28.9995 3.65118 28.8241 3.65118 28.6412V28.5948L4.96424 9.25268C4.976 9.07772 5.05376 8.91375 5.18179 8.79393C5.30982 8.67411 5.47857 8.60737 5.65392 8.6072L9.47371 8.60941ZM11.5472 8.60941H18.4551V6.39889C18.4551 4.36741 16.9077 2.73826 15 2.73826C13.0923 2.73826 11.5472 4.36741 11.5472 6.39889V8.60941ZM5.81971 27.2618H24.1803L23.0574 10.6829H6.94487L5.81971 27.2618Z"
                fill="#557892"/>
            </svg>
          </div>
        )}
        {cartModalActive && (
          <div className={"cart-modal"}>
            <div className="cart-modal-content">
              <>
                {cartProducts.map(item =>
                  <div key={item.id} className={"cart-modal-item"}>
                    <img src={item.img} alt={item.name}/>
                    <p>{item.title}</p>
                    <svg className={"cart-item-remove"} onClick={() => addToCart(item)} width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.44683 16.4718L4.52808 15.5531L9.5812 10.5L4.52808 5.44683L5.44683 4.52808L10.5 9.5812L15.5531 4.52808L16.4718 5.44683L11.4187 10.5L16.4718 15.5531L15.5531 16.4718L10.5 11.4187L5.44683 16.4718Z" fill="#CF8C67"/>
                    </svg>
                  </div>
                )}
                <button className={"primary-btn small cart-modal-btn"} onClick={() => navigate('/checkout')} >Оформить</button>
              </>
            </div>
          </div>
        )}
      </div>
  );
};

export default Cart;