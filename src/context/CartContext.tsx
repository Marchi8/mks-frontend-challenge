"use client"
import {
    increaseQuantity,
    addProductToCart,
    reduceAmount,
    removeProduct
} from "../store/modules/reducer";
import { ReactNode, useState } from "react";
import { createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IProducts } from "./ProductsContext";

export interface ICartProps {
    children: ReactNode;
}
export interface ICartAuth {
    opened: boolean;
    cartProducts: ICartProducts[];
    products: IProducts[];
    cartLength: number;
    total: number;
    setOpened: (data: boolean) => void;
    addProductToCartFunc: (product: ICartProducts) => void;
    increaseQuantityFunc: (product: ICartProducts) => void;
    decreaseQuantityFunc: (product: ICartProducts) => void;
    removeProductFunc: (product: ICartProducts) => void;
}

export interface ICartProducts extends IProducts {
    products: IProducts[];
    quantity: number;
}

export const CartContext = createContext<ICartAuth>({} as ICartAuth)

function CartProvider({ children }: ICartProps) {
    const [opened, setOpened] = useState<boolean>(false);
    const dispatch = useDispatch();

    const addProductToCartFunc = (product: ICartProducts) => {
        dispatch(addProductToCart(product))
    }

    const increaseQuantityFunc = (product: ICartProducts) => {
        dispatch(increaseQuantity(product))
    }

    const decreaseQuantityFunc = (product: ICartProducts) => {
        dispatch(reduceAmount(product))
    }

    const removeProductFunc = (product: ICartProducts) => {
        dispatch(removeProduct(product))
    }

    const { products }: any = useSelector((state: ICartProducts) => state);
    const { cartProducts }: any = useSelector((state: ICartProducts) => state.products);
    const { cartLength }: any = useSelector((state: ICartProducts) => state.products);
    const { total } = useSelector((state: any) => state.products);

    return (
        <CartContext.Provider value={{
            opened,
            setOpened,
            addProductToCartFunc,
            increaseQuantityFunc,
            decreaseQuantityFunc,
            removeProductFunc,
            cartProducts,
            products,
            total,
            cartLength,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider