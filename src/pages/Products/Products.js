import React, {useEffect, useState} from 'react';
//components
import Header from "../../components/Header/Header";
import Sorting from "../../components/Sorting/Sorting";
//styles
import './products.css';
import {useNavigate} from "react-router-dom";
import MainButton from "../../components/MainButton/MainButton";

const Products = ({setSortByCategories,setSortByTopics,productsList,addToCart}) => {
  const navigate = useNavigate();

  const goToSingle = (id) => {
    navigate(`/products/${id}`)
  }

  return (
    <div className={"products"}>
      <Header title={"Развивашки для деток"} link={"/"} linkTitle={"Назад на главную"} addToCart={addToCart} />
      <div className="wrapper">
        <div className="products-content">
          <p>При необходимости воспользуйтесь сортировкой:</p>
          <Sorting setSortByTopics={setSortByTopics} setSortByCategories={setSortByCategories} />
          <div className="products-list">
            {productsList.length > 0
              ? productsList.map(p => {
                  return (
                      <div key={p.id} className={"products-item"}>
                        <img className={"products-img"} src={p.img} alt={p.name}/>
                        <p className={"products-title"}>{p.title}</p>
                        <div className="products-inner">
                          <p className={"products-price"}>{p.price} ₽</p>
                          <span className={"products-ages"}>{p.age}</span>
                        </div>
                        <div className="products-actions">
                          <button onClick={() => goToSingle(p.id)} className={'secondary-btn '}>Подробнее</button>
                          <button onClick={() => addToCart(p)} className={p.selected ? 'primary-btn selected' : 'primary-btn'}>{p.selected ? 'В корзине' : 'В корзинy'}</button>
                        </div>
                      </div>
                    )
                })
              : <div>Ничего не найдено</div>
            }
          </div>
        </div>
        <MainButton />
      </div>
    </div>
  );
};

export default Products;