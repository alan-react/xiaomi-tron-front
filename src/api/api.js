import * as axios from "axios"

export const ProductsApi = {
    getProducts() {
        return axios.get(`http://127.0.0.1:8000/api/products`).then(
            response => response
        )
    }
}
