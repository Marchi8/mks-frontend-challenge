import { ICartProducts } from "@/context/CartContext";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartProducts: [] as ICartProducts[],
    total: 0 as number,
    cartLength: 0 as number,
}

const cartReducer = createSlice({
    name: "CART", initialState, reducers: {
        addProductToCart: (state, action) => {
            const findProduct = state.cartProducts.findIndex(
                product => product.id == action.payload.id
            );
            if (findProduct === -1) {
                state.cartProducts.push({ ...action.payload, quantity: 1 })
            } else {
                state.cartProducts[findProduct].quantity++
            }
            state.total += parseFloat(action.payload.price)
            state.cartLength++
        },

        increaseQuantity: (state, action) => {
            const productIndex = state.cartProducts.findIndex(
                product => product.id == action.payload.id
            );
            state.cartProducts[productIndex].quantity++
            state.cartLength++
            state.total += parseFloat(state.cartProducts[productIndex].price)
        },

        reduceAmount: (state, action) => {
            const productIndex = state.cartProducts.findIndex(
                product => product.id == action.payload.id
            );
            state.total -= parseFloat(state.cartProducts[productIndex].price)
            state.cartLength--
            if (state.cartProducts[productIndex].quantity > 1) {
                state.cartProducts[productIndex].quantity--
            } else {
                state.cartProducts.splice(productIndex)
            }
        },

        removeProduct: (state, action) => {
            const productIndex = state.cartProducts.findIndex(
                product => product.id == action.payload.id
            )
            state.total -=
                parseFloat(state.cartProducts[productIndex].price) *
                state.cartProducts[productIndex].quantity
            state.cartLength -= state.cartProducts[productIndex].quantity
            state.cartProducts.splice(productIndex)
        },
    }
})

export default cartReducer.reducer
export const {
    addProductToCart,
    increaseQuantity,
    reduceAmount,
    removeProduct,
} = cartReducer.actions