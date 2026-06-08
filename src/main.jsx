import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Importação da biblioteca de animações AOS (Animate On Scroll) e seus estilos estruturais.
import AOS from 'aos'
import 'aos/dist/aos.css'

// IMPORTAÇÃO DO MOTOR JS DO BOOTSTRAP
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Aqui eu importo o arquivo central de estilos (SCSS). 
// Centralizando isso no main.jsx, garanto que todas as configurações do Bootstrap 
// e minhas variáveis personalizadas fiquem disponíveis globalmente desde o primeiro milissegundo da aplicação.
import './styles/main.scss'

// INICIALIZAÇÃO DO AOS: Ativo o motor de animações globalmente.
// Configuro uma duração padrão de 800ms para todas as animações e desabilito o 'once: false' 
// para que elas aconteçam de forma fluida toda vez que o elemento entrar na tela.
AOS.init({
  duration: 800,
  once: false,
});

// Inicializo o nó raiz do React usando a API estável e moderna do React 18 (createRoot).
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Envelopo o app no StrictMode para capturar renderizações duplas e warnings de APIs depreciadas em ambiente de desenvolvimento */}
    <App />
  </React.StrictMode>,
)