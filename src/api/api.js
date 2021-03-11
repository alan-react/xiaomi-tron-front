import * as axios from "axios"

export const ProductsApi = {
    getProducts() {
        return axios.get(`/api/products`, {
            headers: {
                withCredentials: true,
            },
        }).then(
            response => response
        )
    }
}
