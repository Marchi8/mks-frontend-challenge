import styles from './page.module.css'
import Header from '@/components/Header'
import Products from '@/components/Products'
import Footer from '@/components/Footer'
import Cart from '@/components/Cart'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Cart />
      <Products />
      <Footer />
    </main>
  )
}
