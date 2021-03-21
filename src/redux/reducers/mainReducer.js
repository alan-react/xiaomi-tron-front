import {ProductsApi, SearchApi} from "../../api/api";

const SET_PRODUCTS = "mainReducer/SET_PRODUCTS"
const SET_SEARCH_PRODUCTS = "mainReducer/SET_SEARCH_PRODUCTS"
const INITIALIZE_SUCCESS = "mainReducer/INITIALIZE_SUCCESS"
const SET_SLIDER_IMAGES = "mainReducer/SET_SLIDER_IMAGES"

const initialState = {
    products: null,
    searchProducts: null,
    initialized: false,
    sliderImages: null
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {

        case INITIALIZE_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }

        case SET_PRODUCTS: {
            return {
                ...state,
                products: action.data
            }
        }

        case SET_SLIDER_IMAGES: {
            return {
                ...state,
                sliderImages: action.images
            }
        }

        case SET_SEARCH_PRODUCTS: {
            return {
                ...state,
                searchProducts: action.products
            }
        }

        default:
            return state
    }
}

const setProducts = (data) => ({type: SET_PRODUCTS, data})
const setSearchProducts = (products) => ({type: SET_SEARCH_PRODUCTS, products})
const initializeSuccess = () => ({type: INITIALIZE_SUCCESS})
const setSliderImages = (images) => ({type: SET_SLIDER_IMAGES, images})


export const initialize = () => async (dispatch) => {
    const response = await ProductsApi.getSliderImages()

    dispatch(setSliderImages(response.data))

    dispatch(initializeSuccess())

}

export const getProductsBySearch = (text) => async (dispatch) => {
    const response = await SearchApi.search(text)
    dispatch(setSearchProducts(response.data.products))
}


export const getProducts = () => async (dispatch) => {
    const data = await ProductsApi.getProducts()
    debugger
    dispatch(setProducts(data))
}


export default mainReducer


