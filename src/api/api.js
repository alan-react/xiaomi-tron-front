import * as axios from "axios"

export const ProductsApi = {

    getProducts() {
        return axios.get(`/api/products`, {
            headers: {
                withCredentials: true,
            },
        }).then(
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
