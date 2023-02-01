"use client"
import { ProductsStyle } from "./styles"
import { FiShoppingBag } from "react-icons/fi"
import { ProductContext } from "@/context/ProductsContext"
import { useContext } from "react"
import { CartContext } from "@/context/CartContext"

const Products = () => {
    const { productsList } = useContext(ProductContext)
    const { addProductToCartFunc } = useContext(CartContext)

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
                        <button onClick={() => addProductToCartFunc(product)}><FiShoppingBag />COMPRAR</button>
                    </li>
                ))}
            </ul>
        </ProductsStyle>
    )
}

export default Products