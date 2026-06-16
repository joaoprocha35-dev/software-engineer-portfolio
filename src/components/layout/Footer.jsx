import React from 'react';
import styles from './Footer.module.scss'; // Criado para o controle fino de tema

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-4 mt-auto ${styles.footerCustom}`}>
      <div className="container">
        <div className="row align-items-center justify-content-between g-3">
          
          {/* DIREITOS AUTORAIS */}
          <div className="col-12 col-md-auto text-center text-md-start">
            <p className="mb-0 small fw-medium">
              &copy; {currentYear} <span className={styles.footerBrand}>João Pedro</span>. Todos os direitos reservados.
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
  );
}

export default Footer;