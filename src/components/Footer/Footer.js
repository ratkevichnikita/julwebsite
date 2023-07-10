import React from 'react';
import {Link} from "react-router-dom";
//images
import instagram from '../../images/imstagram.svg';
import vkontakte from '../../images/vkontakte.svg';
//styles
import './styles.css';

const Footer = ({bg}) => {
  return (
    <footer className={bg ? 'footer text-center bg' : 'footer text-center'}>
      <div className="wrapper">
        <div className="footer-social">
          <Link to={"https://www.instagram.com/momjulee/"} target={"_blank"}>
            <img src={instagram} alt="Инстаграмм Юлии раткевич"/>
          </Link>
          <Link to={"https://vk.com/club219870830"}  target={"_blank"}>
            <img src={vkontakte} alt="Инстаграмм Юлии раткевич"/>
          </Link>
        </div>
        <div className="footer-offer">
          <Link to={'/oferta'} >Договор оферты</Link>
        </div>
        <div className="footer-about">
          <Link to={"mailto:yulia.ratkevich@mail.ru"}>
            yulia.ratkevich@mail.ru
          </Link>
          <p>Раткевич Юлия Алексеевна</p>
          <p>
            ИНН: <span>391302426628</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;