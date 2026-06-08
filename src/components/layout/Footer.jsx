function Footer() {
  // Capturo o ano atual dinamicamente em JavaScript para evitar manutenção manual futura.
  const currentYear = new Date().getFullYear();

  return (
    // 'mt-auto' garante que o rodapé seja empurrado para o final da página se o conteúdo for curto.
    // 'border-top' e 'border-secondary' mantêm a mesma linha sutil de separação que usamos na Navbar.
    <footer className="bg-dark text-muted py-4 mt-auto border-top border-secondary">
      <div className="container">
        <div className="row align-items-center justify-content-between g-3">
          
          {/* DIREITOS AUTORAIS */}
          <div className="col-12 col-md-auto text-center text-md-start">
            <p className="mb-0 small fw-medium">
              &copy; {currentYear} <span className="text-white fw-bold">João Pedro</span>. Todos os direitos reservados.
            </p>
          </div>

          {/* STATUS / TECH STACK INDICATOR */}
          <div className="col-12 col-md-auto text-center text-md-end">
            <p className="mb-0 small text-uppercase tracking-wider" style={{ letterSpacing: '1px', fontSize: '0.75rem' }}>
              Desenvolvido com <span className="text-primary fw-bold">React</span> &amp; <span className="text-primary fw-bold">Bootstrap 5</span> &amp; <span className="text-primary fw-bold">SCSS</span>
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer