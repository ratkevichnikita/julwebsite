import {useCallback, useEffect, useState, lazy, Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {Context} from "./context";
// styles
import './App.css';
//components and methods
import {checkPaymentStatus} from "./api/api";
import {products,sorting} from "./db";
const MainLazy = lazy(() => import('./pages/Main/Main'));
const ProductsLazy = lazy(() => import('./pages/Products/Products'));
const ProductsSingleLazy = lazy(() => import('./pages/Products/ProductsSingle'));
const ResultsLazy = lazy(() => import('./pages/Results/Results'));
const CheckoutLazy  = lazy(() => import('./pages/Checkout/Checkout'));
const NotFoundLazy = lazy(() => import('./pages/NotFound/NotFound'));
const CalendarLazy = lazy(() => import('./pages/Calendar/Calendar'));
const CalendarPaymentLazy = lazy(() => import('./pages/Calendar/CalendarPayment'));
const OfertaLazy = lazy(() => import('./pages/Oferta/Oferta'));
const PromoLazy = lazy(() => import('./pages/Promo/Promo'));
const DonationLazy = lazy(() => import('./pages/Donation/Donation'));
const IdeasLazy = lazy(() => import('./pages/Ideas/Ideas'));
const NewYearIdeasLazy = lazy(() => import('./pages/NewYearIdeas/NewYearIdeas'));
const BirthdayLazy = lazy(() => import('./pages/Birthday/Birthday'));
const Intensive = lazy(() => import('./pages/Intensive/Intensive'));

function App() {
  const [cartProducts, setCartProducts] = useState([]);
  const [productsList, setProductsList] = useState(products);
  const [savedProducts, setSavedProducts] = useState([])
  const [sortByCategories, setSortByCategories] = useState('');
  const [sortByTopics, setSortByTopics] = useState('');
  const [totalSum, setTotalSum] = useState(0);
  const [paymentInfo, setPaymentInfo] = useState(null);
  const [loading, setLoading] = useState(false);

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
  let count = 0
  const getPaymentStatus = useCallback(() => {
    const paymentId = JSON.parse(localStorage.getItem('paymentId'))
    if(paymentId && paymentId !== '' && count === 0) {
      checkPaymentStatus(paymentId,setPaymentInfo,setLoading)
      count++
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
        products, sorting, cartProducts, productsList, loading,
        sortByTopics, sortByCategories, addToCart, totalSum, paymentActions
      }}>
        <Routes>
          <Route path={'/'} exact element={ <Suspense fallback={"Загрузка..."} > <MainLazy /> </Suspense>} />
          <Route path={'/products/:id'} exact element={<Suspense fallback={"Загрузка..."}> <ProductsSingleLazy productsList={productsList} addToCart={addToCart} /></Suspense>} />
          <Route path={'/products'} exact element={<Suspense fallback={"Загрузка..."} > <ProductsLazy setSortByTopics={setSortByTopics} setSortByCategories={setSortByCategories} productsList={productsList} addToCart={addToCart} /></Suspense>}/>
          <Route path={'/results'} exact element={<Suspense fallback={"Загрузка..."} > <ResultsLazy paymentInfo={paymentInfo} /></Suspense>} />
          <Route path={'/checkout'} exact element={<Suspense fallback={"Загрузка..."} > <CheckoutLazy /></Suspense>} />
          <Route path={'/calendar'} exact element={<Suspense fallback={"Загрузка..."} > <CalendarLazy /></Suspense>} />
          <Route path={'/calendarPayment'} exact element={<Suspense fallback={"Загрузка..."} > <CalendarPaymentLazy /></Suspense>} />
          <Route path={'/donation'} exact element={<Suspense fallback={"Загрузка..."} > <DonationLazy /></Suspense>} />
          <Route path={'/ideas'} exact element={<Suspense fallback={"Загрузка..."} > <IdeasLazy /></Suspense>} />
          <Route path={'/newyearideas'} exact element={<Suspense fallback={"Загрузка..."} > <NewYearIdeasLazy /></Suspense>} />
          <Route path={'/birthday'} exact element={<Suspense fallback={"Загрузка..."} > <BirthdayLazy /></Suspense>} />
          <Route path={'/intensive'} exact element={<Suspense fallback={"Загрузка..."} > <Intensive /></Suspense>} />
          <Route path={'/oferta'} exact element={<Suspense fallback={"Загрузка..."} > <OfertaLazy /> </Suspense>} />
          <Route path={'/promo/:title'} exact element={<Suspense fallback={"Загрузка..."} > <PromoLazy /> </Suspense>} />
          <Route path={'*'} exact element={<Suspense fallback={"Загрузка..."} > <NotFoundLazy /> </Suspense>} />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
