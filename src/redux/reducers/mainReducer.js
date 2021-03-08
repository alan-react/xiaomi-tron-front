import {ProductsApi} from "../../api/api";

const SET_PRODUCTS = "mainReducer/SET_PRODUCTS"

const initialState = null

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_PRODUCTS: {
            return {...state, ...action.data}
        }

        default:
            return state
    }
}

const setProducts = (data) => ({type: SET_PRODUCTS, data})

export const getProducts = () => async (dispatch) => {
    debugger
    const data = await ProductsApi.getProducts()
    dispatch(setProducts(data))

    console.log(data)
}
