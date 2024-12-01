import React, { useState } from 'react';
//images
import mainImg from "../../images/intensive/main.webp";
import reviews1 from "../../images/intensive/reviews1.webp";
import reviews2 from "../../images/intensive/reviews2.webp";
import reviews3 from "../../images/intensive/reviews3.webp";
import bg from "../../images/intensive/bg.webp";
import bg2 from "../../images/intensive/bg2.svg";
import bg3 from "../../images/intensive/bg3.webp";
// import bg4 from "../../images/intensive/bg4.svg";
import bg5 from "../../images/intensive/bg5.svg";
// import bg6 from "../../images/intensive/bg5.svg";
import who1 from "../../images/intensive/who1.svg";
import who2 from "../../images/intensive/who2.svg";
import who3 from "../../images/intensive/who3.svg";
import who4 from "../../images/intensive/who4.svg";
import headerIcon1 from "../../images/intensive/headerIcon1.svg";
import headerIcon2 from "../../images/intensive/headerIcon2.svg";
import headerIcon3 from "../../images/intensive/headerIcon3.svg";
import heartBlack from "../../images/intensive/heartBlack.svg";
import fingerUp from "../../images/intensive/fingerUp.svg";
//styles
import styles from './styles.module.css';
import Footer from '../../components/Footer/Footer';
// import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import YouTube from 'react-youtube';

const programmList = [
  {
    name: "День 1. База, мотивация",
    count: "(3 темы)",
    id: 1,
    options: [" Блогинг","Снимаем розовые очки", "Мотивация","Домашнее задание"]
  },
  {
    name: "День 2. Позиционирование. Упаковка",
    count: "(3 темы)",
    id: 2,
    options: ["Что такое позиционирование и зачем оно (почему это так важно)","Ник и аватарка","Заголовок, описание, призыв","Домашнее задание"]
  },
  {
    name: "День 3. Алгоритмы. Контент. Контент-план",
    count: "(5 тем)",
    id: 3,
    options: ["Алогритмы(что это такое, как их настроить)","Контент. Как создавать контент, где брать идеи","Банк идей, вдохновение, насмотренность","Фокус на свое позиционирование и цель","Что такое контент-план, зачем он нужен, почему он упращает ведение блога","Домашнее задание"]
  },
  {
    name: "День 4. Reels",
    count: "(1 тема)",
    id: 4,
    options: ["Всё о рилс(тренды, форматы, длительность, музыка, идея, как цеплять, про залетные рилсы и не залетные и тд)","Домашнее задание"]
  },
  {
    name: "День 5. Сторис и Хайлайтс. Посты. Визуал.",
    count: "(4 темы)",
    id: 5,
    options: ["Сторис и сторителинги (в чём отличие, как и сколько и когда)"," Хайлайтс (зачем, о чём, какие нужны)","Посты (нужны или нет, о чём писать)", "Визуал (почему это так важно, лента, единство, оформление рилс и сторис, шрифты, настройки для лучшего качества, обработка, источники вдохновения)","Домашнее задание"]
  },
]

const opts = {
  height: '110',
  width: '230',
 
};

const Intensive = () => {
  const [programId, setProgramId] = useState();
  return (
    <div className='wrapper'>
      <p className={styles.test}>Данная страница в разработке</p>
      <a href="https://t.me/juliaratkevich" className={styles.button}>Перейти в телегерам</a>
    </div>
  )
}
export default Intensive;

