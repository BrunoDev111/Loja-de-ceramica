export default function Contato() {
  return (
    <section className="contato">
      <div className="container">
        <h2 className="section-title">Fale Conosco</h2>
        <div className="contato-grid">

          <div className="contato-info">
            <h3>Informações de Contato</h3>
            <ul>
              <li>📧 contato@ceramicapro.com.br</li>
              <li>📞 (11) 9999-9999</li>
              <li>📍 São Paulo, SP</li>
              <li>🕐 Seg a Sex: 9h às 18h</li>
            </ul>
          </div>

          <div className="contato-form">
            <div className="form-group">
              <label>Nome</label>
              <input type="text" placeholder="Seu nome completo" />
            </div>
            <div className="form-group">
              <label>E-mail</label>
              <input type="email" placeholder="seu@email.com" />
            </div>
            <div className="form-group">
              <label>Mensagem</label>
              <textarea rows={5} placeholder="Como podemos ajudar?" />
            </div>
            <button className="btn btn-primary">Enviar Mensagem</button>
          </div>

        </div>
      </div>
    </section>
  )
}