import React from 'react';
import { journeyData } from '../../constants/journey';
import styles from './Sobre.module.scss';
import { Link } from 'react-router-dom';

/**
 * Componente Sobre
 * Renderiza a página institucional de histórico profissional e educacional
 * de forma adaptável para Light/Dark Mode com fluxo de contraste dinâmico.
 * Atualizado com suporte a grid de largura total e fundo azul padrão.
 */
function Sobre() {
  return (
    <section className={styles.sobreContainer}>
      <div className={styles.sobreContent}>

        {/* CABEÇALHO DA SEÇÃO */}
        <header className="text-center mb-5" data-aos="fade-down">
          <h2 className={styles.tituloPrincipal}>Minha Jornada</h2>
          <div className={styles.linhaDecorativa}></div>
        </header>

        {/* CONTAINER CENTRAL DA LINHA DO TEMPO */}
        <div className={styles.timeline}>

          {journeyData.map((item, index) => {
            const isEven = index % 2 === 0;
            const isFirst = index === 0;

            return (
              <div
                key={item.id}
                className={`${styles.timelineItem} ${isEven ? styles.esquerda : styles.direita}`}
              >
                {/* Marcador flutuante centralizado na linha guia */}
                <div className={styles.timelineDot}></div>

                {/* GRID RESPONSIVO */}
                <div className={`row align-items-center justify-content-between g-4 mb-5 ${styles.contentRow}`}>

                  {/* BLOCO DE CONTEÚDO ESCRITO */}
                  <div
                    className={`col-12 col-lg-5 ${isEven ? 'order-1' : 'order-1 order-lg-2'}`}
                    data-aos={isEven ? "fade-right" : "fade-left"}
                    data-aos-delay="100"
                  >
                    <div className={styles.textBlock}>
                      <span className={styles.stepNumber}>{item.numero}</span>
                      <h3 className={styles.itemTitulo}>{item.titulo}</h3>
                      <p className={`${styles.itemDescricao} text-justify mb-0`}>
                        {item.descricao}
                      </p>

                      {/* Renderização dinâmica de competências (Tags) */}
                      <div className={`${styles.timelineTags} mt-3`}>
                        {item.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className={styles.tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* BLOCO DA IMAGEM CONTEXTUAL */}
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

        {/* CARD CTA (CALL TO ACTION) STRATEGIC */}
        <div className="w-100 mt-5 pt-4 d-flex justify-content-center" data-aos="zoom-in">
          <div className={styles.ctaCard}>
            <div className={styles.ctaGlow}></div>
            
            <div className={styles.ctaContent}>
              <div className={styles.badgeTech}>Portfólio Ativo</div>
              <h3 className={styles.ctaTitulo}>Gostou da minha trajetória?</h3>
              <p className={styles.ctaTexto}>
                Veja como transformo essa evolução constante em linhas de código reais.
                Explore meus principais projetos e aplicações práticas.
              </p>

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