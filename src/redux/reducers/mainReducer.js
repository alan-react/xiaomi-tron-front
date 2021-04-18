import {ProductsApi, ReviewsApi, SearchApi} from "../../api/api";

const SET_PRODUCTS = "mainReducer/SET_PRODUCTS"
const SET_SEARCH_PRODUCTS = "mainReducer/SET_SEARCH_PRODUCTS"
const INITIALIZE_SUCCESS = "mainReducer/INITIALIZE_SUCCESS"
const SET_SLIDER_IMAGES = "mainReducer/SET_SLIDER_IMAGES"
const SET_POPULAR_PRODUCTS = "mainReducer/SET_POPULAR_PRODUCTS"
const SET_REVIEWS = "mainReducer/SET_REVIEWS"
const SHOW_ALERT = "mainReducer/SHOW_ALERT"
const CLOSE_ALERT = "mainReducer/CLOSE_ALERT"

const initialState = {
    products: null,
    popularProducts: null,
    searchProducts: null,
    initialized: false,
    sliderImages: null,
    reviews: null,
    alert: {
        show: false,
        message: null,
        title: null
    }
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

        case SET_POPULAR_PRODUCTS: {
            return {
                ...state,
                popularProducts: action.data
            }
        }

        case SET_REVIEWS: {
            return {
                ...state,
                reviews: action.data
            }
        }

        case SHOW_ALERT: {
            return {
                ...state,
                alert: {
                    show: true,
                    message: action.message,
                    title: action.title
                }
            }
        }

        case CLOSE_ALERT: {
            return {
                ...state,
                alert: {
                    show: false,
                    message: null,
                    title: null
                }
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
const setPopularProducts = (data) => ({type: SET_POPULAR_PRODUCTS, data})
const setReviews = (data) => ({type: SET_REVIEWS, data})
export const closeAlert = () => ({type: CLOSE_ALERT})

export const initialize = () => async (dispatch) => {
    const response = await ProductsApi.getSliderImages()
    dispatch(setSliderImages(response.data))
    dispatch(initializeSuccess())
}

export const getProductsBySearch = (text) => async (dispatch) => {
    if (text) {
        const response = await SearchApi.search(text)
        dispatch(setSearchProducts(response.data.products))
    }
}

export const showAlert = (message, timeout, title) => (dispatch) => {
    dispatch({type: SHOW_ALERT, message, title})
    setTimeout(() => dispatch(closeAlert()), timeout )
}


export const getProducts = () => async (dispatch) => {
    const data = await ProductsApi.getProducts()
    dispatch(setProducts(data))
}

export const getPopularProducts = () => async (dispatch) => {
    const data = await ProductsApi.getPopularProducts()
    dispatch(setPopularProducts(data.data.popolarproducts))
}

export const getReviews = () => async (dispatch) => {
    const data = await ReviewsApi.getReviews()
    dispatch(setReviews(data.data))
}


export default mainReducer


