const navLinks = [
  { label: 'Início', href: '/' },
  { label: 'Todos Produtos', href: '/produtos' },
  { label: 'Pias', href: '/produtos?cat=pias' },
  { label: 'Louças', href: '/produtos?cat=loucas' },
  { label: 'Pisos', href: '/produtos?cat=pisos' },
  { label: 'Cubas', href: '/produtos?cat=cubas' },
  { label: 'Contato', href: '/contato' },
]

export default function Navigation() {
  const currentPath = window.location.pathname

  return (
    <nav className="nav">
      <div className="container">
        {navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            className={currentPath === link.href ? 'active' : ''}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
