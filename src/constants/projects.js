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
    viewSourceUrl: "https://github.com/joaoprocha35-dev/site-iron-dome-missions.git",
    liveDemoUrl: "https://seu-ecommerce.demo.com" // 🌟 Único ativo que exibirá o botão
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
    viewSourceUrl: "https://github.com/joaoprocha35-dev/frontend-expert-journey.git",
    liveDemoUrl: ""
  },
  {
    id: 3,
    title: "Ciclo do Dia",
    category: "JavaScript",
    shortDescription: "Projeto que altera mensagens, imagens e cores da interface de acordo com o horário informado pelo usuário",
    longDescription: "O projeto Ciclo do Dia utiliza JavaScript para identificar o horário digitado pelo usuário e modificar dinamicamente o conteúdo da página. Dependendo da hora informada, a aplicação exibe uma saudação adequada (Bom Dia, Boa Tarde ou Boa Noite), altera a imagem apresentada e modifica o estilo visual do container através da troca de classes CSS. O objetivo é praticar manipulação do DOM, estruturas condicionais, eventos e interação com o usuário.",
    techStack: ["HTML5", "CSS3", "JavaScript","DOM",
    "Eventos",
    "Condicionais"],
    coverImage: "/assets/portfolio/foto03.png",
    notebookImage: "/assets/portfolio/foto03.png",
    viewSourceUrl: "https://github.com/joaoprocha35-dev/frontend-expert-journey.git",
    liveDemoUrl: ""
  },
  {
    id: 4,
    title: "Portfólio de Engenharia Core",
    category: "Front End / UX Architecture",
    shortDescription: "Ecossistema web responsivo construído em React, SASS e BootStrap,focado em storytelling técnico e conversão profissional.",
    longDescription: "Este portfólio foi arquitetado como uma aplicação SPA (Single Page Application) de alta fidelidade para centralizar e expor meus principais projetos de engenharia. Desenvolvido sobre o ecossistema do Vite para garantir um Hot Module Replacement (HMR) instantâneo e build otimizado, o projeto adota uma estrutura modular rígida. Utilizei CSS Modules com SASS para garantir o encapsulamento total dos estilos, eliminando vazamentos de escopo global. A experiência do usuário (UX) foi refinada através do gerenciamento inteligente de rotas com React Router (incluindo interceptadores de ciclo de vida para correção de scroll), animações aceleradas por hardware via AOS (Animate On Scroll) e componentes interativos tridimensionais integrados nativamente com a API de toque do Swiper.",
    techStack: ["React", "Vite", "SASS Modules", "React Router", "Bootstrap 5"],
    coverImage: "/assets/portfolio/foto04.png",
    notebookImage: "/assets/portfolio/foto04.png",
    viewSourceUrl: "https://github.com/joaoprocha35-dev/software-engineer-portfolio",
    liveDemoUrl: ""
  },
  {
    id: 5,
    title: "SaaS Premium de Gestão de Estoque",
    category: "Full Stack",
    shortDescription: "Painel analítico corporativo com controle de estoque em tempo real e integração nativa com planilhas.",
    longDescription: "Uma aplicação robusta de controle de ativos corporativos, onde o principal foco foi a consistência de dados e automação de processos. Desenvolvemos um ecossistema completo que realiza operações de CRUD diretamente em um banco de dados relacional, renderiza dados estatísticos do volume de produtos instantaneamente através de um gráfico de barras dinâmico e fornece exportação inteligente de relatórios físicos, tratando e limpando planilhas do Excel em tempo real para evitar redundâncias.",
    techStack: ["Python", "Flask", "MySQL", "PyMySQL", "OpenPyXL", "JavaScript", "Chart.js"],
    coverImage: "/assets/portfolio/foto05.png",
    notebookImage: "/assets/portfolio/foto05.png",
    viewSourceUrl: "https://github.com/joaoprocha35-dev/SENAI-2026",
    liveDemoUrl: ""
  },
  {
    id: 6,
    title: "Controle de Finanças Pessoais",
    category: "Full Stack",
    shortDescription: "Gerenciador financeiro dinâmico com cálculo de saldo em tempo real e animações nativas em cascata.",
    longDescription: "Um sistema completo de gestão financeira desenvolvido para controle de receitas e despesas. O principal foco foi a consistência dos cálculos matemáticos de fluxo de caixa e o mapeamento relacional de dados. Implementamos operações completas de CRUD gerenciadas via ORM Flask-SQLAlchemy conectadas ao MySQL, integradas a uma interface front-end que utiliza JavaScript para criar efeitos interativos de digitação automática e transições visuais fluidas em cascata.",
    techStack: ["Python", "Flask", "Flask-SQLAlchemy", "PyMySQL", "MySQL", "JavaScript", "CSS3"],
    coverImage: "/assets/portfolio/foto06.png",
    notebookImage: "/assets/portfolio/foto06.png",
    viewSourceUrl: "https://github.com/joaoprocha35-dev/SENAI-2026",
    liveDemoUrl: ""
  },
  {
    id: 7,
    title: "SGE - Sistema de Gestão de Eventos",
    category: "Full Stack",
    shortDescription: "Sistema web focado em agendamento de eventos com controle de sessões e proteção de rotas.",
    longDescription: "Uma aplicação web estruturada para o gerenciamento seguro de eventos e controle de usuários. O principal foco do projeto foi a implementação de autenticação robusta no back-end. Desenvolvemos fluxos de login, registro de novos usuários e logout seguro integrados ao banco de dados relacional MySQL via PyMySQL, além de um sistema de proteção de rotas baseado nas sessões do Flask, garantindo que apenas usuários autenticados acessem o cadastro e a listagem cronológica dos eventos.",
    techStack: ["Python", "Flask", "PyMySQL", "MySQL", "Jinja2", "HTML5", "CSS3"],
    coverImage: "/assets/portfolio/foto08.png",
    notebookImage: "/assets/portfolio/foto08.png",
    viewSourceUrl: "https://github.com/joaoprocha35-dev/SENAI-2026",
    liveDemoUrl: ""
  },
  {
    id: 8,
    title: "Sistema de Gestão de Usuários",
    category: "Full Stack",
    shortDescription: "Aplicação web dinâmica para o controle, cadastro e gerenciamento completo de credenciais de usuários.",
    longDescription: "Uma aplicação web estruturada com foco na administração de perfis e segurança de acesso. Desenvolvida sob o padrão arquitetural MVC simplificado, o ecossistema utiliza o framework Flask no back-end para processar requisições e gerenciar o fluxo de dados. O front-end dinâmico consome templates renderizados via Jinja2 integrado ao HTML5 e CSS3. O projeto executa todas as operações fundamentais de um CRUD (Create, Read, Update, Delete) — validando a unicidade de registros por CPF, permitindo a edição assistida e a exclusão reativa de perfis, com a persistência de dados estruturada localmente em arquivos JSON nativos.",
    techStack: ["Python", "Flask", "JSON", "Jinja2", "HTML5", "CSS3"],
    coverImage: "/assets/portfolio/foto07.png",
    notebookImage: "/assets/portfolio/foto07.png",
    viewSourceUrl: "https://github.com/joaoprocha35-dev/SENAI-2026",
    liveDemoUrl: ""
  },
  {
    id: 9,
    title: "Exercicios  ",
    category: "Full Stack",
    shortDescription: "Exercicios de fixação do curso de desenvolvimento web do SENAI, focando na construção de interfaces responsivas e interativas utilizando o framework Bootstrap.",
    longDescription: "O aprendizado focou na importância de importar corretamente o Bundle do Bootstrap (JS) ao final do body para que componentes como o Dropdown e o Accordion funcionem corretamente, além de entender o sistema de cores e botões.",
    techStack: ["HTML5","Bootstrap 5.3", "Sass"],
    coverImage: "/assets/portfolio/foto09.png",
    notebookImage: "/assets/portfolio/foto09.png",
    viewSourceUrl: "https://github.com/joaoprocha35-dev/SENAI-2026",
    liveDemoUrl: ""
  },
  {
    id: 10,
    title: "Compilando o sass para o css",
    category: "Front End",
    shortDescription: "Interface criada para aprender conceitos iniciais do ecossistema do SASS, como a estrutura de diretórios, a organization de arquivos e a compilação para CSS.",
    longDescription: "O projeto foi desenvolvido para entender a estrutura de diretórios do SASS, a organização de arquivos e a compilação para CSS. O foco principal foi aprender a configurar o ambiente de desenvolvimento para compilar arquivos .scss in .css, utilizando variáveis, mixins e aninhamento para criar uma folha de estilos modular e eficiente.",
    techStack: ["HTML5", "CSS3", "Sass"],
    coverImage: "/assets/portfolio/foto10.png",
    notebookImage: "/assets/portfolio/foto10.png",
    viewSourceUrl: "https://github.com/joaoprocha35-dev/SENAI-2026",
    liveDemoUrl: ""
  }
];