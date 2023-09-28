import React from 'react';
import styles from './styles.module.css';
import {Link} from "react-router-dom";
//images
import instagram from "../../images/imstagram.svg";
import telegram from "../../images/ideas/tg.svg";
import main from "../../images/ideas/ideas.webp";
import ideas2 from '../../images/ideas/ideas2.webp';

const Ideas = () => {
  return (
    <div className={styles.ideas}>
      <header className={styles.hero}>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <Link to={'/'} className={styles.headerLogo}>
              @momjulee
            </Link>
            <div className={styles.headerAdv}>
              <div className={styles.headerItem}>
                <p>100</p>
                <span>Страниц</span>
              </div>
              <div className={styles.headerItem}>
                <p>PDF</p>
                <span>Формат</span>
              </div>
              <div className={styles.headerItem}>
                <p>2-7</p>
                <span>От 2 до 7 лет</span>
              </div>
            </div>
            <div className={styles.headerSocial}>
              <Link to={"https://www.instagram.com/momjulee/"} target={"_blank"}>
                <img src={instagram} alt="Инстаграмм Юлии раткевич"/>
              </Link>
              <Link to={"https://t.me/detskoe_razvitie_tvorchestvo"}  target={"_blank"}>
                <img src={telegram} alt="Инстаграмм Юлии раткевич"/>
              </Link>
            </div>
          </div>
          <div className={styles.offer}>
            <img src={main} alt="Фотография мамы и малыша"/>
            <div className={styles.offerTitle}>
              <h1>Сборник простых идей и шаблонов для детского развития и творчества</h1>
              <p>В сборнике собаронно более 100 простых идей на разные темы и возраст с подробным описанием и необходимыми заготовки.</p>
              <Link to={"https://payform.ru/ck2OJLV/"} className={styles.button}>Хочу сборник</Link>
            </div>
          </div>
          <div className={`${styles.headerAdv} ${styles.mobile}`}>
            <div className={styles.headerItem}>
              <p>100</p>
              <span>Страниц</span>
            </div>
            <div className={styles.headerItem}>
              <p>PDF</p>
              <span>Формат</span>
            </div>
            <div className={styles.headerItem}>
              <p>2-7</p>
              <span>От 2 до 7 лет</span>
            </div>
          </div>
        </div>
      </header>
      <section className={styles.section}>
        <div className={styles.wrapper}>
          <div className={styles.adv}>
            <img src={ideas2} alt="шаблоны для творчества"/>
            <ul className={styles.advList}>
              <li className={styles.advItem}>
                - <span>100+ </span> идей в одном месте
              </li>
              <li className={styles.advItem}>
                - <span>Бесплатное</span> пополнение каждую неделю
              </li>
              <li className={styles.advItem}>
                - <span>Подробное описание</span> для каждого шаблона
              </li>
              <li className={styles.advItem}>
                - <span>Развитие</span> ребенка через игры. Просто и весело
              </li>
              <li className={styles.advItem}>
                - Заготовка в кадому шаблону. <span>Только распечатать</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ideas;