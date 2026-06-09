import React from 'react';
import { Link } from 'react-router-dom'; // Importado para fazer a navegação do card teaser
import profileImg from '../../assets/profile.jpg';
import styles from './Home.module.scss';

function Home() {
  return (
    <div className="container pt-5 mt-4 mt-lg-0 py-5">
      <div className="row g-4">
        
        {/* SIDEBAR DO PERFIL */}
        <aside className="col-lg-4" data-aos="fade-right">
          <div className={`card p-4 text-center ${styles.profileCard}`}>
            <div className={styles.avatarWrapper}>
              <img src={profileImg} alt="João Pedro" className="img-fluid" />
            </div>

            <div className="card-body p-0">
              {/* Box de Digitação */}
              <div className="mb-2" style={{ minHeight: '30px' }}>
                <span className={styles.typewriter}>Engenheiro de Software & Analista</span>
              </div>
              
              <div className="mt-3">
                <p className={styles.bioText}>
                  Acredito que a tecnologia só faz sentido quando serve para diminuir distâncias entre o problema e a solução humana. Meu foco é construir arquiteturas que não apenas funcionem, mas que facilitem a vida de quem as opera.
                </p>
                <p className="text-muted small">
                  Em constante evolução na Arquitetura de Sistemas, buscando o equilíbrio entre código limpo e regras de negócio eficientes.
                </p>
              </div>
              
              <div className={`d-flex justify-content-center gap-4 mb-4 py-2 ${styles.statsContainer}`}>
                <div>
                  <h5 className="text-white fw-bold mb-0">2+</h5>
                  <span className="text-muted text-uppercase fw-bold">Anos</span>
                </div>
                <div className={styles.divider}></div>
                <div>
                  <h5 className="text-white fw-bold mb-0">10</h5>
                  <span className="text-muted text-uppercase fw-bold">Projetos</span>
                </div>
              </div>

              {/* Redes Sociais do Perfil */}
              <div className="d-flex justify-content-center gap-3">
                <a href="https://www.linkedin.com/in/delmiro-rocha-b668043b0/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="https://github.com/joaoprocha35-dev" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="GitHub">
                  <i className="bi bi-github"></i>
                </a>
                <a href="https://wa.me/5514998813787?text=Olá%20João%20Pedro!%20Vim%20pelo%20seu%20portfólio." target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="WhatsApp">
                  <i className="bi bi-whatsapp"></i>
                </a>
                <a href="https://www.instagram.com/ZX.rochaa" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>

            </div>
          </div>
        </aside>

        {/* CONTEÚDO PRINCIPAL */}
        <main className="col-lg-8" data-aos="fade-left">
          
          {/* EXPERIÊNCIA PROFISSIONAL */}
          <section className={`card p-4 mb-4 ${styles.contentCard}`}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className={styles.sectionTitle}>Experiência Profissional</span>
              <button 
                className={`accordion-button ${styles.sectionToggleBtn}`} 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#collapseExp"
                aria-expanded="true"
              ></button>
            </div>
            
            <div className="collapse show" id="collapseExp">
              <div className="pt-2">
                <div className="mb-4">
                  <h4 className="text-white fw-bold mb-1 fs-5 d-flex align-items-center">
                    <i className="bi bi-circle-fill text-primary me-2" style={{ fontSize: '0.65rem' }}></i> 
                    Site - Instituição Missionária
                  </h4>
                  <p className="text-muted small ms-4">
                    Desenvolvimento de plataforma digital para transição de presença social (Instagram) para ecossistema web próprio. O objetivo central foi a profissionalização da divulgação missionária, pavimentando o caminho para a implementação de um e-commerce em 2027.
                  </p>
                </div>
                <div>
                  <h4 className="text-white fw-bold mb-1 fs-5 d-flex align-items-center">
                    <i className="bi bi-circle-fill text-primary me-2" style={{ fontSize: '0.65rem' }}></i>
                    Automação de Confecção (TCC)
                  </h4>
                  <p className="text-muted small ms-4">
                    Sistema focado na digitalização de processos analógicos. Substituímos o controle em papel por uma gestão automatizada de estoque e pedidos, visando a redução de erros humanos e otimização da logística têxtil.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* HABILIDADES */}
          <section className={`card p-4 mb-4 ${styles.contentCard}`}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className={styles.sectionTitle}>Habilidades</span>
              <button 
                className={`accordion-button ${styles.sectionToggleBtn}`} 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#collapseSkills"
                aria-expanded="true"
              ></button>
            </div>

            <div className="collapse show" id="collapseSkills">
              <div className="row pt-2 g-3">
                <div className="col-md-6 border-end border-secondary">
                  <h5 className={styles.skillSubtitle}>Soft Skills</h5>
                  <ul className="text-muted small list-unstyled ms-2">
                    <li className="mb-2"><i className="bi bi-check2-circle text-primary me-2"></i>Capacidade em trabalhar em equipe</li>
                    <li className="mb-2"><i className="bi bi-check2-circle text-primary me-2"></i>Comunicativo</li>
                    <li className="mb-2"><i className="bi bi-check2-circle text-primary me-2"></i>Escuta ativa</li>
                    <li className="mb-0"><i className="bi bi-check2-circle text-primary me-2"></i>Tomada de decisão</li>
                  </ul>
                </div>
                <div className="col-md-6 ps-md-4">
                  <h5 className={styles.skillSubtitle}>Hard Skills</h5>
                  <p className="text-white small mb-2 fw-medium">Linguagens & Tecnologias:</p>
                  <p className="text-muted small mb-3">HTML, CSS, JavaScript, React, Bootstrap</p>
                  
                  <p className="text-white small mb-1 fw-medium">Competências Adicionais:</p>
                  <p className="text-muted small mb-1">• Prototipagem de Interfaces (Nível Intermediário)</p>
                  <p className="text-muted small mb-1">• Engenharia de Prompts (Intermediário)</p>
                  <p className="text-muted small mb-1">• MySQL Workbench (Fundamentos)</p>
                  <p className="text-muted small mb-0">• Regras de Negócio (Nível Intermediário)</p>
                </div>
              </div>
            </div>
          </section>

          {/* FORMAÇÃO ACADÊMICA E TÉCNICA */}
          <section className={`card p-4 mb-4 ${styles.contentCard}`}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className={styles.sectionTitle}>Formação Acadêmica & Técnica</span>
              <button 
                className={`accordion-button ${styles.sectionToggleBtn}`} 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#collapseEdu"
                aria-expanded="true"
              ></button>
            </div>

            <div className="collapse show" id="collapseEdu">
              <div className="pt-2">
                <div className={`${styles.educationBox} mb-3`}>
                  <div>
                    <h4 className="text-white fw-bold mb-1 fs-6">Engenharia de Software (Bacharelado)</h4>
                    <p className="text-muted small mb-0">Unifatecie - EAD</p>
                  </div>
                  <span className={styles.dateBadge}>2026 - 2030 (Em formação)</span>
                </div>
                <div className={styles.educationBox}>
                  <div>
                    <h4 className="text-white fw-bold mb-1 fs-6">Análise e Desenvolvimento de Sistemas (SENAI)</h4>
                    <p className="text-muted small mb-0">Formação Tecnólogo</p>
                  </div>
                  <span className={styles.dateBadge}>2025 - 2026 (Em formação)</span>
                </div>
              </div>
            </div>
          </section>

          {/* GATILHO DE CURIOSIDADE (NOVO) */}
          <section className={`card p-4 ${styles.teaserCard}`}>
            <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-4">
              <div>
                <h4 className="text-white fw-bold mb-2 fs-5">
                  <i className="bi bi-rocket-takeoff text-primary me-2"></i>
                  Além das linhas de código...
                </h4>
                <p className="text-muted small mb-0">
                  Todo projeto tem um propósito, mas quem está por trás das soluções? Conheça minha trajetória, meus valores e o que me motiva a transformar problemas complexos em arquiteturas eficientes.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link to="/sobre-mim" className={`btn btn-outline-primary fw-bold px-4 py-2 ${styles.teaserBtn}`}>
                  Minha História <i className="bi bi-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}

export default Home;