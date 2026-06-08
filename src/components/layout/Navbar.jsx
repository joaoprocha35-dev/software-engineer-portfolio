import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.scss';

function Navbar() {
  const location = useLocation();

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js').then((bootstrap) => {
      const menuToggle = document.getElementById('navbarMobileMenu');
      if (menuToggle) {
        const bsCollapse = bootstrap.Collapse.getInstance(menuToggle) || new bootstrap.Collapse(menuToggle, { toggle: false });
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach((l) => {
          l.addEventListener('click', () => { if(window.innerWidth < 992) { bsCollapse.hide(); } });
        });
      }
    });
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark sticky-top py-2 ${styles.navContainer}`}>
      <div className="container">
        
        {/* Logo / Nome */}
        <Link className="navbar-brand fw-bold fs-4 text-white text-uppercase" to="/">
          João <span className="text-primary fw-light">Pedro</span>
        </Link>

        {/* Grupo da Direita com espaçamento (gap) perfeito para não colar no Hambúrguer */}
        <div className="d-flex align-items-center order-lg-last gap-3 pe-1">
          
          {/* Dropdown do Sininho */}
          <div className="dropdown d-inline-block">
            <button 
              className={styles.notifBtn}
              type="button" 
              id="notifDropdown" 
              data-bs-toggle="dropdown" 
              aria-expanded="false"
            >
              {/* Ícone forçado para Branco via CSS Module */}
              <i className="bi bi-bell-fill"></i>
              
              {/* O balão 99+ Vermelho perfeitamente posicionado sobre o sino */}
              <span className={styles.badgeCustom}>
                99+
              </span>
            </button>
            
            <ul className={`dropdown-menu dropdown-menu-end p-2 ${styles.dropdownMenuCustom}`} aria-labelledby="notifDropdown">
              <li className="dropdown-header text-muted border-bottom border-secondary pb-1 mb-1">Notificações</li>
              <li><span className="dropdown-item small rounded mb-1" style={{ cursor: 'pointer' }}>Nova mensagem recebida</span></li>
              <li><span className="dropdown-item small rounded" style={{ cursor: 'pointer' }}>Seu projeto foi visualizado</span></li>
            </ul>
          </div>
          
          {/* Botão Hambúrguer Mobile */}
          <button 
            className="navbar-toggler border-0 p-2 shadow-none" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarMobileMenu" 
            aria-controls="navbarMobileMenu" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* Links das Páginas */}
        <div className="collapse navbar-collapse" id="navbarMobileMenu">
          <ul className="navbar-nav ms-auto gap-2 mt-3 mt-lg-0 me-2">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''} ${styles.navLinkCustom}`} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/sobre-mim' ? 'active' : ''} ${styles.navLinkCustom}`} to="/sobre-mim">Sobre-mim</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/portfolio' ? 'active' : ''} ${styles.navLinkCustom}`} to="/portfolio">Portfólio</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/contact' ? 'active' : ''} ${styles.navLinkCustom}`} to="/contact">Contato</Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;