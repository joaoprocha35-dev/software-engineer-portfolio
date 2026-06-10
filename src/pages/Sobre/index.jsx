import React from 'react';
import { journeyData } from '../../constants/journey';
import styles from './Sobre.module.scss';
import { Link } from 'react-router-dom';

/**
 * Componente Sobre
 * Renderiza a página institucional de histórico profissional e educacional.
 * Apresenta uma linha do tempo (Timeline) interativa com animações de rolagem (AOS),
 * ordenação alternada de colunas em telas cheias, normalização adaptativa para mobile
 * e um card de Call To Action (CTA) para direcionamento interno de tráfego.
 * * @returns {JSX.Element} Seção estruturada da jornada do usuário.
 */
function Sobre() {
  return (
    <section className={styles.sobreContainer}>
      <div className="container py-5">

        {/* ==========================================================================
           CABEÇALHO DA SEÇÃO
           Aplica o gatilho 'fade-down' do AOS para entrada suave do título da página.
           ========================================================================== */}
        <div className="text-center mb-5" data-aos="fade-down">
          <h2 className={styles.tituloPrincipal}>Minha Jornada</h2>
          <div className={styles.linhaDecorativa}></div>
        </div>

        {/* CONTAINER CENTRAL DA LINHA DO TEMPO */}
        <div className={styles.timeline}>

          {journeyData.map((item, index) => {
            // LÓGICA DE ALIGNMENT: Define se o item renderizará à esquerda (par) ou à direita (ímpar)
            const isEven = index % 2 === 0;
            // Identifica o primeiro elemento para tratamentos visuais de margem ou prioridade de carregamento
            const isFirst = index === 0;

            return (
              <div
                key={item.id}
                className={`${styles.timelineItem} ${isEven ? styles.esquerda : styles.direita}`}
              >
                {/* Marcador flutuante posicionado de forma absoluta sobre a linha guia central */}
                <div className={styles.timelineDot}></div>

                {/* GRID RESPONSIVO (ROW)
                   `g-4`: Define o espaçamento (gap) fixo entre as colunas.
                   `justify-content-between`: Empurra os blocos de texto e imagem para as extremidades.
                */}
                <div className={`row align-items-center justify-content-between g-4 mb-5 ${styles.contentRow}`}>

                  {/* ==========================================================================
                     BLOCO DE CONTEÚDO ESCRITO
                     `order-1` / `order-lg-2`: Inverte a ordem visual do texto no Desktop (telas ímpares), 
                     garantindo que no Mobile a leitura permaneça linear (Texto sempre antes da Imagem).
                     ========================================================================== */}
                  <div
                    className={`col-12 col-lg-5 ${isEven ? 'order-1' : 'order-1 order-lg-2'}`}
                    data-aos={isEven ? "fade-right" : "fade-left"}
                    data-aos-delay="100"
                  >
                    <div className={styles.textBlock}>
                      <span className={styles.stepNumber}>{item.numero}</span>
                      <h3 className={styles.itemTitulo}>{item.titulo}</h3>
                      <p className="text-secondary text-justify mb-0">
                        {item.descricao}
                      </p>

                      {/* Renderização dinâmica dos marcadores de competências (Tags) */}
                      <div className={`${styles.timelineTags} mt-3`}>
                        {item.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className={styles.tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* ==========================================================================
                     BLOCO DA IMAGEM CONTEXTUAL
                     Aplica efeitos espelhados de animação em relação ao bloco de texto correspondente.
                     ========================================================================== */}
                  <div
                    className={`col-12 col-lg-6 ${isEven ? 'order-2' : 'order-2 order-lg-1'} text-center d-flex justify-content-center mb-4 mb-lg-0`}
                    data-aos={isEven ? "fade-left" : "fade-right"}
                    data-aos-delay="200"
                  >
                    <div className={`${styles.imageWrapper} ${isFirst ? styles.firstImageWrapper : ''}`}>
                      <img
                        src={item.imagem}
                        alt={item.titulo}
                        className={styles.journeyImage}
                      />
                    </div>
                  </div>

                </div>
              </div>
            );
          })}

        </div>

        {/* ==========================================================================
           CARD CTA (CALL TO ACTION) STRATEGIC
           Posicionado ao final da leitura da linha do tempo para capturar o interesse 
           do recrutador. Utiliza o componente <Link> do react-router-dom para realizar 
           a transição instantânea de rota (SPA) rumo à página de projetos.
           ========================================================================== */}
        <div className="container mt-5 pt-4 d-flex justify-content-center" data-aos="zoom-in">
          <div className={styles.ctaCard}>
            {/* Camada absoluta para efeitos de iluminação e gradientes de fundo */}
            <div className={styles.ctaGlow}></div>
            
            <div className={styles.ctaContent}>
              <div className={styles.badgeTech}>Portfólio Ativo</div>
              <h3 className={styles.ctaTitulo}>Gostou da minha trajetória?</h3>
              <p className={styles.ctaTexto}>
                Veja como transformo essa evolução constante em linhas de código reais.
                Explore meus principais projetos e aplicações práticas.
              </p>

              {/* Roteamento declarativo seguro que evita o recarregamento total do navegador */}
              <Link to="/projetos" className={styles.ctaBotao}>
                <span>Ver Meus Projetos</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Sobre;