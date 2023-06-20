import React, {useContext, useEffect, useState} from 'react';
import './styles.css';
import {Link, useNavigate} from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import {Context} from "../../context";

const Results = ({paymentInfo}) => {

  const {loading} = useContext(Context);

  const [paymentMessages,setPaymentMessages] = useState({
    status: 'Рады приветствовать вас на нашем сайте',
    text: `Если у вас возникли какие-либо вопросы связанные с оплатой или работой сайта, 
        пожалуйста свяжитесь с Юлией, написав ей в телеграм @Juleera.`
  });

  const navigate = useNavigate();

  useEffect(() => {
    const info = {status: '', text: ''}
    if(paymentInfo) {
      if(paymentInfo.status === 'waiting_for_capture') {
        info.status = 'В ожидании подтверждения...'
        info.text = 'Ваша оплата прошла успешно, но мы ждем подтверждения владельца. Если платеж не подтвердят в течении 24 часов, деньги будут автоматечески возвращены на вашу карту'
      }
      if(paymentInfo.status === 'pending') {
        info.status = 'В ожидании оплаты...'
        info.text = 'Пожалуйста завершите оплату'
        info.link = paymentInfo.confirmation.confirmation_url
      }
      if(paymentInfo.status === 'succeeded') {
        info.status = 'Оплата прошла успешно!'
        info.text = 'Ваша оплата прошла успешно. Благодарим за покупку'
        info.email = paymentInfo.metadata.email
      }
      if(paymentInfo.status === 'canceled') {
        info.status = 'Платеж отменен'
        info.text = 'К сожалению ваш платеж отменен. Деньги будут возвращены на вашу банковскую карту'
      }
      setPaymentMessages(info)
    }
  }, [paymentInfo])

  return (
    <div className={"payment-results "}>
      <header >
        <div className="wrapper">
          <div className="gayd-header">
            <Link to={'https://www.instagram.com/momjulee/'} target="_blank" className="logo">
              @momjulee
            </Link>
          </div>
        </div>
      </header>
       <div className="wrapper">
         { loading
           ?  <div className={"payment-results-loading"}> <Loader /></div>
           : <div className="payment-results-inner">
             <div className="payment-results-content text-center">
               <h2>{paymentMessages?.status}</h2>
               <p>{paymentMessages?.text}</p>
             </div>
             {paymentMessages?.link &&
               <Link to={paymentMessages?.link} className={"payment-results-subbutton"} >Продолжить оплату</Link>
             }
             {paymentMessages?.email &&
               <div className={"payment-results-success text-center"}>
                 Мы выслали на вашу почту <b>{paymentMessages?.email}</b> письмо с ссылкой для скачивания файла.
                 если по какой-то причине письмо не пришло, пожалуйста свяжитесь с
                 <Link target={"_blank"} to={"https://t.me/juleera"} >Юлией</Link>
               </div>
             }
           </div>
         }

         <button onClick={() => navigate('/calendar')} className={"payment-results-button"}>Вернуться к товарам</button>
       </div>
    </div>
  );
};

export default Results;