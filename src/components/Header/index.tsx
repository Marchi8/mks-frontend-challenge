"use client"
import { HeaderStyle } from "./styles"
import { MdShoppingCart } from "react-icons/md"
import { useContext } from "react"
import { CartContext } from "@/context/CartContext"

const Header = () => {
    const { opened, setOpened } = useContext(CartContext)
    console.log(opened)
    return (
        <HeaderStyle>
            <div>
                <h1>MKS</h1>
                <p>Sistemas</p>
            </div>
            <button onClick={() => setOpened(true)}><MdShoppingCart /> <span>0</span></button>
        </HeaderStyle>
    )
}

export default Header