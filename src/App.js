import {Route, Routes} from "react-router-dom";
import {Context} from "./context";
//components
import Main from "./pages/Main/Main";
import Products from "./pages/Products/Products";
import ProductsSingle from "./pages/Products/ProductsSingle";
import {products,sorting} from "./db";
// styles
import './App.css';
import {useCallback, useEffect, useState} from "react";
import Results from "./pages/Results/Results";
import {checkPaymentStatus} from "./api/api";
import Notifications from "./pages/Notifications/Notifications";
import NotFound from "./pages/NotFound/NotFound";
import Calendar from "./pages/Calendar/Calendar";
import CalendarPayment from "./pages/Calendar/CalendarPayment";

function App() {
  const [cartProducts, setCartProducts] = useState([]);
  const [productsList, setProductsList] = useState(products);
  const [savedProducts, setSavedProducts] = useState([])
  const [sortByCategories, setSortByCategories] = useState('');
  const [sortByTopics, setSortByTopics] = useState('');
  const [totalSum, setTotalSum] = useState(0);
  const [paymentInfo, setPaymentInfo] = useState(null);

  const paymentActions = useCallback((paymentUrl,paymentId) => {
    if(paymentUrl !== '') {
      window.location.href = paymentUrl;
    }
    if(paymentId?.length > 0) {
      localStorage.setItem('paymentId', JSON.stringify(paymentId))
    }
  }, [])

  useEffect(() => {
    if(cartProducts.length > 0) {
      const sum = cartProducts.reduce((acc,curr) => acc + curr.price, 0)
      setTotalSum(sum)
    }
  },[cartProducts])

  const addToCart = (product) => {
    const x = savedProducts?.length > 0 ? savedProducts : products;
    const productsListNew = x.map(item => {
      if(item.id === product.id) {
        return { ...item, selected: !item.selected }
      } else {
        return {...item}
      }
    })
    const hasInCart = cartProducts.find(item => item.id === product.id);
    let newItems = [];
    if(hasInCart) {
      newItems = cartProducts.filter(item => item.id !== product.id);
    } else {
      newItems = [...cartProducts, product];
    }
    setCartProducts(newItems)
    if(newItems.length === 0) {
      localStorage.removeItem('products')
      setSavedProducts([])
    } else {
      localStorage.setItem("products", JSON.stringify(productsListNew));
      setSavedProducts(productsListNew)
    }
    setProductsList(productsListNew)
  }

  useEffect(() => {
    const productsArr = savedProducts?.length > 0 ? savedProducts : products;
    const filteredProducts = productsArr.filter(p => {
      if(sortByCategories !== '') {
        if(!p.categories.includes(sortByCategories)) {
          return false
        }
      }
      if(sortByTopics !== '') {
        if(!p.topics.includes(sortByTopics)) {
          return false
        }
      }
      return true
    })
    setProductsList(filteredProducts)

  }, [sortByCategories,sortByTopics,savedProducts])

  const getSavedProducts = useCallback(() => {
    if(JSON.parse(localStorage.getItem("products"))){
      const savedProducts = JSON.parse(localStorage.getItem("products"));
      const selectedProducts = savedProducts.filter(item => item.selected)
      setCartProducts(selectedProducts);
      setProductsList(savedProducts)
      setSavedProducts(savedProducts)
    } else {
      setProductsList(products)
    }
  }, [JSON.parse(localStorage.getItem("products"))]);

  const getPaymentStatus = useCallback(() => {
    const paymentId = JSON.parse(localStorage.getItem('paymentId'))
    if(paymentId && paymentId !== '') {
      checkPaymentStatus(paymentId,setPaymentInfo)
    }
  }, [])

  useEffect(() => {
    getSavedProducts()
    getPaymentStatus()
    // getCurrentExchange()
  }, [])

  useEffect(() => {
    if(paymentInfo?.status === 'succeeded' || paymentInfo?.status === 'canceled') {
      localStorage.removeItem('paymentId');
      localStorage.removeItem('products');
    }
  }, [paymentInfo])

  return (
    <div className="App">
      <Context.Provider value={{
        products, sorting, cartProducts, productsList,
        sortByTopics, sortByCategories, addToCart, totalSum, paymentActions
      }}>
        <Routes>
          <Route path={'/'} exact element={ <Main />} />
          <Route path={'/products/:id'} exact element={<ProductsSingle productsList={productsList} addToCart={addToCart} />} />
          <Route path={'/products'} exact element={<Products setSortByTopics={setSortByTopics} setSortByCategories={setSortByCategories} productsList={productsList} addToCart={addToCart} />}/>
          <Route path={'/results'} exact element={ <Results paymentInfo={paymentInfo} />} />
          <Route path={'/notifications'} exact element={<Notifications />} />
          <Route path={'/calendar'} exact element={<Calendar />} />
          <Route path={'/calendarPayment'} exact element={<CalendarPayment />} />
          <Route path={'*'} exact element={<NotFound />} />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
