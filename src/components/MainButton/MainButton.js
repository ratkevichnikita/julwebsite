import React, {useContext} from 'react';
import {Context} from "../../context";
import {createPayment} from "../../api/api";
import {useNavigate} from "react-router-dom";

const MainButton = () => {
  const { cartProducts, totalSum, paymentActions } = useContext(Context);

  const navigate = useNavigate();

  const onButtonHandler = async () => {
    // const productsNames = cartProducts.map(item => item.title + ', ').join('');
    // createPayment(totalSum,paymentActions,productsNames)
    navigate('/checkout')
  }

  return (
    cartProducts.length > 0 && <button onClick={onButtonHandler} className={"main-button"}>{`Оформить заказ - ${totalSum} руб.`}</button>
  );
};

export default MainButton;