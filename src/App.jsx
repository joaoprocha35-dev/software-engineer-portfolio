import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importações das páginas que já estão prontas e estruturadas
import Home from './pages/Home';
import Sobre from './pages/Sobre'; 
import Contact from './pages/Contact'; // Nossa nova tela de contato com Glassmorphism

// Seu Layout Estrutural com <Outlet />
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* O MainLayout envelopa a aplicação mantendo a Navbar e Footer fixos */}
        <Route path="/" element={<MainLayout />}>
          
          {/* Rota da Página Inicial (localhost:5173/) */}
          <Route index element={<Home />} />
          
          {/* Rota da sua Linha do Tempo / Jornada (localhost:5173/sobre-mim) */}
          <Route path="sobre-mim" element={<Sobre />} />
          
          {/* Rota da Tela de Contato (localhost:5173/contact) */}
          <Route path="contact" element={<Contact />} />
          
          {/* Rota temporária de segurança: se clicarem em projetos na Navbar, */}
          {/* ele joga para a Home para evitar a tela em branco/erro até criarmos a página */}
          <Route path="projetos" element={<Home />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;