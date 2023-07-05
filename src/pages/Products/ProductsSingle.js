import React, { useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
//  components
import Header from "../../components/Header/Header";
// styles
import './products.css'
import MainButton from "../../components/MainButton/MainButton";

const ProductsSingle = ({addToCart,productsList}) => {
  const { id } = useParams();
  const [currentProduct, setCurrentProduct] = useState(null);
  const [tabsName,setTabsName] = useState([
    {value: 'Описание', isSelected: true, name:''},
    {value: 'Оплата', isSelected: false},
    {value: 'Доступ', isSelected: false},
  ]);

  useEffect(() => {
    const currentProduct = productsList.find(p => p.id === id);
    setCurrentProduct(currentProduct);
  }, [productsList])

  const onTabHandle = (tabName) => {
    const tabsNameNew = tabsName.map(item => {
      if(tabName === item.value) {
        return {...item, isSelected: true}
      } else {
        return {...item, isSelected: false}
      }
    })
    setTabsName(tabsNameNew)
  }

  return (
    <div className={"c-product"}>
      <Header title={currentProduct?.title} linkTitle={"Вернуться назад"} link={"/products"} />
      <div className="wrapper">
        {currentProduct &&
          <div className="c-product-content">
            <img className={"c-product-img"} src={currentProduct.img} alt={currentProduct.title} />
            <div className="c-product-meta">
              <div className="c-product-inner">
                <p className={"c-product-price"}>Цена: <span>{currentProduct.price} ₽ </span></p>
                <p className={"c-product-age"}>Возраст: <span>{currentProduct.age}</span></p>
              </div>
              <button onClick={() => addToCart(currentProduct)} className={currentProduct.selected ? 'primary-btn selected' : 'primary-btn'}>{currentProduct.selected ? 'В корзине' : 'В корзинy'}</button>
            </div>
            <div className="c-product-tabs">
              <div className="c-product-tabs-caption">
                { tabsName.map(item => {
                    return <p
                              key={item.value}
                              className={item.isSelected ? 'c-product-tabs-cap selected' : 'c-product-tabs-cap'}
                              onClick={() => onTabHandle(item.value)}
                            >
                              {item.value}
                            </p>
                  })
                }
              </div>
              <div className="c-product-tabs-content">
                {tabsName.map(item => {
                    if(item.isSelected && item.value === 'Описание') {
                      return currentProduct.description
                    }
                    if(item.isSelected && item.value === 'Оплата') {
                      return currentProduct.payment
                    }
                    if(item.isSelected && item.value === 'Доступ') {
                      return currentProduct.access
                    }
                  })
                }
              </div>
            </div>
          </div>
        }
      <MainButton />
      </div>
    </div>
  );
};

export default ProductsSingle;