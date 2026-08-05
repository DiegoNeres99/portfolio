import {
  FaAngular,
  FaApple,
  FaBrain,
  FaCloud,
  FaDatabase,
  FaDocker,
  FaGithub,
  FaGitlab,
  FaHeadset,
  FaLaravel,
  FaLinux,
  FaLock,
  FaPencilAlt,
  FaPhp,
  FaReact,
  FaRocket,
  FaServer,
  FaShieldAlt,
  FaTools,
} from "react-icons/fa";
import { SiJavascript, SiMysql, SiPostgresql, SiNestjs, SiNodedotjs, SiHtml5, SiCss } from "react-icons/si";

export const profile = {
  name: "Diego Neres Miotta",
  role: "Full Stack Developer · DevOps · Cloud Security",
  city: "Arapongas, Paraná, Brasil",
  college: "Unopar Arapongas (Anhanguera)",
  course: "Análise e Desenvolvimento de Sistemas",
  educationPeriod: "2024 - 2026",
  postGraduation: "Pós-graduação em andamento: Engenharia de DevOps e Segurança e Proteção de Dados na Nuvem",
  experience: "3+ anos",
  availability: "Disponível para projetos, freelas e oportunidades",
  bio: "Desenvolvedor Full Stack com foco em interfaces modernas, APIs robustas, automação e arquitetura de software com boa performance, segurança e escalabilidade. Hoje também estou aprofundando DevOps e proteção de dados na nuvem para entregar soluções mais completas e confiáveis.",
  aboutParagraphs: [
    "Sou graduado em Análise e Desenvolvimento de Sistemas e atualmente estou expandindo minha atuação com uma pós-graduação em Engenharia de DevOps e Segurança e Proteção de Dados na Nuvem. Essa combinação me permite unir desenvolvimento, infraestrutura e segurança em uma visão mais completa do ciclo de vida de um produto.",
    "Meu trabalho gira em torno de aplicações web bem estruturadas, com foco em React, Angular, Laravel, NestJS, bancos relacionais e entregas com boa performance. Além disso, procuro soluções que tenham clareza técnica, organização de código e bom pensamento para evolução com segurança e escalabilidade.",
    "Em paralelo, sigo fortalecendo meu perfil com práticas de automação, CI/CD, containers, Linux e segurança aplicada à nuvem, porque gosto de pensar no produto como um conjunto inteiro — frontend, backend, dados e operação.",
  ],
  highlights: [
    { label: "Experiência", value: "3+ anos" },
    { label: "Localização", value: "Arapongas, PR" },
    { label: "Graduação", value: "ADS · 2024 a 2026" },
    { label: "Especialidade", value: "Full Stack Web" },
    { label: "Foco atual", value: "DevOps + Cloud Security" },
    { label: "Disponibilidade", value: "Aberto a propostas" },
  ],
  email: "miottadiego@gmail.com",
  github: "https://github.com/DiegoNeres99",
  linkedin: "https://www.linkedin.com/in/diego-neres-285906184/",
  instagram: "https://www.instagram.com/diegoneres.dev/",
  instagramHandle: "@diegoneres.dev",
  whatsapp: "https://wa.me/5543984098118",
};

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "React", icon: FaReact },
      { name: "Angular", icon: FaAngular },
      { name: "Next.js", icon: FaReact },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "PHP", icon: FaPhp },
      { name: "Laravel", icon: FaLaravel },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "NestJS", icon: SiNestjs },
      { name: "TypeScript", icon: SiJavascript },
      { name: "REST APIs", icon: FaServer },
    ],
  },
  {
    category: "Banco de Dados",
    items: [
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "SQL Design", icon: FaDatabase },
      { name: "Prisma ORM", icon: FaDatabase },
      { name: "Supabase", icon: FaDatabase },
      { name: "PgAdmin", icon: FaDatabase },
    ],
  },
  {
    category: "DevOps · Cloud · Segurança",
    items: [
      { name: "Git / GitHub", icon: FaGithub },
      { name: "GitLab", icon: FaGitlab },
      { name: "Linux", icon: FaLinux },
      { name: "Docker", icon: FaDocker },
      { name: "Nuvem", icon: FaCloud },
      { name: "Segurança", icon: FaShieldAlt },
      { name: "CI/CD", icon: FaRocket },
      { name: "Proteção de dados", icon: FaLock },
    ],
  },
];

