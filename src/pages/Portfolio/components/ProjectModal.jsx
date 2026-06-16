import styles from '../Portfolio.module.scss';

/**
 * Componente de Modal que simula um Notebook físico com suporte a temas.
 */
const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        
        {/* Botão de Fechar */}
        <button className={styles.closeButton} onClick={onClose} aria-label="Fechar modal">
          &times;
        </button>

        {/* ESTRUTURA DO NOTEBOOK CSS */}
        <div className={styles.notebookContainer}>
          <div className={styles.notebookScreen}>
            <div className={styles.screenContent}>
              <img src={project.notebookImage} alt={project.title} />
            </div>
            <div className={styles.screenBezel}></div>
          </div>
          <div className={styles.notebookBase}>
            <div className={styles.trackpad}></div>
          </div>
        </div>

        {/* INFORMAÇÕES DO PROJETO */}
        <div className={styles.projectInfo}>
          <div className={styles.headerInfo}>
            <span className={styles.category}>{project.category}</span>
            <h2 className={styles.title}>{project.title}</h2>
          </div>

          <div className={styles.details}>
            <h3>Sobre o Projeto</h3>
            <p>{project.longDescription}</p>
          </div>

          <div className={styles.techSection}>
            <h3>Tecnologias Utilizadas</h3>
            <div className={styles.badgeContainer}>
              {project.techStack?.map((tech, index) => (
                <span key={index} className={styles.techBadge}>{tech}</span>
              ))}
            </div>
          </div>

          <div className={styles.actionButtons}>
            <a 
              href={project.viewSourceUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.btnSecondary}
            >
              Ver Código (GitHub)
            </a>
            
            {project.liveDemoUrl && project.liveDemoUrl.trim() !== "" && (
              <a 
                href={project.liveDemoUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.btnPrimary}
              >
                Acessar Live Demo
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectModal;