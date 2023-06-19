import React from 'react';
import {useNavigate} from "react-router-dom";
import './styles.css';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className={"not-found"}>
      <div className={"wrapper"}>
        <h2>Ошибка 404. страница не найдена</h2>
        <button className={"button"} onClick={() => navigate('/')} >Вернуться на главную</button>
      </div>
    </div>
  );
};

export default NotFound;