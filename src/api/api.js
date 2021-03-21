import * as axios from "axios"

export const ProductsApi = {

    getSliderImages() {
        return axios.get(`/api/sliders`)
    },

    getProducts() {
        return axios.get(`/api/products`).then(
            response => response.data
        )
    }

}

export const AuthApi = {

    login(login, password) {
        return axios.post(`/api/auth`, {login, password})
    },

    me() {
        return axios.get(`/api/auth/me`)
    },

    logout() {
        return axios.delete(`/api/auth`)
    },
}

export const CartApi = {
    addToCart(slug) {
        return axios.get(`api/cart/${slug}`)
    },

    removeFromCart(slug) {
        return axios.delete(`api/cart/${slug}`)
    }
}

export const SearchApi = {
    search(text) {
        return axios.get(`/api/search/${text}`)
    }
}

export const NewsApi = {
    getNews() {
        return axios.get(`/api/news`)
    }
}
