import { CartContext, ICartProducts } from "../../context/CartContext"
import { useContext } from "react"
import { FiShoppingBag } from "react-icons/fi"

export interface ICard {
    product: any;
}

const ProductCard = ({ product }: ICard) => {
    const { addProductToCartFunc } = useContext(CartContext)

    return (
        <li key={product.id}>
            <img src={product.photo} alt="" />
            <div>
                <h4>{product.name}</h4>
                <span>R${parseInt(product.price).toFixed(0)}</span>
            </div>
            <p>{product.description}</p>
            <button data-testid="buy" onClick={() => addProductToCartFunc(product)}><FiShoppingBag />COMPRAR</button>
        </li>
    )
}

export default ProductCard