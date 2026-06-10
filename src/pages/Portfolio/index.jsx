import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Hook do React Router para navegação programática
import { projects } from '../../constants/projects';
import ProjectCarousel from './components/ProjectCarousel';
import ProjectModal from './components/ProjectModal';
import styles from './Portfolio.module.scss';

/**
 * Componente Portfolio (Página / Container Pai)
 * Atua como o cérebro e orquestrador da seção de portfólio.
 * Sua função principal é gerenciar o estado centralizado do projeto selecionado,
 * ditar quando o modal deve se abrir ou fechar, e controlar os fluxos de navegação 
 * do usuário entre as páginas da aplicação.
 */
const Portfolio = () => {
  // Estado para armazenar o objeto do projeto específico que foi clicado no carrossel
  const [selectedProject, setSelectedProject] = useState(null);
  
  // Estado booleano para controlar a montagem e os efeitos visuais de abertura do modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Inicializa o hook de navegação para permitir o redirecionamento sem recarregar a página
  const navigate = useNavigate();

  /**
   * FUNÇÃO DE CONTROLE: MANIPULADOR DE ABERTURA DO MODAL
   * Executa um reset limpo dos estados e utiliza um micro-timeout para garantir
   * que o React limpe a fila de renderização antes de injetar o novo projeto.
   * Também bloqueia a barra de rolagem da página ao fundo (Acessibilidade/UX).
   * * @param {Object} project - O objeto de dados do projeto vindo do componente filho.
   */
  const handleOpenModal = (project) => {
    setIsModalOpen(false);
    setSelectedProject(null);

    setTimeout(() => {
      setSelectedProject(project);
      setIsModalOpen(true);
      
      // Bloqueia o scroll do body para o usuário não rolar o fundo com o modal aberto
      document.body.style.overflow = 'hidden';
    }, 0);
  };

  /**
   * FUNÇÃO DE CONTROLE: MANIPULADOR DE FECHAMENTO DO MODAL
   * Desperta os estados de fechamento e devolve o controle de rolagem natural para a página.
   */
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null); 
    
    // Libera o scroll do body novamente
    document.body.style.overflow = 'unset';
  };

  /**
   * FUNÇÃO DE ROTEAMENTO: REDIRECIONAMENTO PROGRAMÁTICO
   * Intercepta o clique de chamada para ação (CTA) e despacha o usuário 
   * diretamente para a rota de contato mapeada no ecossistema SPA do App.
   */
  const handleGoToContact = () => {
    navigate('/contact');
  };

  return (
    <section className={styles.portfolioContainer}>
      
      {/* FUNÇÃO DO BLOCO: CABEÇALHO INSTITUCIONAL (.portfolioHeader)
          Introduz o objetivo da página de forma clara, contextualizando o uso do
          cubo 3D interativo e convidando o usuário à exploração tátil.
      */}
      <header className={styles.portfolioHeader}>
        <h2 className={styles.title}>Meus Projetos</h2>
        <p className={styles.subtitle}>
          Explore minhas criações recentes através do cubo interativo 3D. 
          Clique em qualquer face para ver os detalhes operacionais de cada aplicação.
        </p>
      </header>

      {/* FUNÇÃO DO EMBALADOR: WRAPPER DO CARROSSEL (.carouselWrapper)
          Isola a área do Swiper tridimensional. Sua função é receber via Props o 
          ponteiro da função `handleOpenModal`, permitindo que o clique ocorrido lá 
          dentro do carrossel suba o estado e modifique esta tela pai.
      */}
      <div className={styles.carouselWrapper}>
        <ProjectCarousel 
          projects={projects} 
          onProjectSelect={handleOpenModal} 
        />
      </div>

      {/* ==========================================================================
         FUNÇÃO DO CARD: CARD CTA ESTRATÉGICO / CALL TO ACTION (.ctaCard)
         Este card atua como o fechamento comercial da página. Sua função psicológica
         é aproveitar o engajamento gerado pelos projetos vistos acima para guiar 
         o visitante (recrutador ou cliente) a tomar uma ação imediata de contato,
         disparando o roteamento via botão.
         ========================================================================== */}
      <div className={styles.ctaCard}>
        <span className={styles.ctaBadge}>Disponível para novos desafios</span>
        
        <h3 className={styles.ctaTitle}>
          Gostou do que viu? Vamos construir algo <span>incrível juntos.</span>
        </h3>
        
        <p className={styles.ctaDescription}>
          Estou em busca de oportunidades onde posso aplicar minha stack técnica para resolver problemas reais e impactar produtos digitais. Que tal conversarmos sobre como posso agregar valor ao seu time?
        </p>

        {/* Botão interativo que consome a rota programática do React Router */}
        <button className={styles.ctaButton} onClick={handleGoToContact}>
          Enviar Mensagem
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* FUNÇÃO COMPONENTE: MODAL DE PROJETOS (ProjectModal)
          Montado de forma condicional internamente por meio de flags repassadas. 
          Consome os estados controlados pelos manipuladores acima.
      */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </section>
  );
};

export default Portfolio;