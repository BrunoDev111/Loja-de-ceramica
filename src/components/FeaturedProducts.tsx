import { useCart } from '../context/CartContext'

const products = [
  { id: 1, name: 'Pia de Porcelana Premium', price: 899.90, category: 'Pias', emoji: '🚿' },
  { id: 2, name: 'Vaso Sanitário Slim', price: 1299.90, category: 'Louças', emoji: '🪠' },
  { id: 3, name: 'Piso Acetinado 60x60', price: 189.90, category: 'Pisos', emoji: '🟫' },
  { id: 4, name: 'Cuba de Embutir Oval', price: 459.90, category: 'Cubas', emoji: '🫙' },
  { id: 5, name: 'Pia de Pedra Natural', price: 1599.90, category: 'Pias', emoji: '🚿' },
  { id: 6, name: 'Piso Porcelanato Mármore', price: 289.90, category: 'Pisos', emoji: '🟫' },
]

interface FeaturedProductsProps {
  onAddToFav: () => void
}

export default function FeaturedProducts({ onAddToFav }: FeaturedProductsProps) {
  const { addToCart } = useCart()

  return (
    <section className="featured-products">
      <div className="container">
        <h2 className="section-title">Produtos em Destaque</h2>
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">{product.emoji}</div>
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">
                  R$ {product.price.toFixed(2).replace('.', ',')}
                </p>
                <div className="product-actions">
                  <button className="btn btn-primary" onClick={() => addToCart(product)}>
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