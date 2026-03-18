const allProducts = [
  { id: 1, name: 'Pia de Porcelana Premium', price: 899.90, category: 'pias', emoji: '🚿' },
  { id: 2, name: 'Vaso Sanitário Slim', price: 1299.90, category: 'loucas', emoji: '🪠' },
  { id: 3, name: 'Piso Acetinado 60x60', price: 189.90, category: 'pisos', emoji: '🟫' },
  { id: 4, name: 'Cuba de Embutir Oval', price: 459.90, category: 'cubas', emoji: '🫙' },
  { id: 5, name: 'Pia de Pedra Natural', price: 1599.90, category: 'pias', emoji: '🚿' },
  { id: 6, name: 'Piso Porcelanato Mármore', price: 289.90, category: 'pisos', emoji: '🟫' },
  { id: 7, name: 'Cuba de Apoio Redonda', price: 389.90, category: 'cubas', emoji: '🫙' },
  { id: 8, name: 'Vaso Sanitário Caixa Alta', price: 899.90, category: 'loucas', emoji: '🪠' },
]

interface ProdutosProps {
  onAddToCart: () => void
  onAddToFav: () => void
}

export default function Produtos({ onAddToCart, onAddToFav }: ProdutosProps) {
  const params = new URLSearchParams(window.location.search)
  const cat = params.get('cat') || ''

  const filtered = cat
    ? allProducts.filter(p => p.category === cat)
    : allProducts

  return (
    <section className="featured-products">
      <div className="container">
        <h2 className="section-title">
          {cat ? cat.charAt(0).toUpperCase() + cat.slice(1) : 'Todos os Produtos'}
        </h2>
        <div className="products-grid">
          {filtered.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">{product.emoji}</div>
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">
                  R$ {product.price.toFixed(2).replace('.', ',')}
                </p>
                <div className="product-actions">
                  <button className="btn btn-primary" onClick={onAddToCart}>
                    Adicionar ao Carrinho
                  </button>
                  <button className="btn-fav" onClick={onAddToFav}>❤️</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}