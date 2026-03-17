const categories = [
  { label: 'Pias', href: '/produtos?cat=pias', emoji: '🚿' },
  { label: 'Louças', href: '/produtos?cat=loucas', emoji: '🪠' },
  { label: 'Pisos', href: '/produtos?cat=pisos', emoji: '🟫' },
  { label: 'Cubas', href: '/produtos?cat=cubas', emoji: '🫙' },
]

export default function Categories() {
  return (
    <section className="categories">
      <div className="container">
        <h2 className="section-title">Nossas Categorias</h2>
        <div className="categories-grid">
          {categories.map(cat => (
            <a key={cat.href} href={cat.href} className="category-card">
              <div className="category-icon">{cat.emoji}</div>
              <h3>{cat.label}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}