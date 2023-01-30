import styles from './page.module.css'
import Header from '@/components/Header'
import Products from '@/components/Products'
import Footer from '@/components/Footer'
import Cart from '@/components/Cart'
import CartProvider from '@/context/CartContext'

export default function Home() {
  return (
    <main className={styles.main}>
      <CartProvider>
        <Header />
        <Cart />
        <Products />
        <Footer />
      </CartProvider>
    </main>
  )
}
