"use client"
import { ProductsStyle } from "./styles"
import { FiShoppingBag } from "react-icons/fi"
import { ProductContext } from "../../context/ProductsContext"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import ProductCard from "../ProductCard"

const Products = () => {
    const { productsList } = useContext(ProductContext)
    const { addProductToCartFunc } = useContext(CartContext)

    return (
        <ProductsStyle>
            <ul>
                {productsList.map((product: any) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </ul>
        </ProductsStyle>
    )
}

export default Products