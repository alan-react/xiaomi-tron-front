import {CartApi} from "../../api/api";

const REMOVE_FROM_CART_SUCCESS = "cartReducer/REMOVE_FROM_CART_SUCCESS"
const ADD_TO_CART_SUCCESS = "cartReducer/ADD_TO_CART_SUCCESS"

const initialState = null

const cartReducer = (state = initialState, action) => {
    switch (action.type) {


        default: return state
    }
}

const removeFromCartSuccess = (id) => ({type: REMOVE_FROM_CART_SUCCESS, id})
const addToCartSuccess = (product) => ({type: ADD_TO_CART_SUCCESS, product})

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
