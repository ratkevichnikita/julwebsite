import React, {useState, useContext} from 'react';
import './styles.css';
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
        <div className="wrapper">
          <div className="gayd-header">
            <Link to={'https://www.instagram.com/momjulee/'} target="_blank" className="logo">
              @momjulee
            </Link>
          </div>
        </div>
      </header>
      <div className="gayd-payment-back">
        <div className="wrapper">
          <button className={"gayd-payment-back-button"} onClick={() => navigate(-1)} >
            <svg width="45" height="6" viewBox="0 0 45 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 3L5 5.88675V0.113249L0 3ZM45 2.5L4.5 2.5V3.5L45 3.5V2.5Z" fill="#1C1C1C"/>
            </svg>
            Вернуться назад
          </button>
        </div>
      </div>
      <div className={"gayd-payment text-center"}>
        <div className="wrapper">
          <p className={"gayd-payment-title"}>Гайд “Календарь развития ребенка”</p>
          <p>
            Итого: <b>990 ₽</b>
          </p>
          <p className={"gayd-payment-description"}>
            Укажите свою действующую почту, к которой у вас есть доступ.
            После оплаты на указанную вами почту придет ссылка для скачивания Гайда.
          </p>
          <div className="gayd-payment-box">
            <input
              className={'gayd-form-input'}
              onChange={(e) => onHandleChange(e.target.value)}
              value={emailField} type="text"
              placeholder="Введите почту"
            />
            {(validationFiled.error) && <div className={"gayd-payment-validation"}>{validationFiled.text}</div>}
          </div>

          <button className={"gayd-payment-button"} onClick={() => onHandleClick()} >Оплатить</button>
        </div>
      </div>
    </div>

);
};

export default CalendarPayment;