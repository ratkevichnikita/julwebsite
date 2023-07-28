import axios from "axios";

export const createPayment = async (totalSum,paymentActions,products,emailField) => {
  try {
    const payment = await axios({
      method: 'POST',
      headers: {
        // 'X-Requested-With': 'XMLHttpRequest'
        'Content-Type': 'application/json',
      },
      url: 'https://api.bslackers.ru/createPayment',
      // url: 'http://localhost:8000/createPayment',
      data: {
        sum: totalSum,
        products,
        emailField
      }
    })
    const conformationUrl = payment.data.confirmation.confirmation_url;
    const paymentId = payment.data.id
    return paymentActions(conformationUrl,paymentId)

  } catch (error) {
    console.log('error', error)
  }
}

export const checkPaymentStatus = async (paymentId,setPaymentInfo, setLoading) => {
  setLoading(true)
  try {
    const payment = await axios({
      method: 'POST',
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
      url: 'https://api.bslackers.ru/checkPaymentStatus',
      // url: 'http://localhost:8000/checkPaymentStatus',
      data: {
        paymentId
      }
    })
    setPaymentInfo(payment.data)
    if(payment.data) {
      setLoading(false)
    }
  } catch (error) {
    console.log(error)
    setLoading(false)
  }
}

