"use client"
import { ReactNode, useState } from "react";
import { createContext } from "react";

export interface ICartProps {
    children: ReactNode;
}
export interface ICartAuth {
    opened: boolean;
    setOpened: (data: boolean) => void
}

export const CartContext = createContext<ICartAuth>({} as ICartAuth)

function CartProvider({ children }: ICartProps) {
    const [opened, setOpened] = useState<boolean>(false);

    return (
        <CartContext.Provider value={{ opened, setOpened }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider