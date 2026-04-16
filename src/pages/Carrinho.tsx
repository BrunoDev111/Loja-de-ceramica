export default function Carrinho() {
  return (
    <section className="carrinho">
      <div className="container">
        <h2 className="section-title">Meu Carrinho</h2>
        <div className="carrinho-empty">
          <span>🛒</span>
          <p>O seu carrinho está vazio.</p>
          <a href="/produtos" className="btn btn-primary">Ver Produtos</a>
        </div>
      </div>
    </section>
  )
}