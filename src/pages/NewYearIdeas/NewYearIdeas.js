import React from 'react';
import styles from './styles.module.css';
import {Link} from "react-router-dom";
//images
import instagram from "../../images/imstagram.svg";
import telegram from "../../images/ideas/tg.svg";
import main from "../../images/newyear/newyear.webp";
import ideas2 from '../../images/ideas/ideas2.webp';
import img1 from '../../images/ideas/img1.webp';
import img2 from '../../images/ideas/img2.webp';
import img3 from '../../images/ideas/img3.webp';
import img4 from '../../images/ideas/img4.webp';
import img5 from '../../images/ideas/img5.webp';
import img6 from '../../images/ideas/img6.webp';
import words from '../../images/newyear/words.webp';
import ng from '../../images/newyear/ng.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import Footer from "../../components/Footer/Footer";

const NewYearIdeas = () => {
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
                <p>100+</p>
                <span>Страниц</span>
              </div>
              <div className={styles.headerItem}>
                <p>PDF</p>
                <span>Формат</span>
              </div>
              <div className={styles.headerItem}>
                <p>1-6</p>
                <span>От 1 до 6 лет</span>
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
            <img className={styles.offerImg} src={main} alt="Фотография мамы и малыша"/>
            <div className={styles.offerSnow} />
            <div className={styles.offerTitle}>
              <img className={styles.offerNg} src={ng} alt=""/>
              <h1>Сборник простых идей для детского развития и творчества</h1>
              <p>В сборнике собаронно более 100 простых идей на разные темы и возраст с подробным описанием и необходимыми заготовки.</p>
              <Link to={"https://payform.ru/8135kbT/"} className={styles.button}>Купить сборник за 790 рублей</Link>
            </div>
          </div>
          <div className={`${styles.headerAdv} ${styles.mobile}`}>
            <div className={styles.headerItem}>
              <p>100+</p>
              <span>Страниц</span>
            </div>
            <div className={styles.headerItem}>
              <p>PDF</p>
              <span>Формат</span>
            </div>
            <div className={styles.headerItem}>
              <p>1-6</p>
              <span>От 1 до 6 лет</span>
            </div>
          </div>
        </div>
      </header>
      <section className={`${styles.section} ${styles.bg}`}>
        <div className={styles.wrapper}>
          <div className={styles.adv}>
            <img src={ideas2} alt="шаблоны для творчества"/>
            <div className={styles.advList}>
              <h2>Что вы получаете </h2>
              <ul >
                <li className={styles.advItem}>
                  - <span>100+ </span> идей для творчества на разные тематики: рисование, аппликации, поделки, опыты, развивашки и т.д.
                </li>
                <li className={styles.advItem}>
                  - <span>30 новогодних идей</span> для поделок. Сделайте интересный подарок вашим близким
                </li>
                <li className={styles.advItem}>
                  - Всего <span>15-20</span>  минут в день, для развития вашего малыша
                </li>
                <li className={styles.advItem}>
                  - <span>Бесплатное</span> пополнение сборника новыми каждую неделю
                </li>
                <li className={styles.advItem}>
                  - <span>Пошаговая инструкция</span> к каждой идеи с описанием и фотографиями процесса.
                </li>
                <li className={styles.advItem}>
                  - Шаблоны к каждой идеи
                </li>
                <li className={styles.advItem}>
                  - <span>Развитие</span> ребенка через игры. Просто и весело
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.section} ${styles.words}`}>
        <div className={styles.wrapper}>
          <h2 className={styles.center}>
            Развивайте вашего ребенка через творчество
          </h2>
          <img className={styles.center} src={words} alt=""/>
        </div>
      </section>
      <section className={`${styles.section} ${styles.bg}`}>
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
            <Link to={"https://payform.ru/8135kbT/"} className={`${styles.button} ${styles.reviewsButton}`}>Купить сборник за 790 рублей</Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default NewYearIdeas;