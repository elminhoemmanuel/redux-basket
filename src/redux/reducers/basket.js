import { SET_PRODUCTS, STOP_LOADING, SET_BASKET } from "../types"

// const initialState = {
//     products: [],
//     cart: {
//         basket: [
//             {
//                 "sku": 1,
//                 "quantity": 5
//             },
//             {
//                 "sku": 3,
//                 "quantity": 1
//             }
//         ],
//         cardNumber: "4539456463019519"
//     },
//     isLoading: true
// }

export const basketReducer = (state = {
    products: [],
    cart: {
        basket: [
            {
                "sku": 1,
                "quantity": 5
            },
            {
                "sku": 3,
                "quantity": 1
            }
        ],
        cardNumber: "4539456463019519"
    },
    isLoading: true
}, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                products: action.payload
            }
        case SET_BASKET:
            return {
                basket: action.payload
            }
        case STOP_LOADING:
            return {
                isLoading: false
            }
        default:
            return state
    }
}