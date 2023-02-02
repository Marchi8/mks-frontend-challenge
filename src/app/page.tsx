"use client"
import styles from './page.module.css'
import Header from '@/components/Header'
import Products from '@/components/Products'
import Footer from '@/components/Footer'
import Cart from '@/components/Cart'
import CartProvider from '@/context/CartContext'
import ProductProvider from '@/context/ProductsContext'
import { Provider } from 'react-redux'
import store from "../store/index";

export default function Home() {
  return (
    <main className={styles.main}>
      <Provider store={store}>
        <ProductProvider>
          <CartProvider>
            <Header />
            <Cart />
            <Products />
            <Footer />
          </CartProvider>
        </ProductProvider>
      </Provider>
    </main >

  )
}
