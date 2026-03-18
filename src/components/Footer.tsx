export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          <div className="footer-col">
            <h3 className="footer-logo">CERÂMICA PRO</h3>
            <p>Produtos premium para transformar seu banheiro com elegância e qualidade.</p>
          </div>

          <div className="footer-col">
            <h4>Categorias</h4>
            <ul>
              <li><a href="/produtos?cat=pias">Pias</a></li>
              <li><a href="/produtos?cat=loucas">Louças</a></li>
              <li><a href="/produtos?cat=pisos">Pisos</a></li>
              <li><a href="/produtos?cat=cubas">Cubas</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Institucional</h4>
            <ul>
              <li><a href="/sobre">Sobre nós</a></li>
              <li><a href="/contato">Contato</a></li>
              <li><a href="/trocas">Trocas e Devoluções</a></li>
              <li><a href="/privacidade">Privacidade</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contato</h4>
            <ul>
              <li>📧 contato@ceramicapro.com.br</li>
              <li>📞 (11) 9999-9999</li>
              <li>📍 São Paulo, SP</li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2025 Cerâmica Pro. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}