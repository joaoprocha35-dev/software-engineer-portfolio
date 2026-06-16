import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.scss';

function Navbar() {
  const location = useLocation();
  
  // Inicializa o tema com base no localStorage ou assume 'dark' como padrão
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  // Sincroniza o tema diretamente no body do HTML para afetar Navbar, Páginas e Footer simultaneamente
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

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
    <nav className={`navbar navbar-expand-lg sticky-top py-2 ${styles.navContainer}`}>
      <div className="container">
        
        {/* Logo / Nome */}
        <Link className={`navbar-brand fw-bold fs-4 text-uppercase ${styles.logoLink}`} to="/">
          João <span className="text-primary fw-light">Pedro</span>
        </Link>

        {/* Grupo da Direita (Sininho + Alternador de Tema + Hambúrguer) */}
        <div className="d-flex align-items-center order-lg-last gap-2 pe-1">
          
          {/* BOTÃO ALTERNADOR DE TEMA (DARK / LIGHT) */}
          <button 
            onClick={toggleTheme} 
            className={styles.themeToggleBtn}
            aria-label="Alternar tema visual"
            title={theme === 'dark' ? 'Ativar Modo Claro' : 'Ativar Modo Escuro'}
          >
            {theme === 'dark' ? (
              <i className="bi bi-sun-fill text-warning"></i>
            ) : (
              <i className="bi bi-moon-stars-fill text-primary"></i>
            )}
          </button>

          {/* Dropdown do Sininho */}
          <div className="dropdown d-inline-block">
            <button 
              className={styles.notifBtn}
              type="button" 
              id="notifDropdown" 
              data-bs-toggle="dropdown" 
              aria-expanded="false"
            >
              <i className="bi bi-bell-fill"></i>
              <span className={styles.badgeCustom}>99+</span>
            </button>
            
            <ul className={`dropdown-menu dropdown-menu-end p-2 ${styles.dropdownMenuCustom}`} aria-labelledby="notifDropdown">
              <li className={`dropdown-header border-bottom pb-1 mb-1 ${styles.dropdownHeaderCustom}`}>Notificações</li>
              <li><span className="dropdown-item small rounded mb-1" style={{ cursor: 'pointer' }}>Nova mensagem recebida</span></li>
              <li><span className="dropdown-item small rounded" style={{ cursor: 'pointer' }}>Seu projeto foi visualizado</span></li>
            </ul>
          </div>
          
          {/* Botão Hambúrguer Mobile */}
          <button 
            className={`navbar-toggler border-0 p-2 shadow-none ${styles.hamburgerCustom}`} 
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