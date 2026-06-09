/**
 * Dados dos projetos para exibição no Portfólio.
 * Apontando corretamente para a pasta dedicada dentro de public/assets.
 */
export const projects = [
  {
    id: 1,
    title: "Site - Instituição Missionária",
    category: "Front End",
    shortDescription: "Site de uma instituição missionaria com foco em transição digital e profissionalização da presença online.",
    longDescription: "Desenvolvimento de plataforma digital para transição de presença social (Instagram) para ecossistema web próprio. O objetivo central foi a profissionalização da divulgação missionária, pavimentando o caminho para a implementação de um e-commerce em 2027.",
    techStack: ["React", "Vite", "BootStrap", "Sass", "HTML5", "CSS3"],
    coverImage: "/assets/portfolio/foto01.png",
    notebookImage: "/assets/portfolio/foto01.png",
    viewSourceUrl: "https://github.com/seu-usuario/repo-ecommerce",
    liveDemoUrl: "https://seu-ecommerce.demo.com"
  },
  {
    id: 2,
    title: "Projeto Identificador de Idade",
    category: "Front End",
    shortDescription: "Sistema de validação e identificação de idades.",
    longDescription: "O Desafio foi colocar em pratica os meus conhecimentos adqueridos no curso em video do guanabara de JavaScript, aprendendo as estruturas condicionais e operadores lógicos.",
    techStack: ["JavaScript", "HTML", "CSS"],
    coverImage: "/assets/portfolio/foto02.png",
    notebookImage: "/assets/portfolio/foto02.png",
    viewSourceUrl: "https://github.com/seu-usuario/repo-dashboard",
    liveDemoUrl: "https://seu-dashboard.demo.com"
  },
  {
    id: 3,
    title: "Tabuada Pro — Motor de Processamento Dinâmico de Tabuadas",
    category: "Front End",
    shortDescription: "Sistema de Tabuadas infinitas.",
    longDescription: "Uma ferramenta interativa voltada para automação de cálculos matemáticos elementares através de um motor de processamento infinito. O projeto valida cenários reais de interface e performance, lidando com a geração dinâmica de elementos na tela com base no comportamento do usuário. Utilizei boas práticas de manipulação de arrays e mapeamento de dados estruturados para garantir o cálculo em sub-segundos. A interface foi construída seguindo uma estética minimalista e tecnológica de alta fidelidade, implementando gatilhos de acessibilidade via teclado (como o envio através da tecla Enter) e estilização condicional para melhor escaneabilidade dos dados gerados, unindo o rigor lógico com uma experiência de uso limpa e fluida.",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    coverImage: "/assets/portfolio/foto03.png",
    notebookImage: "/assets/portfolio/foto03.png",
    viewSourceUrl: "https://github.com/seu-usuario/repo-saas",
    liveDemoUrl: "https://seu-saas.demo.com"
  },
  {
    id: 4, // Ajuste o ID conforme a sua sequência
    title: "Portfólio de Engenharia Core",
    category: "Front End / UX Architecture",
    shortDescription: "Ecossistema web responsivo construído em React, SASS e BootStrap,focado em storytelling técnico e conversão profissional.",
    longDescription: "Este portfólio foi arquitetado como uma aplicação SPA (Single Page Application) de alta fidelidade para centralizar e expor meus principais projetos de engenharia. Desenvolvido sobre o ecossistema do Vite para garantir um Hot Module Replacement (HMR) instantâneo e build otimizado, o projeto adota uma estrutura modular rígida. Utilizei CSS Modules com SASS para garantir o encapsulamento total dos estilos, eliminando vazamentos de escopo global. A experiência do usuário (UX) foi refinada através do gerenciamento inteligente de rotas com React Router (incluindo interceptadores de ciclo de vida para correção de scroll), animações aceleradas por hardware via AOS (Animate On Scroll) e componentes interativos tridimensionais integrados nativamente com a API de toque do Swiper.",
    techStack: ["React", "Vite", "SASS Modules", "React Router", "Bootstrap 5"],
    // Lembre-se de preencher as chaves abaixo com as variáveis ou caminhos das suas imagens/links:
    coverImage: "/assets/portfolio/foto04.png",
    notebookImage: "/assets/portfolio/foto04.png", // Esta imagem que você mandou (image_7a7504.jpg)
    viewSourceUrl: "https://github.com/joaoprocha35-dev/software-engineer-portfolio", // Seu link do repositório
    liveDemoUrl: "https://seu-dominio.com" // O link de onde ele está publicado (Vercel, Netlify, etc.)
  },
  {
    "id": 5,
    "title": "SaaS Premium de Gestão de Estoque",
    "category": "Full Stack",
    "shortDescription": "Painel analítico corporativo com controle de estoque em tempo real e integração nativa com planilhas.",
    "longDescription": "Uma aplicação robusta de controle de ativos corporativos, onde o principal foco foi a consistência de dados e automação de processos. Desenvolvemos um ecossistema completo que realiza operações de CRUD diretamente em um banco de dados relacional, renderiza dados estatísticos do volume de produtos instantaneamente através de um gráfico de barras dinâmico e fornece exportação inteligente de relatórios físicos, tratando e limpando planilhas do Excel em tempo real para evitar redundâncias.",
    "techStack": ["Python", "Flask", "MySQL", "PyMySQL", "OpenPyXL", "JavaScript", "Chart.js"],
    "coverImage": "/assets/portfolio/foto05.jpg",
    "notebookImage": "/assets/portfolio/foto05.jpg",
    "viewSourceUrl": "https://github.com/joaoprocha35-dev/SENAI-2026",
    "liveDemoUrl": "https://seu-devsocial.demo.com"
  },
  {
    "id": 6,
    "title": "Controle de Finanças Pessoais",
    "category": "Full Stack",
    "shortDescription": "Gerenciador financeiro dinâmico com cálculo de saldo em tempo real e animações nativas em cascata.",
    "longDescription": "Um sistema completo de gestão financeira desenvolvido para controle de receitas e despesas. O principal foco foi a consistência dos cálculos matemáticos de fluxo de caixa e o mapeamento relacional de dados. Implementamos operações completas de CRUD gerenciadas via ORM Flask-SQLAlchemy conectadas ao MySQL, integradas a uma interface front-end que utiliza JavaScript para criar efeitos interativos de digitação automática e transições visuais fluidas em cascata.",
    "techStack": ["Python", "Flask", "Flask-SQLAlchemy", "PyMySQL", "MySQL", "JavaScript", "CSS3"],
    "coverImage": "/assets/portfolio/foto06.jpg",
    "notebookImage": "/assets/portfolio/foto06.jpg",
    "viewSourceUrl": "https://github.com/joaoprocha35-dev/SENAI-2026",
    "liveDemoUrl": "https://seu-weather.demo.com"
  },
  {
    "id": 7,
    "title": "SGE - Sistema de Gestão de Eventos",
    "category": "Full Stack",
    "shortDescription": "Sistema web focado em agendamento de eventos com controle de sessões e proteção de rotas.",
    "longDescription": "Uma aplicação web estruturada para o gerenciamento seguro de eventos e controle de usuários. O principal foco do projeto foi a implementação de autenticação robusta no back-end. Desenvolvemos fluxos de login, registro de novos usuários e logout seguro integrados ao banco de dados relacional MySQL via PyMySQL, além de um sistema de proteção de rotas baseado nas sessões do Flask, garantindo que apenas usuários autenticados acessem o cadastro e a listagem cronológica dos eventos.",
    "techStack": ["Python", "Flask", "PyMySQL", "MySQL", "Jinja2", "HTML5", "CSS3"],
    "coverImage": "/assets/portfolio/foto07.jpg",
    "notebookImage": "/assets/portfolio/foto07.jpg",
    "viewSourceUrl": "https://github.com/joaoprocha35-dev/SENAI-2026",
    "liveDemoUrl": "https://seu-gateway.demo.com"
  },
  {
    "id": 8,
    "title": "Sistema de Gestão de Alunos",
    "category": "Full Stack",
    "shortDescription": "Sistema CRUD dinâmico para cadastramento, monitoramento e controle de registros escolares.",
    "longDescription": "Uma aplicação web voltada para a administração escolar e controle de matrículas. O foco principal do desenvolvimento foi a consolidação de operações CRUD puras e de alta performance. Desenvolvemos uma arquitetura integrada onde o back-end em Python e Flask processa as requisições do front-end em HTML5 e CSS3, realizando inserções, edições, leituras e exclusões persistidas de forma direta e segura no banco de dados relacional MySQL.",
    "techStack": ["Python", "Flask", "MySQL", "PyMySQL", "Jinja2", "HTML5", "CSS3"],
    "coverImage": "/assets/portfolio/foto08.jpg",
    "notebookImage": "/assets/portfolio/foto08.jpg",
    "viewSourceUrl": "https://github.com/joaoprocha35-dev/SENAI-2026",
    "liveDemoUrl": "https://seu-finance.demo.com"
  },
  {
    id: 9,
    title: "Plataforma de Agendamentos Online",
    category: "Full Stack",
    shortDescription: "Sistema de reservas para prestadores de serviço com calendário interativo.",
    longDescription: "O grande desafio deste projeto foi sincronizar fusos horários e evitar conflitos de horários duplicados na agenda de profissionais. Construímos uma interface de calendário customizada que atualiza dinamicamente as lacunas disponíveis de acordo com a jornada configurada pelo prestador.",
    techStack: ["React", "Vite", "date-fns", "Sass", "REST API"],
    coverImage: "/assets/portfolio/foto09.jpg",
    notebookImage: "/assets/portfolio/foto09.jpg",
    viewSourceUrl: "https://github.com/seu-usuario/booking-system",
    liveDemoUrl: "https://seu-booking.demo.com"
  },
  {
    id: 10,
    title: "Banco de Talentos Inteligente",
    category: "Front End",
    shortDescription: "Interface de busca e filtragem de currículos baseada em competências (skills).",
    longDescription: "Uma ferramenta voltada para times de RH internos. Criamos um sistema de tags dinâmicas e buscas combinadas de alta performance que filtram centenas de registros locais de forma instantânea. O layout foca em legibilidade, permitindo expandir perfis e favoritar candidatos diretamente na listagem principal.",
    techStack: ["React", "Vite", "Sass Modules", "Context API", "Lucide Icons"],
    coverImage: "/assets/portfolio/foto10.jpg",
    notebookImage: "/assets/portfolio/foto10.jpg",
    viewSourceUrl: "https://github.com/seu-usuario/talent-pool",
    liveDemoUrl: "https://seu-talent.demo.com"
  }
];