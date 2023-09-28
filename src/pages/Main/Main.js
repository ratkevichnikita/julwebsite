import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import './main.css';
//images
import arrow from '../../images/arrow.svg';
import toy from '../../images/main/toy.svg';
import smallArrow from '../../images/main/small-arrow.svg';
import emodzi from '../../images/main/emodzi.webp';
import inwork from '../../images/main/inwork.svg';
import close from '../../images/main/close.svg';
import telegram from '../../images/telegram.svg';
import ideas from '../../images/main/ideas.svg';
import calendar from '../../images/main/calendarcover.webp';

const Main = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="section">
        <div className="wrapper">
          <Link className={"insta-link"} to={"https://www.instagram.com/momjulee/"}>@momjulee</Link>
          <div className="prod">
                <div className="prod__list">
                  <div className="prod__item">
                    <div onClick={() => navigate('/products')} className="prod__card">
                      <div className="prod__card-inner">
                        <div className="propd__card-title">
                          Развивающие пособия для детей.
                        </div>
                        <p className="prod__card-description">
                          Тут собраны все пособия для занятий с вашими детками, которые можно приобрести в электронном виде.
                        </p>
                      </div>
                      <div className="prod__card-box">
                        <div className="prod__card-img">
                          <img src={toy} alt="Иконка игрушки" />
                        </div>
                        <div className="prod__card-arrow">
                          <img src={smallArrow} alt="стрелочка" />
                        </div>
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
                    <div onClick={() => navigate('/ideas')} className="prod__card">
                      <div className="prod__card-inner">
                        <div className="propd__card-title">
                          Сборник идей и шаблонов для творчества
                        </div>
                        <p className="prod__card-description">
                          100+ простых и интересных идей для детского развития и творчества.
                        </p>
                      </div>
                      <div className="prod__card-box">
                        <div className="prod__card-img">
                          <img src={ideas} alt="Иконка игрушки" />
                        </div>
                        <div className="prod__card-arrow">
                          <img src={smallArrow} alt="стрелочка" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link target={"_blank"} to={"https://wa.me/79506749016?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%F0%9F%91%8B%20%D0%9C%D0%B5%D0%BD%D1%8F%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8F..."} className="prod__item">

                    <div className="prod__card">
                      <div className="prod__card-inner">
                        <div className="propd__card-title">
                          Встреча со мной лично или онлайн.
                        </div>
                        <p className="prod__card-description">
                          Формат беседы, ответы на любые вопросы,
                          заряд энергией и позитивом.
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
                  </Link>
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
                </div>
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
                  Друзья, подписывайтесь на мой телеграм канал.
                  Там я каждую неделю делюсь полезными материалами для развития и творчества, которые можно скачивать.
                  <img src={arrow} alt="стрелка" />
                </p>
                <a href="https://t.me/detskoe_razvitie_tvorchestvo" rel="nofollow noreferrer" target="_blank" className="button">
                  <img src={telegram} alt="телеграм" />
                    Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"section"}>
        <div className="wrapper">
          <p style={{marginBottom: "30px"}}>
            Если вы хотите сказать нам Спасибо за идеи и наше творчество. Переходите по ссылке ниже.
          </p>
          <button  onClick={() => navigate('/donation')} className="button">
            Сказать спасибо
          </button>
        </div>
      </section>
    </>
  );
};

export default Main;