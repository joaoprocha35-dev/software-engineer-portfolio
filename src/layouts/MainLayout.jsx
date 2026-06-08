import { Outlet } from 'react-router-dom'

// Importação dos componentes fixos do layout base do meu portfólio.
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

function MainLayout() {
  return (
    // Crio um container flexível que ocupa no mínimo 100% da altura da tela.
    // Uso a classe nativa do Bootstrap 'bg-dark' que configuramos nas variáveis para aplicar o fundo escuro.
    <div className="d-flex flex-column min-vh-100 bg-dark text-white">
      
      {/* 1. CABEÇALHO FIXO: Minha barra de navegação superior */}
      <Navbar />

      {/* 2. CONTEÚDO DINÂMICO (O MIOLO): 
          A tag <Outlet /> funciona como um "placeholder" ou ponto de injeção.
          Quando a URL for "/", o React Router vai ler o meu App.jsx, ver que a Home é a rota ativa,
          e injetar o componente <Home /> exatamente aqui dentro desse 'main'.
      */}
      <main className="flex-grow-1">
        <Outlet />
      </main>

      {/* 3. RODAPÉ FIXO: As informações de copyright e links finais no rodapé */}
      <Footer />

    </div>
  )
}

export default MainLayout