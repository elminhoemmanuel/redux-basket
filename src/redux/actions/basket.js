import { getProducts } from "../../BasketNodeServer/client_utils/esmodules/basket_server_api"
import { SET_BASKET, SET_PRODUCTS, STOP_LOADING } from "../types"

//actions
export const fetchProducts = (cb) => (dispatch) => {
    getProducts()
    .then((data)=>{
        console.log(data)
        dispatch({type:SET_PRODUCTS, payload:data})
        cb()
    })
    .catch((err)=>{
        console.log(err)
    })
}
export const setBasket = (cb, data) => (dispatch) => {
    dispatch({type:SET_BASKET, payload:data});
    cb();
}