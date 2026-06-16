import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../../constants/projects';
import ProjectCarousel from './components/ProjectCarousel';
import ProjectModal from './components/ProjectModal';
import styles from './Portfolio.module.scss';

/**
 * Componente Portfolio (Página / Container Pai)
 * Gerencia o estado centralizado do projeto selecionado e o controle do modal,
 * fornecendo compatibilidade e transição fluida entre Light/Dark mode.
 */
const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpenModal = (project) => {
    setIsModalOpen(false);
    setSelectedProject(null);

    setTimeout(() => {
      setSelectedProject(project);
      setIsModalOpen(true);
      document.body.style.overflow = 'hidden';
    }, 0);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null); 
    document.body.style.overflow = 'unset';
  };

  const handleGoToContact = () => {
    navigate('/contact');
  };

  return (
    <section className={styles.portfolioContainer}>
      <div className={styles.portfolioContent}>
        
        {/* CABEÇALHO INSTITUCIONAL */}
        <header className={styles.portfolioHeader}>
          <h2 className={styles.title}>Meus Projetos</h2>
          <p className={styles.subtitle}>
            Explore minhas criações recentes através do cubo interativo 3D. 
            Clique em qualquer face para ver os detalhes operacionais de cada aplicação.
          </p>
        </header>

        {/* WRAPPER DO CARROSSEL */}
        <div className={styles.carouselWrapper}>
          <ProjectCarousel 
            projects={projects} 
            onProjectSelect={handleOpenModal} 
          />
        </div>

        {/* CARD CTA ESTRATÉGICO */}
        <div className={styles.ctaCard}>
          <span className={styles.ctaBadge}>Disponível para novos desafios</span>
          
          <h3 className={styles.ctaTitle}>
            Gostou do que viu? Vamos construir algo <span>incrível juntos.</span>
          </h3>
          
          <p className={styles.ctaDescription}>
            Estou em busca de oportunidades onde posso aplicar minha stack técnica para resolver problemas reais e impactar produtos digitais. Que tal conversarmos sobre como posso agregar valor ao seu time?
          </p>

          <button className={styles.ctaButton} onClick={handleGoToContact}>
            Enviar Mensagem
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>

      {/* MODAL DE PROJETOS */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </section>
  );
};

export default Portfolio;