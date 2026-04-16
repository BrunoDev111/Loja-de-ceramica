import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import './css/components.css'
import TopBar from './components/TopBar'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import Produtos from './pages/Produtos'
import Carrinho from './pages/Carrinho'
import Contato from './pages/Contato'

export default function App() {
  const [favCount, setFavCount] = useState(0)

  return (
    <CartProvider>
      <BrowserRouter>
        <header className="header">
          <TopBar />
          <Header favCount={favCount} />
          <Navigation />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home onAddToFav={() => setFavCount(f => f + 1)} />} />
            <Route path="/produtos" element={<Produtos onAddToFav={() => setFavCount(f => f + 1)} />} />
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}