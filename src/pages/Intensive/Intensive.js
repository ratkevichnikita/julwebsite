import React from 'react';
//images
import mainImg from "../../images/intensive/main.webp";
import bg from "../../images/intensive/bg.webp";
import bg2 from "../../images/intensive/bg2.svg";
import who1 from "../../images/intensive/who1.svg";
import who2 from "../../images/intensive/who2.svg";
import who3 from "../../images/intensive/who3.svg";
import who4 from "../../images/intensive/who4.svg";
import headerIcon1 from "../../images/intensive/headerIcon1.svg";
import headerIcon2 from "../../images/intensive/headerIcon2.svg";
import headerIcon3 from "../../images/intensive/headerIcon3.svg";
//styles
import styles from './styles.module.css';

const Intensive = () => {
  return (
    <section className={styles.section}>
      <img src={bg} className={styles.bg} alt="background"/>
      <img src={headerIcon1} className={styles.headerIcon1} alt="background"/>
      <img src={headerIcon2} className={styles.headerIcon2} alt="background"/>
      <img src={headerIcon3} className={styles.headerIcon3} alt="background"/>

      <div className="wrapper">
        <img className={styles.mainImg} src={mainImg} alt="фотография Юлии раткевич"/>
        <div className={styles.header}>
           <div className={styles.title}>
             <p className={styles.subtitle}>5-ти дневный интенсив</p>
             <p className={styles.bloger}>Я - БЛОГЕР</p>
           </div>
          <p className={styles.maintext}>Поверишь в себя и начнешь вести свой блог регулярно. Поймешь что снимать и для кого и как на этом зарабатывать.</p>
          <a href="#" className={styles.button}>ХОЧУ СТАТЬ БЛОГЕРОМ</a>
        </div>
        <div className={styles.who}>
          <p className={styles.whoTitle}>Для кого?</p>
          <ul className={styles.whoList}>
            <li>
              <img src={who1} alt=""/>
              <p>Для тех кто не знает о чём снимать и о чём говорить</p>
            </li>
            <li>
              <img src={who2} alt=""/>
              <p>Для тех, кто постоянно выпадает из блога</p>
            </li>
            <li>
              <img src={who3} alt=""/>
              <p>Для тех, у кого нет позиционирования</p>
            </li>
            <li>
              <img src={who4} alt=""/>
              <p>Для тех, кто хочет сделать блог частью своей жизни</p>
            </li>
          </ul>
          <p className={styles.whoDesc}>* Подойдёт как для экспертов, так и для лайф блогеров</p>
        </div>
        <div className={styles.you}>
          <img className={styles.bg2} src={bg2} alt=""/>
          <p className={styles.youTitle}>Это про тебя?</p>
          <ul className={styles.youList}>
            <li>— Хочешь вести блог, но не знаешь с чего начать?</li>
            <li>— Начинаешь вести блог, потом выпадаешь и так по кругу?</li>
            <li>— Не знаешь о чём говорить в сторис?</li>
            <li>— Не знаешь что снимать и для кого?</li>
            <li>— Твой профиль не упакован?</li>
            <li>— Желание вести блог есть, а действий нет?</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Intensive;