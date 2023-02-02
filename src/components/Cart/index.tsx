"use client"
import { CartContext, ICartProducts } from "../../context/CartContext"
import { useContext } from "react"
import { CartProduct, CartStyle, EmptyCart } from "./styles"
import { AiFillShopping } from "react-icons/ai"

const Cart = () => {
    const {
        opened,
        setOpened,
        cartProducts,
        total,
        increaseQuantityFunc,
        decreaseQuantityFunc,
        removeProductFunc
    } = useContext(CartContext)

    return (
        opened ?
            <CartStyle>
                <div>
                    <header>
                        <p>Carrinho</p>
                        <p>de compras</p>
                    </header>
                    <button onClick={() => setOpened(false)}>X</button>
                </div>
                <ul>
                    {cartProducts.length ?
                        cartProducts.map((product: ICartProducts, index: number) => (
                            <CartProduct key={index}>
                                <button onClick={
                                    () => removeProductFunc(product)
                                } className="remove-button">x</button>
                                <img src={product.photo} alt="" />
                                <h4>{product.name}</h4>
                                <aside>
                                    <div>
                                        <button data-testid="decrease-quantity" onClick={() => decreaseQuantityFunc(product)}>-</button>
                                        <div className="vertical-line">.</div>
                                        <p>{product.quantity}</p>
                                        <div className="vertical-line">.</div>
                                        <button data-testid="increase-quantity" onClick={() => increaseQuantityFunc(product)}>+</button>
                                    </div>
                                    <span>
                                        R${parseInt(product.price).toFixed(0)}
                                    </span>
                                </aside>
                            </CartProduct>
                        )) :
                        <EmptyCart>
                            <h1>Carrinho Vazio</h1>
                            <h2><AiFillShopping /></h2>
                        </EmptyCart>
                    }
                </ul>
                <section>
                    <main>
                        <p>Total:</p>
                        <span>R${total}</span>
                    </main>
                    <button>Finalizar Compra</button>
                </section>
            </CartStyle>
            :
            <></>
    )
}

export default Cart