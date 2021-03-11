import * as axios from "axios"

export const ProductsApi = {
    getProducts() {
        return axios.get(`http://127.0.0.1:8000/api/products`, {
            headers: {
                withCredentials: true,
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            },
        }).then(
            response => response
        )
    }
}
