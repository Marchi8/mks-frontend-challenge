import { ADD_PRODUCT } from "./actionTypes";

const productsReducer = (state = [], action: any) => {
    console.log(action);
    switch (action.type) {
        case ADD_PRODUCT:
            const { product } = action;
            return [...state, product];

        default:
            return state;
    }
};

export default productsReducer;