export const services = [
  {
    icon: FaPencilAlt,
    title: "Desenvolvimento Frontend",
    description:
      "Criação de interfaces modernas, responsivas e com foco em experiência de usuário, usando React, Angular, HTML5 e CSS3.",
  },
  {
    icon: FaServer,
    title: "Desenvolvimento Backend",
    description:
      "Construção de APIs robustas, organizadas e seguras com Laravel, NestJS e TypeScript, com arquitetura pensada para evoluir.",
  },
  {
    icon: FaDatabase,
    title: "Banco de Dados & Integridade",
    description:
      "Modelagem, otimização e manutenção de bancos relacionais com foco em performance, integridade e consistência dos dados.",
  },
  {
    icon: FaRocket,
    title: "DevOps & Automação",
    description:
      "Fluxos de entrega mais seguros e eficientes com versionamento, automação e boas práticas de ciclo de vida de software.",
  },
  {
    icon: FaCloud,
    title: "Cloud & Infraestrutura",
    description:
      "Acompanhamento de soluções em ambientes modernos com foco em infraestrutura, escalabilidade e operação mais confiável.",
  },
  {
    icon: FaShieldAlt,
    title: "Segurança & Proteção de Dados",
    description:
      "Pensamento crítico para segurança desde a concepção da aplicação, com atenção à proteção de dados e boas práticas de implementação.",
  },
];

export const projects = [
  {
    name: "Landing page Desiree",
    description:
      "Projeto finalizado e disponível publicamente, com foco em presença digital e conversão para o público-alvo.",
    techs: ["React", "Vite", "TailwindCSS", "JavaScript"],
    github: "https://github.com/DiegoNeres99/site_desiree",
    demo: "https://www.desireehonorio.com.br/",
  },
  {
    name: "Store em Flutter",
    description:
      "Projeto em desenvolvimento com foco em experiência mobile e arquitetura de aplicação moderna.",
    techs: ["Flutter", "Dart", "Firebase"],
    github: "https://github.com/DiegoNeres99/primeiro-projeto-em-flutter",
    demo: "#",
    comingSoon: true,
  },
  {
    name: "Landing page Silmara",
    description:
      "Landing page pública e bem estruturada, criada para apresentar serviços com mensagem clara e boa navegação.",
    techs: ["React", "Vite", "JavaScript"],
    github: "https://github.com/DiegoNeres99/site_silmara",
    demo: "https://silmaraalmeidaterapia.com.br/",
    comingSoon: false,
  },
  {
    name: "Rastreador veicular em tempo real",
    description:
      "Sistema com arquitetura moderna para monitoramento, comunicação em tempo real e lógica de rastreio.",
    techs: ["React", "NestJS", "TypeScript", "WebSocket", "MySQL"],
    github: "https://github.com/DiegoNeres99/projeto_rastreador_veiculo",
    demo: "#",
    comingSoon: true,
  },
  {
    name: "Landing page Dr. Adriana",
    description:
      "Entrega finalizada para divulgação institucional com visual elegante e foco em apresentação profissional.",
    techs: ["React", "Vite", "JavaScript"],
    github: "https://github.com/DiegoNeres99/site_adriana",
    demo: "https://adrianateodoro.com.br/",
    comingSoon: false,
  },
  {
    name: "Sistema agendamento para Barbearia",
    description:
      "Sistema em desenvolvimento para agendamento de serviços, com painel administrativo e interface amigável para clientes.",
    techs: ["React", "NestJS", "MySQL", "TailwindCSS"],
    githubLinks: [
      { label: "API", url: "https://github.com/DiegoNeres99/sistema_barbearia_api" },
      { label: "Web", url: "https://github.com/DiegoNeres99/sistema_barbearia_web" },
    ],
    demo: "#",
    comingSoon: true,
    status: "Em desenvolvimento",
  }
];
