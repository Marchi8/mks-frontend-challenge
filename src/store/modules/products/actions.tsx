export const addProduct = (products: any) => {
    return {
        type: "ADD_PRODUCT",
        products,
    };
};