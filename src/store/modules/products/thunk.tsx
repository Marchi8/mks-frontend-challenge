import axios from "axios"
import { addProduct } from "./actions"

const addProductsThunk = () => (dispatch: any) => {
    axios
        .get("https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC")
        .then(res => {
            console.log(res.data.products)
            dispatch(addProduct(res.data.products))
        })
        .catch(err => console.log(err))
}

export default addProductsThunk