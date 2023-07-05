import React from 'react';
import {Link, useNavigate} from "react-router-dom";
//components
import Footer from "../../components/Footer/Footer";
import YouTube from "react-youtube";
//styles
import './styles.css';
import "swiper/css";
import "swiper/css/pagination";
//images
import cover from "../../images/calendar/cover.webp";
import heart from "../../images/calendar/heart.svg";
import insta from "../../images/calendar/insta-foto.webp";
import whatsapp from "../../images/calendar/whatsapp.svg";
import review1 from '../../images/calendar/review1.webp';
import review2 from '../../images/calendar/review2.webp';
import review3 from '../../images/calendar/review3.webp';
import julia from '../../images/calendar/julia.webp';
// import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

const Calendar = () => {

  const navigare = useNavigate();

  const handleClick = () => {
    navigare('/calendarPayment');
    {window.ym(93983666, 'reachGoal', 'ya-event-js')}
  }

  return (
    <div className={"gayd"}>

      <header >
        <div className="wrapper">
          <div className="gayd-header">
            <Link to={'https://www.instagram.com/momjulee/'} target="_blank" className="logo">
              @momjulee
            </Link>
            <img className={"gayd-img"} src={cover} alt="календарь развития ребенка от Раткевич Юлии"/>
            <img className={"heart-1"} src={heart} alt="сердце"/>
            <img className={"heart-2"} src={heart} alt="сердце"/>
          </div>
          <div className="gayd-avd">
            <div className="gayd-adv-item">
              <h2>60</h2>
              <p>Страниц</p>
            </div>
            <div className="gayd-adv-item">
              <h2>PDF</h2>
              <p>Формат</p>
            </div>
            <div className="gayd-adv-item">
              <h2>0-5</h2>
              <p>От 0 до 5 лет</p>
            </div>
          </div>
          <button onClick={() => handleClick()} className={"gayd-button"}>Купить календарь за 990 ₽</button>
        </div>
      </header>
      <section className="gayd-section about">
        <div className="wrapper">
          <div className="gayd-about-title">
            <div className="gayd-about-inner">
              <h2>Привет, я — Юля!</h2>
              <div className="gayd-about-img">
                <img src={julia} alt="Фотография Юлии Раткевич"/>
              </div>
            </div>
            <p>
              Я мама и автор блога <Link to={''}>@momjulee</Link>,
              где делюсь полезными и простыми деями для творчества и развития детей, а также личным опытом о развитии и воспитании ребенка.
            </p>
          </div>
          <div className="gayd-about-content">
            <img src={insta} alt="юлия раткевич фото профиля в инстаграмм"/>
            <p>Каждый раз, когда мне нужна была какая-либо информация о развитии по возрасту моего ребенка,
              я открывала интернет и начинала искать. Мне приходилось тратить кучу времени на поиски действительно стоящей и полезной инфы.
            </p>
            <p>
              Знакомо?
            </p>
            <p>
              В своем “Календаре” я собрала всю необходимую и важную информацию о развитии,
              как физическом, так и психоэмоциональном, сделала выжимку и удобно расположила все по возрастам.
            </p>
          </div>
        </div>
      </section>
      <section className={"gayd-section bg text-center"} >
        <div className="wrapper">
          <h2>
            Календарь развития ребенка
          </h2>
          <div className="gayd-box">
            <p>
              Зачем следить за развитием вашего малыша и знать об общепринятых нормах развития?
            </p>
            <p>
              Помимо того, что это очень интересно (как было в моем случае), это еще и очень важно!
              Зная, что именно должно развиваться у малыша в определенный период, можно вовремя отследить отклонения, на раннем этапе и своевременно обратиться за помощью к специалистам.
            </p>
            <p>
              Но не забывайте, что все детки развиваются по-разному, отклонения от норм - это нормально. Но всё же стоит знать о них, чтобы ничего не упустить.
            </p>
          </div>
          <button onClick={() => handleClick()} className={"gayd-button"}>Купить календарь за 990 ₽</button>
        </div>
      </section>
      <section className={"gayd-section benefits text-center"}>
        <div className="wrapper">
          <div className="benefits-title">
            <h2>Вот, что вы получаете</h2>
          </div>
          <div className="benefits-list">
            <div className="benefits-item">
              <span>60 страниц</span>
              <p>Чистой выжимки из полезной и понятной информации  о нормах развития детей от 0 до 5 лет.</p>
            </div>
            <div className="benefits-item">
              <span>Польза в картинках</span>
              <p>Особенно важные события вынесены в милейшие картинки, для простоты восприятия. </p>
            </div>
            <div className="benefits-item">
              <span>Подарок</span>
              <p>Чтобы запомнить самые важные моменты, вас будет ждать авторский календарик развитя.</p>
            </div>
            <div className="benefits-item">
              <span>Удобный формат</span>
              <p>Календарь будет доступен в PDF-формате. Это удобно для заказа из любой точки мира.</p>
            </div>
          </div>
          <div className="benefits-img">
            <div className="gayd-video">
              <YouTube
                videoId="U0PE6MKwb9c"
                opts={{
                  height: '390',
                  width: '300',
                  playerVars: {
                    // https://developers.google.com/youtube/player_parameters
                    autoplay: 0,
                    modestbranding: 0,
                    rel: 0,
                    loop: 1,
                    playlist: 'U0PE6MKwb9c'
                  }}}
              />
            </div>
            <img className={"heart-1"} src={heart} alt="сердце"/>
            <img className={"heart-2"} src={heart} alt="сердце"/>
          </div>
          <button onClick={() => handleClick()} className={"gayd-button"}>Купить календарь за 990 ₽</button>
          <div className="benefits-reviews">
            <h2>Отзывы</h2>
            <Swiper
              slidesPerView={1}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="reviews-swiper"
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
            </Swiper>
          </div>
        </div>
      </section>
      <section className={"gayd-section delivery bg text-center"}>
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
      <Footer />
    </div>
  );
};

export default Calendar;