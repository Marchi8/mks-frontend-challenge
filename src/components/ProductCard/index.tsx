import { CartContext } from "../../context/CartContext"
import { useContext } from "react"
import { FiShoppingBag } from "react-icons/fi"
import { CardStyle } from "./styles";

const ProductCard = ({ product }: any) => {
    const { addProductToCartFunc } = useContext(CartContext)

    return (
        <CardStyle key={product.id}>
            <img src={product.photo} alt="" />
            <div>
                <h4>{product.name}</h4>
                <span>R${parseInt(product.price).toFixed(0)}</span>
            </div>
            <p>{product.description}</p>
            <button data-testid="buy" onClick={() => addProductToCartFunc(product)}><FiShoppingBag />COMPRAR</button>
        </CardStyle>
    )
}

export default ProductCard