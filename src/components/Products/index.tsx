"use client"
import { ProductsStyle } from "./styles"
import { FiShoppingBag } from "react-icons/fi"
import { ProductContext } from "@/context/ProductsContext"
import { useContext, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import addProductsThunk from "@/store/modules/products/thunk"

const Products = () => {
    const { productsList } = useContext(ProductContext)
    // const dispatch = useDispatch();

    // const { products }: any = useSelector((store) => store);
    // const { products }: any = useSelector((store) => store);
    return (
        <ProductsStyle>
            <ul>
                {productsList.map((product: any, index: number) => (
                    <li key={index}>
                        <img src={product.photo} alt="" />
                        <div>
                            <h4>{product.name}</h4>
                            <span>R${parseInt(product.price).toFixed(0)}</span>
                        </div>
                        <p>{product.description}</p>
                        <button><FiShoppingBag /> COMPRAR</button>
                    </li>
                ))}
            </ul>
        </ProductsStyle>
    )
}

export default Products