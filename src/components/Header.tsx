import { useState } from 'react'
import { useCart } from '../context/CartContext'

interface HeaderProps {
  favCount: number
}

export default function Header({ favCount }: HeaderProps) {
  const { cartCount } = useCart()
  const [searchQuery, setSearchQuery] = useState('')

  function handleSearch() {
    if (searchQuery.trim()) {
      console.log('Buscando:', searchQuery)
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') handleSearch()
  }

  return (
    <div className="container">
      <div className="header-content">
        <a href="/" className="logo">CERÂMICA PRO</a>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Buscar produtos..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleSearch}>Buscar</button>
        </div>
        <div className="header-icons">
          <a href="/login">👤 Entrar</a>
          <a href="/favoritos">❤️ Favoritos ({favCount})</a>
          <a href="/carrinho">🛒 Carrinho ({cartCount})</a>
        </div>
      </div>
    </div>
  )
}