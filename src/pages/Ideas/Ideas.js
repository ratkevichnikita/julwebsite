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
              {/*<img className={styles.offerNg} src={ng} alt=""/>*/}
              <h1>Сборник простых идей для детского развития и творчества</h1>
              <p>В сборнике собаронно более 100 простых идей на разные темы и возраст с подробным описанием и необходимыми заготовки.</p>
              <a href={"#cards"} className={styles.button}>Хочу сборник</a>
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
          <a href={"#cards"} className={`${styles.button} ${styles.wordsButton}`}>Хочу сборник</a>
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
          </div>
        </div>
      </section>
      <section id={'cards'} className={`${styles.section} ${styles.cards}`}>
        <div className={styles.wrapper}>
          <div className={styles.cardsList}>
            {/*<div className={styles.cardsItem}>*/}
            {/*  <div className={styles.cardsTitle}>*/}
            {/*    <h3 className={styles.center}>Сборник Новогодних идей подарков и творчесва</h3>*/}
            {/*  </div>*/}
            {/*  <ul>*/}
            {/*    <li>*/}
            {/*      30+ идей подарков своими руками и творческих поделок на тему Нового года*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*      Простые и доступные идеи для детей от 1-6 лет*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*      Пошаговая инструкция к каждой идеи с описанием и фотографиями процесса*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*      Шаблоны к каждой идеи*/}
            {/*    </li>*/}
            {/*  </ul>*/}
            {/*  <Link to={"https://payform.ru/dn36U3q/"} className={`${styles.cardsBtn} ${styles.button}`}>Купить сборник за 390 рублей</Link>*/}
            {/*  <p className={`${styles.center} ${styles.cardsDesc}`}>! Также оплатить можно картами зарубежных банков</p>*/}
            {/*</div>*/}
            <div className={styles.cardsItem}>
              <div className={styles.cardsTitle}>
                {/*<h3 className={styles.center}>Сборник Новогодних идей подарков и творчесва</h3>*/}
                {/*<p className={styles.center}>+</p>*/}
                <h3 className={styles.center}>Основной Сборник идей для творчества и развития</h3>
              </div>
              <ul>
                {/*<li className={styles.cardsItemColor}>*/}
                {/*  Все тоже, что в сборнике с Новогодними идеями*/}
                {/*</li>*/}
                <li>
                  100+ идей для творчества на разные тематики: рисование, аппликации, поделки, опыты, развивашки и т.д.
                </li>
                <li>
                  Пошаговая инструкция к каждой идеи с описанием и фотографиями процесса
                </li>
                <li>
                  Шаблоны к каждой идеи
                </li>
                <li>
                  Бесплатное пополнение сборника новыми идеями каждую неделю
                </li>
              </ul>
              <Link to={"https://payform.ru/jo5b77l/"} className={`${styles.cardsBtn} ${styles.button}`}>Купить сборник за 490 рублей</Link>
              <p className={`${styles.center} ${styles.cardsDesc}`}>! Также оплатить можно картами зарубежных банков</p>
            </div>
          </div>
        </div>
      </section>
      <Footer bg={true} />
    </div>
  );
};

export default Ideas;


