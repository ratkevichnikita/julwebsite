import React, {useState, useContext} from 'react';
import styles from './styles.module.css';
import {Context} from "../../context";
import {createPayment} from "../../api/api";
import {Link, useNavigate} from "react-router-dom";

const CalendarPayment = () => {

  const { paymentActions } = useContext(Context);

  const navigate = useNavigate();

  const [emailField, setEmailField] = useState('');
  const [validationFiled, setValidationField] = useState({error: false, text: 'Заполните пожалуста поле'});
  const [timer, setTimer] = useState(null);
  const emailRegex = new RegExp("(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])");
  const onHandleClick = () => {
    if(!validationFiled.error && emailField !== '') {
      createPayment(990, paymentActions,'Гайд: календарь развития ребенка', emailField)
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
      <div className={styles.paymentBack}>
        <div className={styles.wrapper}>
          <button className={styles.paymentBackButton} onClick={() => navigate(-1)} >
            <svg width="45" height="6" viewBox="0 0 45 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 3L5 5.88675V0.113249L0 3ZM45 2.5L4.5 2.5V3.5L45 3.5V2.5Z" fill="#1C1C1C"/>
            </svg>
            Вернуться назад
          </button>
        </div>
      </div>
      <div className={`${styles.paymentText} ${styles.center}`}>
        <div className={styles.wrapper}>
          <p className={styles.paymentTitle}>Гайд “Календарь развития ребенка”</p>
          <p>
            Итого: <b>990 ₽</b>
          </p>
          <p className={styles.paymentDescription}>
            Укажите свою действующую почту, к которой у вас есть доступ.
            После оплаты на указанную вами почту придет ссылка для скачивания Гайда.
          </p>
          <div className={styles.paymentBox}>
            <input
              className={styles.paymentInput}
              onChange={(e) => onHandleChange(e.target.value)}
              value={emailField} type="text"
              placeholder="Введите почту"
            />
            {(validationFiled.error) && <div className={styles.paymentValidation}>{validationFiled.text}</div>}
          </div>

          <button className={styles.paymentButton} onClick={() => onHandleClick()} >Оплатить</button>
        </div>
      </div>
    </div>

);
};

export default CalendarPayment;