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
  city: "Arapongas, Paraná, Brasil",
  college: "Unopar Arapongas (Anhanguera)",
  course: "Análise e Desenvolvimento de Sistemas",
  educationPeriod: "2024 - 2026",
  experience: "3+ anos",
  availability: "Aberto a oportunidades",
  bio: "Construo sistemas web completos — da modelagem do banco de dados à entrega da interface — com código limpo, arquitetura sólida e foco em resultado real.",
  aboutParagraphs: [
    "Tenho 26 anos e trabalho como desenvolvedor Full Stack desde 2022, construindo aplicações que precisam funcionar de verdade: rápidas, organizadas e fáceis de manter quando o sistema cresce. Minha rotina envolve tanto decisões de arquitetura de API quanto ajustes finos de UX — e acho que essa visão de ponta a ponta é o que torna meu trabalho mais útil para quem contrata.",
    "No dia a dia uso React e Angular no frontend e PHP/Laravel ou Node.js/NestJS no backend, sempre com foco em qualidade de código e entrega. Trabalho em ambiente Linux, com versionamento rigoroso no Git e fluxos de CI/CD. Já entreguei projetos para clientes de segmentos diferentes — de profissionais de saúde a sistemas com rastreamento em tempo real via WebSocket.",
  ],
  highlights: [
    { label: "Experiência", value: "3+ anos" },
    { label: "Localização", value: "Arapongas, PR" },
    { label: "Empresa atual", value: "Applicativa Tech." },
    { label: "Curso", value: "ADS — Unopar 2024–26" },
    { label: "Especialidade", value: "Full Stack Web" },
    { label: "Disponibilidade", value: "Aberto a propostas" },
  ],
  email: "miottadiego@gmail.com",
  github: "https://github.com/DiegoNeres99",
  linkedin: "https://www.linkedin.com/in/diego-neres-285906184/",
  instagram: "https://www.instagram.com/diegoneres.dev/",
  instagramHandle: "@diegoneres.dev",
  whatsapp: "https://wa.me/5543984098118",
};

export const metrics = [
  { value: 3, suffix: "+", label: "Anos de experiência" },
  { value: 5, suffix: "+", label: "Projetos entregues" },
  { value: 10, suffix: "+", label: "Tecnologias na stack" },
];

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
      { name: "macOS", icon: FaApple },
    ],
  },
];

export const services = [
  {
    icon: FaPencilAlt,
    title: "Desenvolvimento Frontend",
    description:
      "Interfaces modernas, responsivas e acessíveis com React e Angular. Código componentizado, performático e fácil de evoluir.",
  },
  {
    icon: FaServer,
    title: "Desenvolvimento Backend",
    description:
      "APIs REST robustas e seguras com NestJS/TypeScript e Laravel. Arquitetura limpa, validação rigorosa e documentação incluída.",
  },
  {
    icon: FaDatabase,
    title: "Banco de Dados",
    description:
      "Modelagem, design e otimização de bancos relacionais (MySQL, PostgreSQL) com foco em performance, integridade e escalabilidade.",
  },
  {
    icon: FaTools,
    title: "Manutenção de Computadores",
    description:
      "Diagnóstico e manutenção preventiva/corretiva de hardware e software, com foco em desempenho e estabilidade.",
  },
  {
    icon: FaBrain,
    title: "IA & Automação",
    description:
      "Integração de ferramentas de inteligência artificial no fluxo de desenvolvimento para entregas mais rápidas e soluções mais inteligentes.",
  },
  {
    icon: FaHeadset,
    title: "Suporte Técnico",
    description:
      "Atendimento e resolução de problemas técnicos com comunicação clara, histórico de suporte em ambiente corporativo.",
  },
];

export const projects = [
  {
    name: "Landing Page — Desiree Honório",
    category: "Freelance · No ar",
    context: "Profissional de saúde sem presença digital, perdendo pacientes para concorrentes com sites.",
    description: "Site institucional com seção de serviços, bio profissional e CTA direto para agendamento via WhatsApp. Design que transmite confiança e autoridade.",
    result: "Site ao ar com domínio próprio, indexado no Google e gerando contatos recorrentes.",
    techs: ["React", "Vite", "TailwindCSS"],
    github: "https://github.com/DiegoNeres99/site_desiree",
    demo: "https://www.desireehonorio.com.br/",
  },
  {
    name: "Rastreador Veicular em Tempo Real",
    category: "Projeto Técnico · Em desenvolvimento",
    context: "Necessidade de monitoramento de frota com atualizações instantâneas — sem polling, sem atraso.",
    description: "Full stack com WebSocket para transmissão de localização em tempo real. Backend NestJS + MySQL, frontend React com mapa interativo e painel de status.",
    result: "Arquitetura WebSocket validada com latência sub-100ms na transmissão de dados de posição.",
    techs: ["React", "NestJS", "TypeScript", "WebSocket", "MySQL"],
    github: "https://github.com/DiegoNeres99/projeto_rastreador_veiculo",
    demo: "#",
    comingSoon: true,
  },
  {
    name: "Landing Page — Silmara Almeida",
    category: "Freelance · No ar",
    context: "Terapeuta precisava de site que comunicasse autoridade e facilitasse o primeiro contato de novos clientes.",
    description: "Landing page focada em conversão: apresentação profissional, serviços detalhados e formulário de contato integrado ao WhatsApp.",
    result: "Site no ar com domínio próprio, bem ranqueado localmente.",
    techs: ["React", "Vite", "JavaScript"],
    github: "https://github.com/DiegoNeres99/site_silmara",
    demo: "https://silmaraalmeidaterapia.com.br/",
  },
  {
    name: "Landing Page — Dra. Adriana Teodoro",
    category: "Freelance · No ar",
    context: "Médica precisava de presença digital profissional para captação de novos pacientes na região.",
    description: "Site institucional com apresentação clínica, especialidades, localização e link direto para agendamento.",
    result: "Site ao ar com domínio próprio e identidade visual alinhada à prática médica.",
    techs: ["React", "Vite", "JavaScript"],
    github: "https://github.com/DiegoNeres99/site_adriana",
    demo: "https://adrianateodoro.com.br/",
  },
  {
    name: "App Mobile — Flutter Store",
    category: "Projeto Pessoal · Em desenvolvimento",
    context: "Exploração prática de desenvolvimento mobile multiplataforma com Flutter.",
    description: "Aplicativo de e-commerce com listagem de produtos, carrinho de compras e integração com Firebase para autenticação e dados em tempo real.",
    result: "Em desenvolvimento ativo — aprendizado hands-on com Dart, Flutter e Firebase.",
    techs: ["Flutter", "Dart", "Firebase"],
    github: "https://github.com/DiegoNeres99/primeiro-projeto-em-flutter",
    demo: "#",
    comingSoon: true,
  },
];
