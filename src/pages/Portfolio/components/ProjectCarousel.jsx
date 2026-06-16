import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from '../Portfolio.module.scss';

const ProjectCarousel = ({ projects, onProjectSelect }) => {
  const touchStartPos = useRef({ x: 0, y: 0 });

  return (
    <div className={styles.cubeContainer}>
      <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCube, Pagination, Navigation, Autoplay]}
        className={styles.mySwiper}
        
        onTouchStart={(swiper, event) => {
          const touch = event.touches ? event.touches[0] : event;
          touchStartPos.current = { x: touch.clientX, y: touch.clientY };
        }}

        onTouchEnd={(swiper, event) => {
          const touch = event.changedTouches ? event.changedTouches[0] : event;
          
          const deltaX = Math.abs(touch.clientX - touchStartPos.current.x);
          const deltaY = Math.abs(touch.clientY - touchStartPos.current.y);

          if (deltaX < 10 && deltaY < 10) {
            const isControl = event.target.closest('.swiper-pagination') || 
                             event.target.closest('.swiper-button-next') || 
                             event.target.closest('.swiper-button-prev');

            if (!isControl) {
              const currentProject = projects[swiper.activeIndex];
              if (currentProject) {
                onProjectSelect(currentProject);
              }
            }
          }
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={`${project.id}-${index}`} className={styles.swiperSlide}>
            <div className={styles.cardContainer}>
              <img 
                src={project.coverImage} 
                alt={project.title} 
                className={styles.projectImage} 
              />
              
              <div className={styles.imageOverlay}>
                <span className={styles.categoryBadge}>{project.category}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.shortDescription}</p>
              </div>

              <div className={styles.clickHint}>
                <svg viewBox="0 0 24 24" className={styles.hintIcon} fill="currentColor">
                  <path d="M9 11.24V7.5a2.5 2.5 0 0 1 5 0v3.74c1.21-.81 2-2.18 2-3.74C16 4.46 13.54 2 10.5 2S5 4.46 5 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.08-.35-.11-.54-.11H13v-6a1 1 0 0 0-2 0v10.54l-3.32-.7c-.36-.08-.74.07-1 .36l-.68.68 4.71 4.72c.28.28.66.43 1.06.43h6.11c.72 0 1.34-.52 1.46-1.23l.84-5.02c.12-.7-.23-1.4-.84-1.7z"/>
                </svg>
                <span>Clique para Detalhes</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectCarousel;