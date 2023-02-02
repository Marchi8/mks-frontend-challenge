"use client"
import { ProductsStyle } from "./styles"
import { FiShoppingBag } from "react-icons/fi"
import { ProductContext } from "../../context/ProductsContext"
import { useContext } from "react"
import ProductCard from "../ProductCard"

const Products = () => {
    const { productsList } = useContext(ProductContext)

    return (
        <ProductsStyle>
            <ul>
                {productsList.length ?
                    productsList.map((product: any) => (
                        <ProductCard key={product.id} product={product} />
                    )) :
                    <>
                        <li id="skelleton">
                            <img src="https://mrconfeccoes.com.br/wp-content/uploads/2018/03/default.jpg" alt="" />
                            <div>
                                <h4>Product</h4>
                                <span>R$00</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <button><FiShoppingBag />COMPRAR</button>
                        </li>
                        <li id="skelleton">
                            <img src="https://mrconfeccoes.com.br/wp-content/uploads/2018/03/default.jpg" alt="" />
                            <div>
                                <h4>Product</h4>
                                <span>R$00</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <button><FiShoppingBag />COMPRAR</button>
                        </li>
                        <li id="skelleton">
                            <img src="https://mrconfeccoes.com.br/wp-content/uploads/2018/03/default.jpg" alt="" />
                            <div>
                                <h4>Product</h4>
                                <span>R$00</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <button><FiShoppingBag />COMPRAR</button>
                        </li>
                        <li id="skelleton">
                            <img src="https://mrconfeccoes.com.br/wp-content/uploads/2018/03/default.jpg" alt="" />
                            <div>
                                <h4>Product</h4>
                                <span>R$00</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <button><FiShoppingBag />COMPRAR</button>
                        </li>
                        <li id="skelleton">
                            <img src="https://mrconfeccoes.com.br/wp-content/uploads/2018/03/default.jpg" alt="" />
                            <div>
                                <h4>Product</h4>
                                <span>R$00</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <button><FiShoppingBag />COMPRAR</button>
                        </li>
                        <li id="skelleton">
                            <img src="https://mrconfeccoes.com.br/wp-content/uploads/2018/03/default.jpg" alt="" />
                            <div>
                                <h4>Product</h4>
                                <span>R$00</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <button><FiShoppingBag />COMPRAR</button>
                        </li>
                        <li id="skelleton">
                            <img src="https://mrconfeccoes.com.br/wp-content/uploads/2018/03/default.jpg" alt="" />
                            <div>
                                <h4>Product</h4>
                                <span>R$00</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <button><FiShoppingBag />COMPRAR</button>
                        </li>
                        <li id="skelleton">
                            <img src="https://mrconfeccoes.com.br/wp-content/uploads/2018/03/default.jpg" alt="" />
                            <div>
                                <h4>Product</h4>
                                <span>R$00</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <button><FiShoppingBag />COMPRAR</button>
                        </li>
                    </>
                }
            </ul>
        </ProductsStyle>
    )
}

export default Products