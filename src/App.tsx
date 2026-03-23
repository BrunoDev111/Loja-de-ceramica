import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './css/components.css'
import TopBar from './components/TopBar'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import Produtos from './pages/Produtos'
import Carrinho from './pages/Carrinho'

export default function App() {
  const [cartCount, setCartCount] = useState(0)
  const [favCount, setFavCount] = useState(0)

  return (
    <BrowserRouter>
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

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                onAddToCart={() => setCartCount(c => c + 1)}
                onAddToFav={() => setFavCount(f => f + 1)}
              />
            }
          />
          <Route
            path="/produtos"
            element={
              <Produtos
                onAddToCart={() => setCartCount(c => c + 1)}
                onAddToFav={() => setFavCount(f => f + 1)}
              />
            }
          />
          <Route path="/carrinho" 
          element={
              <Carrinho 
              />
            } 
          />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  )
}