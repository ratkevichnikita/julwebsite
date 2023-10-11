import React from 'react';
import styles from './styles.module.css';
import {Link} from "react-router-dom";
//images
import instagram from "../../images/imstagram.svg";
import telegram from "../../images/ideas/tg.svg";
import main from "../../images/ideas/ideas.webp";
import ideas2 from '../../images/ideas/ideas2.webp';
import img1 from '../../images/ideas/img1.webp';
import img2 from '../../images/ideas/img2.webp';
import img3 from '../../images/ideas/img3.webp';
import img4 from '../../images/ideas/img4.webp';
import img5 from '../../images/ideas/img5.webp';
import img6 from '../../images/ideas/img6.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

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
              <h1>Сборник простых идей для детского развития и творчества</h1>
              <p>В сборнике собаронно более 100 простых идей на разные темы и возраст с подробным описанием и необходимыми заготовки.</p>
              <Link to={"https://payform.ru/gw2S3ao/"} className={styles.button}>Хочу сборник</Link>
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
      <section className={`${styles.section} ${styles.bg}`}>
        <div className={styles.wrapper}>
          <div className={styles.adv}>
            <img src={ideas2} alt="шаблоны для творчества"/>
            <ul className={styles.advList}>
              <li className={styles.advItem}>
                - <span>100+ </span> идей в одном месте
              </li>
              <li className={styles.advItem}>
                - Всего <span>15-20</span>  минут в день. Для развития вашего малыша
              </li>
              <li className={styles.advItem}>
                - <span>Бесплатное</span> пополнение каждую неделю
              </li>
              <li className={styles.advItem}>
                - Специальная заготовка к каждой идеи. <span>Только распечатать</span>
              </li>
              <li className={styles.advItem}>
                - <span>Подробное описание</span> для каждого шаблона
              </li>
              <li className={styles.advItem}>
                - <span>Развитие</span> ребенка через игры. Просто и весело
              </li>
            </ul>

          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.wrapper}>
          <div className={styles.reviews}>
            <h2 className={styles.reviewsTitle}>Наши идеи радуют детей по всему миру</h2>
            <div className={styles.reviewsSlider}>
              <Swiper
                  slidesPerView={3}
                  pagination={{
                    clickable: true,
                  }}
                  loop
                  modules={[Pagination]}
                  breakpoints={{
                // when window width is >= 320px
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20
                },
                577: {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 20
                },
              }}
              >
                  <SwiperSlide key={"1"}>
                      <img src={img1} alt={"Фотография"} />
                  </SwiperSlide>
                  <SwiperSlide key={"2"}>
                    <img src={img2} alt={"Фотография"} />
                  </SwiperSlide>
                  <SwiperSlide key={"3"}>
                    <img src={img3} alt={"Фотография"} />
                  </SwiperSlide>
                  <SwiperSlide key={"4"}>
                    <img src={img4} alt={"Фотография"} />
                  </SwiperSlide>
                  <SwiperSlide key={"5"}>
                    <img src={img5} alt={"Фотография"} />
                  </SwiperSlide>
                  <SwiperSlide key={"6"}>
                    <img src={img6} alt={"Фотография"} />
                  </SwiperSlide>
                </Swiper>
            </div>
            <Link to={"https://payform.ru/gw2S3ao/"} className={`${styles.button} ${styles.reviewsButton}`}>Хочу сборник</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ideas;