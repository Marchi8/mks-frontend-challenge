"use client"
import { API } from "../api";
import { ReactNode, useEffect, useState } from "react";
import { createContext } from "react";

export interface IProductProps {
    children: ReactNode;
}

export interface IProductAuth {
    productsList: IProducts[];
    setProductsList: (data: IProducts[]) => void
}

export interface IProducts {
    id: number;
    name: string;
    brand: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    price: string;
    photo: string;
}

export const ProductContext = createContext<IProductAuth>({} as IProductAuth)

function ProductProvider({ children }: IProductProps) {
    const [productsList, setProductsList] = useState<IProducts[]>([]);

    useEffect(() => {
        API.get("")
            .then(res => {
                setTimeout(() => setProductsList(res.data.products), 1000)
            })
            .catch(err => alert(err))
    }, [])

    return (
        <ProductContext.Provider value={{ productsList, setProductsList }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider