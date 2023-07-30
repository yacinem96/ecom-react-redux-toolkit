import axios from "axios";
import { toast } from 'react-toastify'

const notifySuccess = (msg) => toast.success(msg);
const notifyError = (msg) => toast.error(msg);

const url = 'http://127.0.0.1:2211/api'

export const addToCart = async ({ userId, productId }) => {
  try {
    const res = await axios.post(url+'/cart' , { userId, productId })
    if (res.status === 200) {
      return res.data.products
    }
  } catch (err) {
    err.response.status === 500 && notifyError("500: Server ERROR")
    err.response && notifyError(err.response.data)
  }
}
export const updateCart = async ({ userId, productId, quantity }) => {
  try {
    const res = await axios.post(url+'/cart' , { userId, productId, quantity })
    if (res.status === 200) {
      return res.data.products
    }
  } catch (err) {
    err.response.status === 500 && notifyError("500: Server ERROR")
    err.response && notifyError(err.response.data)
    console.error(err.msg);
  }
}

export const deleteProductCart = async ({ }) => {
  try {

  } catch (err) {
    err.response.status === 500 && notifyError("500: Server ERROR")
    err.response && notifyError(err.response.data)
    console.error(err.msg);
  }
}