import React from 'react';
import { Outlet } from 'react-router-dom';

// Importação dos componentes estruturais fixos da aplicação.
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

/**
 * Componente MainLayout
 * Atua como o Master Page / Shell Template da aplicação.
 * Este componente estabelece a moldura visual global (Header e Footer fixos) 
 * e delimita a zona de renderização dinâmica para as sub-rotas.
 * * Utiliza o modelo Flexbox do Bootstrap para garantir o comportamento de "Sticky Footer"
 * (rodapé empurrado para a base da tela mesmo em páginas com pouco conteúdo).
 * * @returns {JSX.Element} Estrutura de layout global com injeção de rotas filhas.
 */
function MainLayout() {
  return (
    /* ENGENHARIA DE ARRANJO VISUAL (CONTAINER PAI):
      `d-flex flex-column`: Ativa o contexto Flexbox na vertical.
      `min-vh-100`: Garante que o layout ocupe no mínimo 100% da altura do Viewport da tela.
      `bg-dark text-white`: Define as cores base do tema Dark globalizada na aplicação.
    */
    <div className="d-flex flex-column min-vh-100 bg-dark text-white">
      
      {/* ==========================================================================
         1. CABEÇALHO GLOBAL (Navbar)
         Fixado de forma estática no topo. Persiste imutável durante a navegação interna.
         ========================================================================== */}
      <Navbar />

      {/* ==========================================================================
         2. MIOLO DINÂMICO DE RENDERIZAÇÃO (Main & Outlet)
         `flex-grow-1`: Instrução CSS Flexbox que força o container <main> a expandir e 
         absorver todo o espaço vertical residual disponível na tela.
         
         A tag `<Outlet />` age como o ponto de ancoragem e substituição do React Router.
         As views correspondentes às sub-rotas (Home, Sobre, Projetos, Contato) são 
         injetadas dinamicamente aqui de acordo com o mapeamento do roteador.
         ========================================================================== */}
      <main className="flex-grow-1">
        <Outlet />
      </main>

      {/* ==========================================================================
         3. RODAPÉ GLOBAL (Footer)
         Ancorado na base da interface. Graças ao `flex-grow-1` aplicado no elemento 
         superior, ele se mantém no fim da página sem flutuar no meio da tela.
         ========================================================================== */}
      <Footer />

    </div>
  );
}

export default MainLayout;