import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { profile } from "../data/portfolioData";
import { isValidSocialProfile } from "../utils/socialLinks";

const navLinks = [
  { href: "#home",     label: "Início" },
  { href: "#sobre",    label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#skills",   label: "Stack" },
  { href: "#projetos", label: "Projetos" },
  { href: "#formacao", label: "Formação" },
  { href: "#contato",  label: "Contato" },
];

function Footer() {
  const hasGithub    = isValidSocialProfile(profile.github, "github");
  const hasLinkedin  = isValidSocialProfile(profile.linkedin, "linkedin");
  const hasInstagram = isValidSocialProfile(profile.instagram, "instagram");

  const socialLinks = [
    { href: `mailto:${profile.email}`, icon: FiMail,       label: "E-mail",     show: true },
    { href: profile.whatsapp,          icon: FaWhatsapp,    label: "WhatsApp",   show: true, external: true },
    { href: profile.github,            icon: FaGithub,      label: "GitHub",     show: hasGithub, external: true },
    { href: profile.linkedin,          icon: FaLinkedin,    label: "LinkedIn",   show: hasLinkedin, external: true },
    { href: profile.instagram,         icon: FaInstagram,   label: "Instagram",  show: hasInstagram, external: true },
  ].filter((l) => l.show);

  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-surface pt-14 pb-8">
      <div className="section-shell">
        {/* Topo do footer */}
        <div className="grid gap-10 md:grid-cols-[1fr_auto_auto]">
          {/* Identidade */}
          <div>
            <a href="#home" className="font-display text-2xl font-bold text-textPrimary hover:text-accent transition-colors">
              DNM<span className="text-accent">.</span>
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-textMuted">
              Desenvolvedor Full Stack em Arapongas, PR. Do banco de dados à interface — com código limpo e foco em resultado.
            </p>
            <div className="mt-5 flex gap-3">
              {socialLinks.map((l) => {
                const Icon = l.icon;
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    target={l.external ? "_blank" : undefined}
                    rel={l.external ? "me noreferrer" : undefined}
                    aria-label={l.label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-panel text-textMuted transition hover:border-accent/40 hover:text-accent"
                  >
                    <Icon size={15} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navegação */}
          <div>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-textMuted">
              Navegação
            </p>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-textMuted transition hover:text-accent"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato rápido */}
          <div>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-textMuted">
              Contato
            </p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-sm text-textMuted transition hover:text-accent"
                >
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-textMuted transition hover:text-accent"
                >
                  WhatsApp
                </a>
              </li>
              <li className="pt-1">
                <span className="inline-flex items-center gap-1.5 rounded-md border border-accent/25 bg-accent/10 px-2.5 py-1 text-xs text-accent">
                  Aberto a propostas
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-textMuted">
          <p>
            &copy; {year} Diego Neres Miotta. Todos os direitos reservados.
          </p>
          <p>
            Arapongas, PR &mdash; Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
