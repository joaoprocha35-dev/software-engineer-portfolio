// Importação limpa dos seus assets reais de imagem
import aboutGraduation from '../assets/about-graduation.jpg';
import journeyStep2 from '../assets/journey-step2.jpg';
import aboutProfessional from '../assets/about-professional.jpg';

export const journeyData = [
  {
    id: 1,
    numero: "01",
    titulo: 'A Curiosidade no Celular',
    descricao: 'Olhar para trás e ver a conclusão do Ensino Médio é lembrar de onde a base de tudo começou. Assim que peguei esse diploma, soube que era hora de traçar caminhos mais altos. Decidi usar toda essa energia e dedicação para iniciar a minha jornada no desenvolvimento, onde cada novo aprendizado me conecta diretamente com o profissional de tecnologia que estou me tornando. O fim da escola foi, na verdade, o ponto de partida para o meu futuro.',
    tags: ['Autodidatismo', 'Curiosidade', 'Determinação'],
    imagem: aboutGraduation
  },
  {
    id: 2,
    numero: "02",
    titulo: 'Do Zero ao Primeiro Código',
    descricao: 'Do zero ao código. Quando entrei no curso técnico do SENAI, enviar um e-mail parecia um desafio. Mas a falta de base virou combustível. Cada aula era uma oportunidade de absorver lógica, arquitetura e descobrir que eu tinha a capacidade de construir qualquer interface que minha mente imaginasse.',
    tags: ['SENAI', 'Aprendizado', 'Evolução'],
    imagem: journeyStep2
  },
  {
    id: 3,
    numero: "03",
    titulo: 'Preparado para o Mercado',
    descricao: 'Hoje, o foco é a evolução constante. O garoto que antes só tinha um celular agora avança diariamente no desenvolvimento web, dominando tecnologias como HTML, CSS, JavaScript, Bootstrap, React e SCSS, sempre alinhadas a conceitos refinados de UI e UX. A cada novo projeto, o objetivo é entregar interfaces modernas, acessíveis e centradas nas necessidades do usuário. Sigo evoluindo para superar os desafios do mercado de tecnologia e, mais para a frente, pretendo expandir meus horizontes explorando o Tailwind CSS e o Node.js no back-end, consolidando de vez minha presença no ecossistema Full-Stack.',
    tags: ['Profissional', 'Full-Stack', 'Excelência'],
    imagem: aboutProfessional
  }
];