import React, {useContext} from 'react';
import {Context} from "../../context";
import {createPayment} from "../../api/api";

const MainButton = () => {
  const { cartProducts, totalSum, paymentActions } = useContext(Context);

  const onButtonHandler = async () => {
    const productsNames = cartProducts.map(item => item.title + ', ').join('');
    createPayment(totalSum,paymentActions,productsNames)
  }

  return (
    cartProducts.length > 0 && <button onClick={onButtonHandler} className={"main-button"}>{`Оформить заказ - ${totalSum} руб.`}</button>
  );
};

export default MainButton;