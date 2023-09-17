import React, {useState} from 'react';
//styles
import './styles.css'
import {Link} from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const Donation = () => {

  const [donationInput, setDonationInput] = useState([
    {name: '100', link: 'https://payform.ru/ce2M8dX/', selected: true},
    {name: '150', link: 'https://payform.ru/ce2M8em/', selected: false},
    {name: '200', link: 'https://payform.ru/ce2M8ez/', selected: false},
    {name: '250', link: 'https://payform.ru/ce2M8eS/', selected: false},
    {name: '300', link: 'https://payform.ru/312M8f2/', selected: false},
    {name: '500', link: 'https://payform.ru/472M8fF/', selected: false},
    {name: '1000', link: 'https://payform.ru/4q2M8fY/', selected: false}
  ]);
  const [currentLink, setCurrentLink] = useState('https://payform.ru/ce2M8dX/')


  const handleChange = (value) => {
    const newDonationInput = donationInput.map(item => {
      if(item.name === value ) {
        return {...item, selected: true}
      } else {
        return {...item, selected: false}
      }
    });
    const selectedValue = newDonationInput.filter(item => item.selected).flatMap(item => item.link)[0];
    setDonationInput(newDonationInput);
    setCurrentLink(selectedValue)
  }

  return (
    <>
      <div className={"donation"}>
        <div className={"wrapper"}>
          <div className="donation-content">
            <h1>Сказать <span>"Cпасибо"</span> <br/> можно здесь </h1>
            <p>Любая сумма по сердцу</p>
            <div className="ym-input-icon-rub">
              <div className={"donation-box"}>
                {donationInput.map(item => <div
                  onClick={() => handleChange(item.name)}
                  className={item.selected ? 'donation-item selected' : 'donation-item'}
                  key={item.name}
                >
                  {item.name}
                </div>)}
                рублей
              </div>

            </div>
            <Link target={'_blank'} to={currentLink} className="primary-btn donation-btn">
              Спасибо
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Donation;