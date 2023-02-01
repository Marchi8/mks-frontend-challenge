"use client"
import { API } from "@/api";
import addProductsThunk from "@/store/modules/products/thunk";
import { ReactNode, useEffect, useState } from "react";
import { createContext } from "react";
import { useDispatch, useSelector } from "react-redux";

export interface IProductProps {
    children: ReactNode;
}

export interface IProductAuth {
    productsList: any;
    setProductsList: (data: any) => void
}

export const ProductContext = createContext<IProductAuth>({} as IProductAuth)

function ProductProvider({ children }: IProductProps) {
    const [productsList, setProductsList] = useState<any>([]);

    useEffect(() => {
        API.get("")
            .then(res => {
                setProductsList(res.data.products)
            })
            .catch(err => console.log(err))
    }, [])

    // console.log(productsList)
    // const dispatch = useDispatch();
    // dispatch(addProductsThunk() as any)
    // const products = useSelector((state: any) => state);
    // console.log(products)
    // console.log(products)

    // const { products }: any = useSelector((state) => state);
    // dispatch(addProductsThunk() as any)

    return (
        <ProductContext.Provider value={{ productsList, setProductsList }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider