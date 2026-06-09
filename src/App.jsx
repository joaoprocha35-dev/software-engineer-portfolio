import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// Importações das páginas existentes
import Home from './pages/Home';
import Sobre from './pages/Sobre'; 
import Contact from './pages/Contact'; 
import Portfolio from './pages/Portfolio';

// Seu Layout Estrutural com <Outlet />
import MainLayout from './layouts/MainLayout';

/**
 * 💡 COMPONENTE MÁGICO: ScrollToTop
 * Ele observa a URL (pathname). Toda vez que você muda de página, 
 * ele joga a tela de volta para o topo suavemente (ou instantaneamente).
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Usa 'instant' para não dar aquele efeito de rolar a página toda
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      {/* Colocamos o ScrollToTop logo abaixo do BrowserRouter para ele interceptar todas as rotas */}
      <ScrollToTop />
      
      <Routes>
        {/* O MainLayout envelopa a aplicação mantendo a Navbar e Footer fixos */}
        <Route path="/" element={<MainLayout />}>
          
          {/* Rota da Página Inicial (localhost:5173/) */}
          <Route index element={<Home />} />
          
          {/* Rota da sua Linha do Tempo / Jornada (localhost:5173/sobre-mim) */}
          <Route path="sobre-mim" element={<Sobre />} />
          
          {/* Rota da Tela de Portfólio (localhost:5173/portfolio) */}
          <Route path="portfolio" element={<Portfolio />} />
          
          {/* Rota da Tela de Contato (localhost:5173/contact) */}
          <Route path="contact" element={<Contact />} />
          
          {/* Fallback inteligente */}
          <Route path="projetos" element={<Portfolio />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;