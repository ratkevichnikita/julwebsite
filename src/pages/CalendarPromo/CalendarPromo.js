import React from 'react';
import calendarPromoImage from '../../images/calendar/calendarPromo.webp';
import calendarPromoImg2 from '../../images/calendar/calendarPromoImg2.webp'
import style from './style.module.css';
import {Link} from "react-router-dom";

const CalendarPromo = () => {
  return (
    <div className={style.container}>
      <img className={style.img} src={calendarPromoImage} alt="image"/>
      <h1 className={style.title}>
        Идеи для детского Адвент-календаря
      </h1>
      <p className={style.desc}>
        31 идея на весь декабрь, чтобы сделать предновогоднее время ещё волшебней ✨
      </p>
      <Link to="https://payform.ru/pd5Ayay/" className={style.button}>
        Хочу сборник
      </Link>
      <div className={style.inner}>
        <p className={style.title}>
          + календарь
        </p>
        <p className={style.desc}>
          Календарь для распечатки в 2-х форматах, если вы не хотите заморачиваться.
          Каждый день ребёнок зачеркивает дни и получает от вас своё задание
        </p>
        <img className={style.img} src={calendarPromoImg2} alt="image"/>
        <Link to="https://payform.ru/pd5Ayay/" className={style.button}>
          Хочу сборник
        </Link>
      </div>
    </div>
  );
};

export default CalendarPromo;