import React, {useState, useContext} from 'react';
import './styles.css';
import {Context} from "../../context";
import {createPayment} from "../../api/api";
import {Link} from "react-router-dom";

const CalendarPayment = () => {

  const { paymentActions } = useContext(Context);

  const [emailField, setEmailField] = useState('');
  const [validationFiled, setValidationField] = useState({error: false, text: 'Заполните пожалуста поле'});
  const [timer, setTimer] = useState(null)

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
    if (value.includes('.') && value.includes('@') && value.length > 5) {
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