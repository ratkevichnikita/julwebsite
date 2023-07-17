import React, {useState, useContext, useEffect} from 'react';
import styles from './styles.module.css';
import {Context} from "../../context";
import {createPayment} from "../../api/api";
import {Link, useNavigate} from "react-router-dom";
import {emailRegex} from "../../utils/helpers";

const Checkout = () => {

  const { paymentActions, totalSum } = useContext(Context);
  const [selectedProducts, setSelectedProducts] = useState([])
  const products = JSON.parse(localStorage.getItem('products'));

  const navigate = useNavigate();

  const [emailField, setEmailField] = useState('');
  const [validationFiled, setValidationField] = useState({error: false, text: 'Заполните пожалуста поле'});
  const [timer, setTimer] = useState(null);

  const onHandleClick = () => {
    if(!validationFiled.error && emailField !== '') {
      const email = emailField.trim();
      createPayment(totalSum, paymentActions,'Гайд: календарь развития ребенка', email)
      {window.yaCounter93983666.reachGoal('ya-payment.js')}
    } else {
      if(emailField === '') {
        setValidationField({error: true, text:'Заполните пожалуста поле'})
      } else {
        setValidationField({error: true, text:'Неправильно заполнено поле ( обязательные символы: \'@\' и \'.\' )'})
      }
    }
  }

  const onHandleChange = (value) => {
    setEmailField(value);
    clearTimeout(timer);
    if (value.match(emailRegex)) {
      setValidationField({error: false, text: ''})
    } else {
      if(value === '') {
        setValidationField({error: true, text:'Заполните пожалуста поле'})
      } else {
        const newTimer = setTimeout(() => {
          setValidationField({error: true, text:'Неправильно заполнено поле ( обязательные символы: \'@\' и \'.\' )'})
        }, 800)
        setTimer(newTimer)
      }
    }
  }

  useEffect(() => {
    if(products?.length > 0) {
      const filteredProducts = products.filter(p => p.selected);
      setSelectedProducts(filteredProducts);
    }
  }, [])

  return (
    <div>
      <header >
        <div className={styles.wrapper}>
          <div className={styles.paymentHeader}>
            <Link to={'https://www.instagram.com/momjulee/'} target="_blank" className="logo">
              @momjulee
            </Link>
          </div>
        </div>
      </header>
      <div className={styles.checkoutBack}>
        <div className={styles.wrapper}>
          <button className={styles.checkoutBackButton} onClick={() => navigate(-1)} >
            <svg width="45" height="6" viewBox="0 0 45 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 3L5 5.88675V0.113249L0 3ZM45 2.5L4.5 2.5V3.5L45 3.5V2.5Z" fill="#1C1C1C"/>
            </svg>
            Вернуться назад
          </button>
        </div>
      </div>
      <div className={`${styles.checkoutText} ${styles.center}`}>
        <div className={styles.wrapper}>
          <div className={styles.checkoutProducts}>
            {selectedProducts.map(p => {
              return (
                <div className={styles.checkoutProductsItem} key={p.id}>
                  <img src={p.img} alt={p.title} />
                  <p className={styles.checkoutProductsTitle}>{p.title}</p>
                  <p>{p.price}</p>
                </div>
              )
            })
            }
          </div>
          <p className={styles.checkoutTitle}>Гайд “Календарь развития ребенка”</p>
          <p>
            Итого: <b>{totalSum}</b>
          </p>
          <p className={styles.checkoutDescription}>
            Укажите свою действующую почту, к которой у вас есть доступ.
            После оплаты на указанную вами почту придет ссылка для скачивания материала.
          </p>
          <div className={styles.checkoutBox}>
            <input
              className={styles.checkoutInput}
              onChange={(e) => onHandleChange(e.target.value)}
              value={emailField} type="text"
              placeholder="Введите почту"
            />
            {(validationFiled.error) && <div className={styles.checkoutValidation}>{validationFiled.text}</div>}
          </div>

          <button className={styles.checkoutButton} onClick={() => onHandleClick()} >Оплатить</button>
        </div>
      </div>
    </div>

  );
};

export default Checkout;