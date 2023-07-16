import React from 'react';
import styles from "../Calendar/styles.module.css";
import {useNavigate} from "react-router-dom";

const Checkout = ({price}) => {

  const navigate = useNavigate();

  return (
    <div className={"checkout"}>
      <div className={"checkout-back"}>
        <div className={"wrapper"}>
          <button className={styles.paymentBackButton} onClick={() => navigate(-1)} >
            <svg width="45" height="6" viewBox="0 0 45 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 3L5 5.88675V0.113249L0 3ZM45 2.5L4.5 2.5V3.5L45 3.5V2.5Z" fill="#1C1C1C"/>
            </svg>
            Вернуться назад
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;