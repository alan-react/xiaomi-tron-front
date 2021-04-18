import * as axios from "axios"

export const ProductsApi = {

    getPopularProducts() {
        return axios.get(`/api/popularproducts`)
    },

    getSliderImages() {
        return axios.get(`/api/slides`)
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
    // запрос на рег.
    reg(name, surname, email, phone, password) {
        // меняя эти параметры изменяется запрос на бэк...
      return axios.post(`/api/reg`, {name, surname, email, phone, password})
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

export const ReviewsApi = {
    getReviews() {
        return axios.get(`/api/reviews`)
    }
}
