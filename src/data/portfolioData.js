import {
  FaAngular,
  FaApple,
  FaBrain,
  FaDatabase,
  FaGithub,
  FaGitlab,
  FaHeadset,
  FaLaravel,
  FaLinux,
  FaPencilAlt,
  FaPhp,
  FaReact,
  FaServer,
  FaTools,
} from "react-icons/fa";
import { SiJavascript, SiMysql, SiPostgresql, SiNestjs, SiNodedotjs, SiHtml5, SiCss } from "react-icons/si";

export const profile = {
  name: "Diego Neres Miotta",
  age: 26,
  role: "Full Stack Developer",
  city: "Arapongas, Parana, Brasil",
  college: "Unopar Arapongas (Anhanguera)",
  course: "Analise e Desenvolvimento de Sistemas",
  educationPeriod: "2024 - 2026",
  experience: "3+ anos",
  availability: "Aberto a oportunidades",
  bio: "Desenvolvedor Full Stack com foco em construir produtos completos — do design de banco de dados a interface final — com codigo limpo, escalavel e facil de manter.",
  aboutParagraphs: [
    "Tenho 26 anos e atuo como desenvolvedor Full Stack. Minha especialidade e construir solucoes web completas e bem estruturadas, desde a modelagem do banco de dados ate a entrega da interface ao usuario final. Trabalho com atencao a performance, organizacao de codigo e facilidade de manutencao — porque um sistema bom e aquele que cresce sem virar um caos.",
    "No frontend, uso React e Angular para criar interfaces modernas e responsivas. No backend, trabalho com PHP/Laravel e Node.js/NestJS para APIs REST robustas e seguras. Tenho experiencia em ambientes Linux, versionamento com Git/GitHub/GitLab e fluxos de CI/CD, o que me permite atuar em todo o ciclo de vida de uma aplicacao.",
  ],
  highlights: [
    { label: "Experiencia", value: "3+ anos" },
    { label: "Localizacao", value: "Arapongas, PR" },
    { label: "Faculdade", value: "Unopar (Anhanguera)" },
    { label: "Curso", value: "ADS — 2024 a 2026" },
    { label: "Especialidade", value: "Full Stack Web" },
    { label: "Disponibilidade", value: "Aberto a propostas" },
  ],
  email: "miottadiego@gmail.com",
  github: "https://github.com/DiegoNeres99",
  linkedin: "https://www.linkedin.com/",
  instagram: "https://www.instagram.com/diegoneres.dev/",
  instagramHandle: "@diegoneres.dev",
  resumeFile: "/curriculo-diego-neres-miotta.pdf",
  whatsapp: "https://wa.me/5543984775641",
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
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "PHP", icon: FaPhp },
      { name: "Laravel", icon: FaLaravel },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "NestJS", icon: SiNestjs },      
    ],
  },
  {
    category: "Banco de Dados",
    items: [
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "SQL Design", icon: FaDatabase },
    ],
  },
  {
    category: "DevOps / Ferramentas",
    items: [
      { name: "Git / GitHub", icon: FaGithub },
      { name: "GitLab", icon: FaGitlab },
      { name: "Linux", icon: FaLinux },
      { name: "macOS (Apple)", icon: FaApple },
    ],
  },
];

export const services = [
  {
    icon: FaPencilAlt,
    title: "Desenvolvimento Frontend",
    description:
      "Criação de interfaces modernas, responsivas e intuitivas usando React, Angular, HTML5 e CSS3 com foco em experiência do usuário.",
  },
  {
    icon: FaServer,
    title: "Desenvolvimento Backend",
    description:
      "Construção de APIs robustas e escaláveis com NestJS e TypeScript, com padrões arquiteturais modernos e segurança em primeiro lugar.",
  },
  {
    icon: FaDatabase,
    title: "Banco de Dados",
    description:
      "Design e otimização de bancos de dados relacionais (MySQL), (PostgreSQL) e SQL Design com foco em performance e integridade dos dados.",
  },
  {
    icon: FaTools,
    title: "Manutenção de Computadores",
    description:
      "Diagnóstico, manutenção preventiva e corretiva de computadores, com foco em desempenho, estabilidade e resolução ágil de problemas.",
  },
  {
    icon: FaBrain,
    title: "IA & Automação",
    description:
      "Utilização de inteligência artificial e ferramentas modernas como auxílio na programação para entregar soluções mais eficientes.",
  },
  {
    icon: FaHeadset,
    title: "Suporte Técnico",
    description:
      "Experiência em atendimento ao cliente e resolução de problemas técnicos com comunicação clara e efetiva.",
  },
];

export const projects = [
  {
    name: "Projeto 01 - landing page Desiree (publico)",
    description:
      "Site institucional em desenvolvimento privado, com tecnologias modernas e foco em performance.",
    techs: ["React", "Vite", "TailwindCSS", "JavaScript"],
    github: "https://github.com/DiegoNeres99/site_desiree",
    demo: "https://www.desireehonorio.com.br/",
  },
  {
    name: "Projeto 02 - Store em Flutter (em breve)",
    description:
      "Projeto em desenvolvimento. Em breve publico detalhes tecnicos, repositorio e demonstracao.",
    techs: ["Flutter", "Dart", "Firebase"],
    github: "https://github.com/DiegoNeres99/primeiro-projeto-em-flutter",
    demo: "#",
    comingSoon: true,
  },
  // {
  //   name: "Projeto 03 - Clinic plataform WhatsApp (privado)",
  //   description:
  //     "Em preparacao. Em breve adiciono stack e links de acesso.",
  //   techs: ["Em definicao"],
  //   github: "#",
  //   demo: "#",
  //   comingSoon: true,
  // },
  {
    name: "Projeto 03 - landing page Silmara (publico)",
    description:
      "Em preparacao. Em breve adiciono stack e links de acesso.",
    techs: ["React", "Vite", "JavaScript"],
    github: "https://github.com/DiegoNeres99/site_silmara",
    demo: "https://silmaraalmeidaterapia.com.br/",
    comingSoon: true,
  }
];
