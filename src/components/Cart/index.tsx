"use client"
import { CartContext } from "@/context/CartContext"
import { useContext } from "react"
import { CartProduct, CartStyle } from "./styles"

const Cart = () => {
    const { opened, setOpened } = useContext(CartContext)
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
                    <CartProduct>
                        <button className="remove-button">x</button>
                        <img src="https://a-static.mlcdn.com.br/800x560/apple-watch-series-3-gps-38mm-caixa-prateada-aluminio-pulseira-esportiva-branca/magazineluiza/221516100/8470884401472de39dfa9f9d379e0cc9.jpg" alt="" />
                        <h4>Apple Watch Series 4 GPS</h4>
                        <aside>
                            <div>
                                <button>-</button>
                                <div className="vertical-line">.</div>
                                <p>1</p>
                                <div className="vertical-line">.</div>
                                <button>+</button>
                            </div>
                            <span>R$399</span>
                        </aside>
                    </CartProduct>
                    <CartProduct>
                        <button className="remove-button">x</button>
                        <img src="https://a-static.mlcdn.com.br/800x560/apple-watch-series-3-gps-38mm-caixa-prateada-aluminio-pulseira-esportiva-branca/magazineluiza/221516100/8470884401472de39dfa9f9d379e0cc9.jpg" alt="" />
                        <h4>Apple Watch Series 4 GPS</h4>
                        <aside>
                            <div>
                                <button>-</button>
                                <div className="vertical-line">.</div>
                                <p>1</p>
                                <div className="vertical-line">.</div>
                                <button>+</button>
                            </div>
                            <span>R$399</span>
                        </aside>
                    </CartProduct>
                </ul>
                <section>
                    <main>
                        <p>Total:</p>
                        <span>R$ 798</span>
                    </main>
                    <button>Finalizar Compra</button>
                </section>
            </CartStyle>
            :
            <></>
    )
}

export default Cart