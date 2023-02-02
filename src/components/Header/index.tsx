"use client"
import { HeaderStyle } from "./styles"
import { MdShoppingCart } from "react-icons/md"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const Header = () => {
    const { setOpened, cartLength } = useContext(CartContext)

    return (
        <HeaderStyle>
            <div>
                <h1>MKS</h1>
                <p>Sistemas</p>
            </div>
            <button data-testid="cart" id="open-modal" onClick={() => setOpened(true)}>
                <MdShoppingCart />
                <span>{cartLength}</span>
            </button>
        </HeaderStyle>
    )
}

export default Header