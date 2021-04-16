import {CartApi} from "../../api/api";

const REMOVE_FROM_CART = "cartReducer/REMOVE_FROM_CART"
const ADD_TO_CART = "cartReducer/ADD_TO_CART"

const initialState = {
    products: null,
    totalPrice: 0,
    numberOfProducts: 0,
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TO_CART: {
            return {
                ...state,
                products: [state.products, ...action.product]
            }
        }

        default: return state
    }
}

const removeFromCartSuccess = (id) => ({type: REMOVE_FROM_CART, id})
const addToCartSuccess = (product) => ({type: ADD_TO_CART, product})

export const addToCart = (slug) => async (dispatch) => {
    const response = await CartApi.addToCart(slug)
    if (response.status === 200) {
        dispatch(addToCartSuccess(response.data))
    }
}

export const removeFromCart = (slug) => async (dispatch) => {
    const response = await CartApi.addToCart(slug)
    if (response.status === 200) {
        dispatch(removeFromCartSuccess(slug))
    }
}

export default cartReducer
