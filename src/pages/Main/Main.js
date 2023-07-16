import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import './main.css';
//images
import star from '../../images/main/star.svg';
import star1 from '../../images/main/star1.svg';
import star2 from '../../images/main/star2.svg';
import star3 from '../../images/main/star3.svg';
import star4 from '../../images/main/star4.svg';
import star5 from '../../images/main/star5.svg';
import star6 from '../../images/main/star6.svg';
import arrow from '../../images/arrow.svg';
import toy from '../../images/main/toy.svg';
import q1 from '../../images/main/q1.webp';
import q2 from '../../images/main/q2.webp';
import smallArrow from '../../images/main/small-arrow.svg';
import avatar from '../../images/main/avatar.webp';
import emodzi from '../../images/main/emodzi.webp';
import inwork from '../../images/main/inwork.svg';
import close from '../../images/main/close.svg';
import telegram from '../../images/telegram.svg';
import vk from '../../images/main/vk.svg';
import calendar from '../../images/main/calendarcover.webp';

const Main = () => {
  const navigate = useNavigate();
  return (
    <>
      <header className="header">
        <div className="wrapper">
          <Link to={'/'} href="#" className="logo">
            @momjulee
          </Link>
          <div className="offer">
              <img className="star1" src={star1} alt="звездочка" />
              <img className="star2" src={star2} alt="звездочка" />
              <img className="star3" src={star3} alt="звездочка" />
              <img className="offer__decor" src={star} alt="звезда" />
              <div className="offer__title">
                  <h1>
                    Привет, <br /> я — Юля!
                  </h1>
                  <div className="offer__desc">
                    <p>
                      Я просто обожаю творить и вдохновлять!
                    </p>
                    <p>
                      Обожаю свою работу и свою жизнь!
                    </p>
                    <p>
                      Добро пожаловать в моё пространство, выбирай то,
                      что тебя интересует и проходи по ссылке.
                    </p>
                    <img className="offer__arrow" src={arrow} alt="стрелка" />
                  </div>
                </div>
              <div className="offer__img">
                <img src={avatar} alt="Юлия Раткевич" />
              </div>
          </div>
        </div>
      </header>
      <section className="section bg">
        <div className="wrapper">
          <div className="prod">
            <img className="star4" src={star4} alt="звездочка" />
              <img className="star5" src={star5} alt="звездочка" />
                <div className="prod__list">
                  <div className="prod__item">
                    <div className="prod__caption">
                      Для детей
                    </div>
                    <div onClick={() => navigate('/products')} className="prod__card">
                      <div className="prod__card-inner">
                        <div className="propd__card-title">
                          Развивашки для детей. Пособия.
                        </div>
                        <p className="prod__card-description">
                          Тут собраны все пособия для занятий с вашими детками, которые можно приобрести в электронном
                          виде.
                        </p>
                      </div>
                      <div className="prod__card-img">
                        <img src={toy} alt="Иконка игрушки" />
                      </div>
                      <div className="prod__card-arrow">
                        <img src={smallArrow} alt="стрелочка" />
                      </div>
                    </div>
                    <div onClick={() => navigate('/calendar')} className="prod__card">
                      <div className="prod__card-inner">
                        <div className="propd__card-title">
                          Гайд “Календарь развития ребёнка”
                        </div>
                        <p className="prod__card-description">
                          Вся необходимая информация о развитии малыша с рождения и до пяти лет в одном месте.
                        </p>
                      </div>
                      <div className="prod__card-box">
                        <div className="prod__card-img">
                          <img src={calendar} alt="Иконка игрушки" />
                        </div>
                        <div className="prod__card-arrow">
                          <img src={smallArrow} alt="стрелочка" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="prod__item">
                    <div className="prod__caption">
                      Для взрослых
                    </div>
                    <div className="prod__card">
                      <div className="prod__card-inner">
                        <div className="propd__card-title">
                          Встреча/Консультация
                          со мной лично или онлайн.
                        </div>
                        <p className="prod__card-description">
                          Формат беседы, ответы на любые вопросы, консультации по ведению и развитию блога.
                        </p>
                      </div>
                      <div className="prod__card-box">
                        <div className="prod__card-img">
                          <img src={emodzi} alt="Иконка игрушки" />
                        </div>
                        <div className="prod__card-arrow">
                          <img src={smallArrow} alt="стрелочка" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="prod__item closed">
                    <div className="prod__card">
                      <div className="prod__card-inner">
                        <div className="propd__card-title">
                          Авторский мини-марафон
                          “Первые шаги к жизни мечты”.
                        </div>
                        <p className="prod__card-description">
                          Для тех, кто затр*хался жить в “дне сурка”, и хочет перемен.
                        </p>
                      </div>
                      <div className="prod__card-box">
                        <div className="prod__card-img">
                          <img src={inwork} alt="Иконка игрушки" />
                        </div>
                        <div className="prod__card-arrow">
                          <img src={close} alt="стрелочка" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="prod__item closed">
                    <div className="prod__card">
                      <div className="prod__card-inner">
                        <div className="prod__card-title">
                          Вдохновение и мотивация.
                        </div>
                        <p className="prod__card-description">
                          Мои мысли, мой опыт и мои инструменты, которые помогают идти к целям, не сливаться и жить кайфово.
                        </p>
                      </div>
                      <div className="prod__card-box">
                        <div className="prod__card-img">
                          <img src={inwork} alt="Иконка игрушки" />
                        </div>
                        <div className="prod__card-arrow">
                          <img src={close} alt="стрелочка" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrapper">
          <div className="question">
            <img className="star6" src={star6} alt="звездочка" />
              <img className="question__img1" src={q1} alt="" />
                <img className="question__img2" src={q2} alt="" />
                  <h2>
                    Задать <br />
                    мне вопрос
                  </h2>
                  <a href="https://t.me/Juleera" rel="nofollow noreferrer" target="_blank" className="button">
                    <img src={telegram} alt="телеграм" />
                      Telegram
                  </a>
          </div>
        </div>
      </section>
      <section className="section bg">
        <div className="wrapper">
          <div className="social">
            <div className="social__title">
              <h2>Я в соцсетях</h2>
            </div>
            <div className="social__list">
              <div className="social__item">
                <p>
                  Друзья, кому интересны только идеи детских поделок, без моих продуктов, подписывайте на мой
                  телеграм-канал: <br />
                  “ДЕТСКОЕ РАЗВИТИЕ И ТВОРЧЕСТВО”
                  <img src={arrow} alt="стрелка" />
                </p>
                <a href="https://t.me/detskoe_razvitie_tvorchestvo" rel="nofollow noreferrer" target="_blank" className="button">
                  <img src={telegram} alt="телеграм" />
                    Telegram
                </a>
              </div>
              <div className="social__item">
                <p>
                  Кому жутко неудобно сидеть в инстаграме из-за всей этой полит хрени, для вас моя группа во Вконтакте,
                  где я дублирую всю полезнятину из инстаграма: <br />
                  “Юля / Детские поделки / Творчество / Развивашки”
                  <img src={arrow} alt="стрелка" />
                </p>
                <a href="https://vk.com/momjulee" rel="nofollow noreferrer" target="_blank" className="button">
                  <img src={vk} alt="вконтакте" />
                    Вконтакте
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;