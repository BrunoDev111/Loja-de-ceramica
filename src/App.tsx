import { useState } from 'react'
import './css/components.css'
import TopBar from './components/TopBar'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Categories from './components/Categories'
import FeaturedProducts from './components/FeaturedProducts'

export default function App() {
  const [cartCount, setCartCount] = useState(0)
  const [favCount, setFavCount] = useState(0)

  return (
    <>
      <header className="header">
        <TopBar />
        <Header
          cartCount={cartCount}
          favCount={favCount}
          onAddToCart={() => setCartCount(c => c + 1)}
          onAddToFav={() => setFavCount(f => f + 1)}
        />
        <Navigation />
      </header>

      <Hero />
      <Categories />
      <FeaturedProducts
        onAddToCart={() => setCartCount(c => c + 1)}
        onAddToFav={() => setFavCount(f => f + 1)}
      />
    </>
  )
}
