import React, {useEffect, useRef, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
//components
import Footer from "../../components/Footer/Footer"
//styles
import styles from './styles.module.css';
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
//images
import main from '../../images/calendar/calendar-main.webp'
import whatsapp from "../../images/calendar/whatsapp.svg";
import review1 from '../../images/calendar/review1.webp';
import review2 from '../../images/calendar/review2.webp';
import review3 from '../../images/calendar/review3.webp';
import review4 from '../../images/calendar/review4.webp';
import review5 from '../../images/calendar/review5.webp';
import review6 from '../../images/calendar/review6.webp';
import review7 from '../../images/calendar/review7.webp';
import review8 from '../../images/calendar/review8.webp';
import review9 from '../../images/calendar/review9.webp';
import instagram from "../../images/imstagram.svg";
import vkontakte from "../../images/vkontakte.svg";
import who1 from "../../images/calendar/who1.svg"
import who2 from "../../images/calendar/who2.svg"
import who3 from "../../images/calendar/who3.svg"
import feeds from "../../images/calendar/feeds.webp";
import adv1 from "../../images/calendar/adv1.svg";
import adv2 from "../../images/calendar/adv2.svg";
import adv3 from "../../images/calendar/adv3.svg";
import adv4 from "../../images/calendar/adv4.svg";
import time from '../../images/calendar/time.webp';
import time2 from '../../images/calendar/time2.webp';
import discount from '../../images/calendar/discount.webp';
// import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

import YouTube from "react-youtube";
import {useOnScreen} from "../../hooks/useOnScreen";

const Calendar = () => {
  const navigate = useNavigate();
  const elementRef = useRef(null);
  const [videoOnScreen, setVideoOnScreen] = useState(false);
  const isOnScreen = useOnScreen(elementRef,setVideoOnScreen);

  useEffect(() => {
    if(isOnScreen) {
      setVideoOnScreen(true)
    }
  }, [isOnScreen])

  const handleClick = () => {
    navigate('/calendarPayment');
    {window.yaCounter93983666.reachGoal('ya-event-js')}
  }
  return (
    <div className={styles.calendar}>
      <header className={styles.hero}>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <Link to={'https://www.instagram.com/momjulee/'} target="_blank" className={styles.headerLogo}>
              @momjulee
            </Link>
            <div className={styles.headerAdv}>
                <div className={styles.headerItem}>
                  <p>60</p>
                  <span>Страниц</span>
                </div>
                <div className={styles.headerItem}>
                  <p>PDF</p>
                  <span>Формат</span>
                </div>
                <div className={styles.headerItem}>
                  <p>0-5</p>
                  <span>От 0 до 5 лет</span>
                </div>
            </div>
            {/*<div className={styles.headerNav}>*/}
            {/*  <Link to={'#'}>Что это такое</Link>*/}
            {/*  <Link to={'#'}>Кому подойдет</Link>*/}
            {/*  <Link to={'#'}>Отзывы</Link>*/}
            {/*</div>*/}
            <div className={styles.headerSocial}>
              <Link to={"https://www.instagram.com/momjulee/"} target={"_blank"}>
                <img src={instagram} alt="Инстаграмм Юлии раткевич"/>
              </Link>
              <Link to={"https://vk.com/club219870830"}  target={"_blank"}>
                <img src={vkontakte} alt="Инстаграмм Юлии раткевич"/>
              </Link>
            </div>
          </div>
          <div className={styles.offer}>
            <img src={main} alt="Фотография мамы и малыша"/>
            <div className={styles.offerTitle}>
              <h1>Раскройте потенциал вашего ребенка с помощью Календаря развития</h1>
              <p>Вся необходимая информация о развитии малыша с рождения и до пяти лет в одном месте.</p>
              <button onClick={() => handleClick()} className={styles.button}>Купить календарь</button>
            </div>
          </div>
          <div className={`${styles.headerAdv} ${styles.mobile}`}>
            <div className={styles.headerItem}>
              <p>60</p>
              <span>Страниц</span>
            </div>
            <div className={styles.headerItem}>
              <p>PDF</p>
              <span>Формат</span>
            </div>
            <div className={styles.headerItem}>
              <p>0-5</p>
              <span>От 0 до 5 лет</span>
            </div>
          </div>
        </div>
      </header>
      <section className={`${styles.section} ${styles.bg}`}>
        <div className={styles.wrapper}>
          <div className={styles.discount}>
            <div className={styles.discountInfo}>
              <h2>
                Специальное предложение <span className={styles.discountColor}>790 ₽</span> вместо <span className={styles.discountCross}>1300 ₽ !</span>
              </h2>
              <p>
                Вся польза о правильном развитии вашего малыша в одном месте!
              </p>
              <button onClick={() => handleClick()} className={styles.button}>Купить календарь за 790 ₽</button>
            </div>
            <div className={styles.discountCounter}>
              <img src={discount} alt="Фото Календаря развития Юлии Раткевич"/>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.wrapper}>
          <div className={styles.center}>
            <h2>Не хотите упустить время зря?</h2>
            <img className={styles.aboutImg} src={time} alt=""/>
            <img className={styles.mobile} src={time2} alt=""/>
          </div>
        </div>
      </section>
      <section className={`${styles.section} ${styles.who}`}>
        <div className={styles.wrapper}>
          <div>
            <h2 className={styles.whoTitle}>Кому подойдет?</h2>
            <div className={styles.whoInfo}>
              <div className={styles.whoItem}>
                <img src={who1} alt=" Родителям детей от рождения и до 6 лет"/>
                <p>
                  Родителям детей <br/>
                  от рождения и до 6 лет
                </p>
                <span>
                  Именно таков период ВАЖНОГО развития малышей.
                  За этот период ребенок переживает мощнейшее развитие, такое, как никогда больше в жизни.
                </span>
              </div>
              <div className={styles.whoItem}>
                <img src={who2} alt="Родителям, которые желают своему малышу здорового детства"/>
                <p>
                  Родителям, которые желают своему малышу здорового детства
                </p>
                <span>
                  Это очень важно. Воспитать ребенка здоровым не только физически, но и ментально!
                  В Календаре посвещанно этой теме особое внимание.
                </span>
              </div>
              <div className={styles.whoItem}>
                <img src={who3} alt="Родителям, которые ценят свое время и энергию"/>
                <p>
                  Родителям, которые ценят <br/>
                  свое время и энергию
                </p>
                <span>
                  На просторах интернета бездонный океан с информацией о развитии детей.
                  И только маленький процент пользы. В Календаре собрана как раз эта польза.
                </span>
              </div>
            </div>
            <img className={styles.feeds} src={feeds} alt="картинка листка"/>
            <button onClick={() => handleClick()} className={styles.button}>Купить календарь</button>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.wrapper}>
          <div className={styles.video}>
            <div className={styles.videoInfo}>
              <h2>“Календарь развития ребенка”</h2>
              <p>
                Почему так важно знать, Что именно сейчас переживает в развитии ваш малыш? Зачем нужны нормы развития?
              </p>
              <p>
                Зная, что должно развиваться у вашего ребенка в определенный период, вы сможете интегрировать подходящие игры и активности в его повседневную жизнь. Например, если вашему малышу пора узнать цвета и формы, можно включить их изучение в обычные игры.
              </p>
              <p>
                Зная, что нужно готовить ребенка к запуску речи уже с рождения, вы точно знаете, что и когда нужно внедрить в игры. Это поможет не отставать в развитии и не перегружать ребенка ненужными требованиями. Например, нет необходимости заставлять малыша учиться считать и писать в 3-4 года, когда он должен играть и развивать другие навыки.

              </p>
              <p>
                Если хотите быть в курсе развития своего ребенка и развивать его в соответствии с его возрастом, Календарь станет лучшим справочником для вас.
              </p>
            </div>
            <div ref={elementRef} className={styles.videoContent}>
              { videoOnScreen && <YouTube
                  videoId="U0PE6MKwb9c"
                  opts={{
                    width: '310',
                    height: '485',
                    playerVars: {
                      // https://developers.google.com/youtube/player_parameters
                      autoplay: 0,
                      modestbranding: 0,
                      rel: 0,
                      loop: 1,
                      playlist: 'U0PE6MKwb9c'
                    }}}
                />
              }
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.section} ${styles.bg}`} >
        <div className={styles.wrapper}>
            <div className={styles.adv}>
              <h2>Вот, что вы получаете</h2>
              <div className={styles.advContent}>
                <div className={styles.advItem}>
                  <img src={adv1} alt="иконка"/>
                  <p>
                    60 страниц
                  </p>
                  <span>
                    Чистой выжимки из полезной и понятной информации о нормах развития детей от 0 до 5 лет.
                  </span>
                </div>
                <div className={styles.advItem}>
                  <img src={adv2} alt="иконка"/>
                  <p>
                    В картинках удобнее
                  </p>
                  <span>
                    Особенно важные события вынесены в милейшие картинки, для простоты восприятия.
                  </span>
                </div>
                <div className={styles.advItem}>
                  <img src={adv3} alt="иконка"/>
                  <p>
                    Подарок
                  </p>
                  <span>
                    Чтобы запомнить самые важные моменты, вас будет ждать авторские “Мамины заметки”.
                  </span>
                </div>
                <div className={styles.advItem}>
                  <img src={adv4} alt="иконка"/>
                  <p>
                    Удобный формат
                  </p>
                  <span>
                    Календарь будет доступен в PDF-формате. Это удобно для заказа из любой точки мира.
                  </span>
                </div>
              </div>
              <button onClick={() => handleClick()} className={styles.button}>Купить календарь</button>
            </div>

          </div>
      </section>
      <section className={styles.section}>
        <div className={styles.wrapper}>
          <div className={styles.reviews}>
            <div className={`${styles.reviewsTitle} ${styles.center}`}>
              <h2>Отзывы</h2>
              <p>Уже больше 1000 родителей преобрели Календарь развития. <br/> Благодарю каждого за отзыв.</p>
            </div>
            <div className={styles.reviewsContent}>
                <Swiper
                  slidesPerView={1}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination, Navigation]}
                  breakpoints={{
                    768: {
                      // width: 768,
                      slidesPerView: 3,
                      navigation:true,
                    },
                  }}
                  navigation={true}
                  className={styles.reviewsSlider}
                >
                  <SwiperSlide>
                    <img src={review1} alt="Отзыв о календаре развитии"/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={review2} alt="Отзыв о календаре развитии"/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={review3} alt="Отзыв о календаре развитии"/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={review4} alt="Отзыв о календаре развитии"/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={review5} alt="Отзыв о календаре развитии"/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={review6} alt="Отзыв о календаре развитии"/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={review7} alt="Отзыв о календаре развитии"/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={review8} alt="Отзыв о календаре развитии"/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={review9} alt="Отзыв о календаре развитии"/>
                  </SwiperSlide>
                </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.section} ${styles.bg}`}>
        <div className={styles.wrapper}>
          <div className={styles.discount}>
            <div className={styles.discountInfo}>
              <h2>
                Специальное предложение <span className={styles.discountColor}>790 ₽</span> вместо <span className={styles.discountCross}>1300 ₽ !</span>
              </h2>
              <p>
                Вся польза о правильном развитии вашего малыша в одном месте!
              </p>
              <button onClick={() => handleClick()} className={styles.button}>Купить календарь за 790 ₽</button>
            </div>
            <div className={styles.discountCounter}>
              <img src={discount} alt="Фото Календаря развития Юлии Раткевич"/>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.delivery} ${styles.section} ${styles.center} `}>
        <div className="wrapper">
          <h2>Оплата и Доставка</h2>
          <div className="delivery-content">
            <p>
              Друзья! <br/>
              Оплата на сайте доступна только для карт РФ.
            </p>
            <p>
              <b>Если у вас карты других стран</b>,<br/>
              напишите мне личное сообщение <br/>
              в WhatsApp
            </p>
            <Link to={'https://wa.me/79506749016?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%F0%9F%91%8B%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%BA%D0%B0%D0%BB%D0%B5%D0%BD%D0%B4%D0%B0%D1%80%D1%8C%2C%20%D1%80%D0%B0%D1%81%D1%81%D0%BA%D0%B0%D0%B6%D0%B8%20%D0%BF%D1%80%D0%BE%20%D0%B4%D1%80%D1%83%D0%B3%D0%B8%D0%B5%20%D1%81%D0%BF%D0%BE%D1%81%D0%BE%D0%B1%D1%8B%20%D0%BE%D0%BF%D0%BB%D0%B0%D1%82%D1%8B'} >
              Написать в WhatsApp
              <img src={whatsapp} alt="Whatsapp Юлии Раткевич"/>
            </Link>
            <p>
              <b>Ссылка для скачивания</b> <br/>
              PDF-файла “Календарь развития ребенка”, <br/>
              придет вам на указанную вами почту  <br/> сразу после
              прохождения оплаты.
            </p>

          </div>
        </div>
      </section>
      <Footer bg={true} />
    </div>
  );
};

export default Calendar;