{/*
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
    <a href="#plans" className={styles.button}>ХОЧУ СТАТЬ БЛОГЕРОМ</a>
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
  <div className={styles.point}>
    <div className={styles.pointContent}>
      <div className={styles.pointItem}>
        <img className={styles.heartBlack} src={heartBlack} alt={"icon"} />
        <p className={styles.pointTitle}>
          Точка А
        </p>
        <ul>
          <li>
          — Хочу вести блог, но не знаю с чего начать ...
          </li>
          <li>
          — Начинаю вести блог, потом выпадаю и так по кругу ...
          </li>
          <li>
          — Не знаю что снимать и для кого ... 
          </li>
          <li>
          — Мой профиль не упакован ...
          </li>
          <li>
          — Желание вести блог есть, а действий нет ...
          </li>
        </ul>
      </div>
      <div className={styles.pointItem}>
      <img className={styles.fingerUp} src={fingerUp} alt={"icon"} />
        <p className={styles.pointTitle}>
        Твоя <span>точка Б</span> после интенсива:
        </p>
        <ul>
          <li>
          — Полное понимание о том, кто ты, о чём тебе вести блог и кто будет тебя смотреть и подписываться
          </li>
          <li>
          — Твоя шапка профиля соответствует твоему позиционированию, она понятна людям
          </li>
          <li>
          — Ты знаешь, какой контент снимать и кто его будет смотреть
          </li>
          <li>
          — Создаёшь контент регулярно и без напряга
          </li>
          <li>
          — Блогинг - часть твоей жизни. Любимая часть
          </li>
        </ul>
      </div>
    </div>
    <a className={styles.button} href={"#plans"}>Хочу стать блогером</a>
  </div>
  <div className={styles.you}>
    <img className={styles.bg2} src={bg2} alt=""/>
    <p className={styles.youTitle}>За 5 дней мы затронем <span>5 важных базовых тем</span></p>
    <ul className={styles.youList}>
      <li>1/ Мотивация и дисциплина</li>
      <li>2/ Оформление профиля</li>
      <li>3/ Контент, визуал</li>
      <li>4/ Сторис</li>
      <li>5/ Reels</li>
    </ul>
  </div>
</div>
<div className={styles.programm}>
  <div className={"wrapper"}>
    <img className={styles.bg3} src={bg3} alt={"фон"} />
    <div className={styles.programmHeader}>
      <p className={styles.programmTitle}>Программа</p>
      <p className={styles.programmSubtitle}>на 5 дней интенсива: </p>
    </div>
    <ul className={styles.programmList}>
      {programmList.map(item => {
        return (
          <li key={item.id} className={styles.programmItem}>
            <p className={styles.programmName}>{item.name}</p>
            <p className={styles.programmCount}>{item.count}</p>
            <button onClick={() => setProgramId(item.id)} className={styles.programmButton}> 
              <span>Подробнее</span> 
              ↓
              </button>
            {item.id === programId &&
              <ul className={styles.programmsubList}>
              {item.options.map(el => <li key={el} >- {el}</li>)}
              </ul>
            }
        </li>
        )
      })}
    </ul>
  </div>
</div>
<div className="wrapper">
  <div id="plans" className={styles.plans}>
    <p className={styles.plansTitle}>Тарифы</p>
    <ul>
      <li className={styles.plansItem}>
        <p className={styles.plansName}>«Старт»</p>
        <p className={styles.plansPrice}>990 руб.</p>
        <a href={"https://payform.ru/654E0Ib/"} target="_blank" className={styles.plansButton}>ХОЧУ «СТАРТ»</a>
        <div className={styles.plansContent}>
          <ul className={styles.plansCustomList}>
            <li>
              Программа 5-ти дней интенсива
            </li>
          </ul>
        </div>
        <div className={styles.plansFooter}>
          <p>
          * самостоятельное изучение материалов в течение 5 дней. Обучение проходит в тг-боте
          </p>
        </div>
      </li>
      <li className={`${styles.plansItem} ${styles.plansItemExtra}`}>
        <img className={styles.bg5} src={bg5} alt="фон" />
        <p className={styles.plansName}>«Оптимальный»</p>
        <p className={styles.plansPrice}>2.990 руб.</p>
        <a href={"https://payform.ru/de4E0M3/"} target="_blank" className={`${styles.plansButton} ${styles.plansButtonExtra}`}>ХОЧУ «ОПТИМАЛЬНЫЙ»</a>
        <div className={styles.plansContent}>
          <ul className={styles.plansClassicList}>
            <li>
              • Программа 5-ти дней интенсива
            </li>
          </ul>
          <ul className={styles.plansCustomList}>
            <li>
              Итоговая обратная связь по всей вашей работе за 5 дней от меня лично в аудио и видео форматах
            </li>
            <li>
              Подробный гайд про воронки
            </li>
            <li>
              Видео урок по базовому монтажу в CapCut
            </li>
            <li>
              Подборка ресурсов для мотивации, вдохновения и состояния
            </li>
          </ul>
        </div>
        <div className={styles.plansFooter}>
          <p>
          * самостоятельное изучение материалов в течение 5 дней, обратная связь от меня на 6-й день по всей проделанной вами работе в формате аудио и видео разбора. Обучение проходит в тг-боте
          </p>
        </div>
      </li>
      <li className={styles.plansItem}>
        <p className={styles.plansName}>«МАКСИМУМ»</p>
        <p className={styles.plansPrice}>6.900 руб.</p>
        <a href="https://payform.ru/fi4E0Nb/" target="_blank" className={styles.plansButton}>ХОЧУ «МАКСИМУМ»</a>
        <div className={styles.plansContent}>
          <ul className={styles.plansClassicList}>
            <li>
            • Программа 5-ти дней интенсива
            </li>
            <li>
            • Подробный гайд про воронки
            </li>
            <li>
            • Видео урок по базовому монтажу в CapCut
            </li>
            <li>
            • Подборка ресурсов для мотивации, вдохновения и состояния
            </li>
          </ul>
          <ul className={styles.plansCustomList}>
            <li>
            Личная работа со мной в закрытой тг-группе на протяжении всего интенсива
            </li>
          </ul>
        </div>
        <div className={styles.plansFooter}>
          <p>
          * моё личное ведение вас на протяжении всех дней, обратная связь по каждому домашнему заданию, связь со мной все дни интенсива. Обучение проходит в закрытой  тг-группе
          </p>
        </div>
      </li>
    </ul>
  </div>
</div>
<div className={styles.reviews}>
  <p className={styles.reviewsTitle}>
      Отзывы
  </p>
  <div className={styles.reviewsList}>
    <Swiper
        slidesPerView={1}
        spaceBetween={15}
        pagination={{
          clickable: true,
        }}
        loop
        modules={[Pagination]}
        className={"reviewsSlider"}
      >
        <SwiperSlide key={1} className={styles.reviewsSlide}>
          <div className={styles.reviewsHeader}>
            <img src={reviews1} alt="@dianarai.diary" className={styles.reviewsImg} />
            <div className={styles.reviewsInner}>
              <p>@dianarai.diary</p>
              <span>детское развитие, лайф</span>
            </div>
          </div>
          <div className={styles.reviewsContent}>
            <YouTube 
              videoId={"yklKZIeNBcY"} 
              opts={opts}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide key={2} className={styles.reviewsSlide}>
          <div className={styles.reviewsHeader}>
            <img src={reviews2} alt="@elena.dietzz" className={styles.reviewsImg} />
            <div className={styles.reviewsInner}>
              <p>@elena.dietzz</p>
              <span>нумеролог, таролог</span>
            </div>
          </div>
          <div className={styles.reviewsContent}>
            <YouTube 
              videoId={"GNfbTCxFTEs"} 
              opts={opts}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide key={3} className={styles.reviewsSlide}>
          <div className={styles.reviewsHeader}>
            <img src={reviews3} alt="missis_ivleva" className={styles.reviewsImg} />
            <div className={styles.reviewsInner}>
              <p>@missis_ivleva</p>
              <span>лайф, юмор</span>
            </div>
          </div>
          <div className={styles.reviewsContent}>
            <YouTube 
              videoId={"PBvJgKPp8uI"} 
              opts={opts}
            />
          </div>
        </SwiperSlide>
      </Swiper>
  </div>
</div>
<div className={styles.footer}>
<Footer bg={false} />
</div>
</section>
*/}