// import React from 'react';
// import styles from './style.module.css';
// import {Link} from "react-router-dom";
// //images
// import instagram from "../../images/imstagram.svg";
// import telegram from "../../images/ideas/tg.svg";
// import main from "../../images/ideas/ideas.webp";
// import ideas2 from '../../images/ideas/ideas2.webp';
// import img1 from '../../images/ideas/img1.webp';
// import img2 from '../../images/ideas/img2.webp';
// import img3 from '../../images/ideas/img3.webp';
// import img4 from '../../images/ideas/img4.webp';
// import img5 from '../../images/ideas/img5.webp';
// import img6 from '../../images/ideas/img6.webp';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper';
// import "swiper/css";
// import "swiper/css/pagination";
// import 'swiper/css/navigation';
//
// const Ideas = () => {
//   return (
//     <div className={styles.ideas}>
//       <header className={styles.hero}>
//         <div className={styles.wrapper}>
//           <div className={styles.header}>
//             <Link to={'/'} className={styles.headerLogo}>
//               @momjulee
//             </Link>
//             <div className={styles.headerAdv}>
//               <div className={styles.headerItem}>
//                 <p>100</p>
//                 <span>Страниц</span>
//               </div>
//               <div className={styles.headerItem}>
//                 <p>PDF</p>
//                 <span>Формат</span>
//               </div>
//               <div className={styles.headerItem}>
//                 <p>2-7</p>
//                 <span>От 2 до 7 лет</span>
//               </div>
//             </div>
//             <div className={styles.headerSocial}>
//               <Link to={"https://www.instagram.com/momjulee/"} target={"_blank"}>
//                 <img src={instagram} alt="Инстаграмм Юлии раткевич"/>
//               </Link>
//               <Link to={"https://t.me/detskoe_razvitie_tvorchestvo"}  target={"_blank"}>
//                 <img src={telegram} alt="Инстаграмм Юлии раткевич"/>
//               </Link>
//             </div>
//           </div>
//           <div className={styles.offer}>
//             <img src={main} alt="Фотография мамы и малыша"/>
//             <div className={styles.offerTitle}>
//               <h1>Сборник простых идей для детского развития и творчества</h1>
//               <p>В сборнике собаронно более 100 простых идей на разные темы и возраст с подробным описанием и необходимыми заготовки.</p>
//               <Link to={"https://payform.ru/8135kbT/"} className={styles.button}>Хочу сборник</Link>
//             </div>
//           </div>
//           <div className={`${styles.headerAdv} ${styles.mobile}`}>
//             <div className={styles.headerItem}>
//               <p>100</p>
//               <span>Страниц</span>
//             </div>
//             <div className={styles.headerItem}>
//               <p>PDF</p>
//               <span>Формат</span>
//             </div>
//             <div className={styles.headerItem}>
//               <p>2-7</p>
//               <span>От 2 до 7 лет</span>
//             </div>
//           </div>
//         </div>
//       </header>
//       <section className={`${styles.section} ${styles.bg}`}>
//         <div className={styles.wrapper}>
//           <div className={styles.adv}>
//             <img src={ideas2} alt="шаблоны для творчества"/>
//             <ul className={styles.advList}>
//               <li className={styles.advItem}>
//                 - <span>100+ </span> идей в одном месте
//               </li>
//               <li className={styles.advItem}>
//                 - Всего <span>15-20</span>  минут в день. Для развития вашего малыша
//               </li>
//               <li className={styles.advItem}>
//                 - <span>Бесплатное</span> пополнение каждую неделю
//               </li>
//               <li className={styles.advItem}>
//                 - Специальная заготовка к каждой идеи. <span>Только распечатать</span>
//               </li>
//               <li className={styles.advItem}>
//                 - <span>Подробное описание</span> для каждого шаблона
//               </li>
//               <li className={styles.advItem}>
//                 - <span>Развитие</span> ребенка через игры. Просто и весело
//               </li>
//             </ul>
//
//           </div>
//         </div>
//       </section>
//       <section className={styles.section}>
//         <div className={styles.wrapper}>
//           <div className={styles.reviews}>
//             <h2 className={styles.reviewsTitle}>Наши идеи радуют детей по всему миру</h2>
//             <div className={styles.reviewsSlider}>
//               <Swiper
//                   slidesPerView={3}
//                   pagination={{
//                     clickable: true,
//                   }}
//                   loop
//                   modules={[Pagination]}
//                   breakpoints={{
//                 // when window width is >= 320px
//                 320: {
//                   slidesPerView: 1,
//                   spaceBetween: 20
//                 },
//                 577: {
//                   slidesPerView: 2,
//                   spaceBetween: 20
//                 },
//                 992: {
//                   slidesPerView: 3,
//                   spaceBetween: 20
//                 },
//               }}
//               >
//                   <SwiperSlide key={"1"}>
//                       <img src={img1} alt={"Фотография"} />
//                   </SwiperSlide>
//                   <SwiperSlide key={"2"}>
//                     <img src={img2} alt={"Фотография"} />
//                   </SwiperSlide>
//                   <SwiperSlide key={"3"}>
//                     <img src={img3} alt={"Фотография"} />
//                   </SwiperSlide>
//                   <SwiperSlide key={"4"}>
//                     <img src={img4} alt={"Фотография"} />
//                   </SwiperSlide>
//                   <SwiperSlide key={"5"}>
//                     <img src={img5} alt={"Фотография"} />
//                   </SwiperSlide>
//                   <SwiperSlide key={"6"}>
//                     <img src={img6} alt={"Фотография"} />
//                   </SwiperSlide>
//                 </Swiper>
//             </div>
//             <Link to={"https://payform.ru/8135kbT/"} className={`${styles.button} ${styles.reviewsButton}`}>Хочу сборник</Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };
//
// export default Ideas;