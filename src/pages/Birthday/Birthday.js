import React, {useState} from 'react';
import styles from './style.module.css';
import {Link} from "react-router-dom";
import birthday from '../../images/birthday/happybirthday.webp';

const Birthday = () => {

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
    <div className={styles.birthday}>
      <div className={"wrapper"}>
        <div className={styles.birthdayContent}>
          <p className={styles.birthdayHello}>Привет, 31</p>
          <img className={styles.birthdayImg} src={birthday} alt="Фото Юлии" />
          <h1>Happy birthday to me 🥳</h1>
          <p className={styles.birthdayText}>Друзья, сегодня я праждную свой День Рождения!</p>
          <p className={styles.birthdayText}>Ваши поздравления я с огромной благодарностью приму по ссылочке ниже</p>
          <div className={styles.birthdayMoney}>
            <div className={styles.birthdayBox}>
              {donationInput.map(item => <div
                onClick={() => handleChange(item.name)}
                className={item.selected ? `${styles.birthdayItemSelected} ${styles.birthdayItem}` : `${styles.birthdayItem}`}
                key={item.name}
              >
                {item.name}
              </div>)}
              рублей
            </div>

          </div>
          <Link target={'_blank'} to={currentLink} className={`${styles.birthdayBtn} primary-btn`}>
            Поздравляю
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Birthday;