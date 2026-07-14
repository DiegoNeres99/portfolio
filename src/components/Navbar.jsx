import { useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";

const links = [
  { id: "home", label: "Inicio" },
  { id: "sobre", label: "Sobre" },
  { id: "servicos", label: "Servicos" },
  { id: "skills", label: "Skills" },
  { id: "projetos", label: "Projetos" },
  { id: "formacao", label: "Formacao" },
  { id: "contato", label: "Contato" },
];

function Navbar({ activeSection, theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const themeLabel = theme === "dark" ? "Tema claro" : "Tema escuro";

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-bg/80 backdrop-blur">
      <nav className="section-shell flex h-16 items-center justify-between">
        <a
          href="#home"
          className="font-display text-sm font-bold uppercase tracking-[0.2em] text-accent"
        >
          DNM
        </a>

        <div className="flex items-center gap-3">
          <ul className="hidden items-center gap-7 md:flex">
            {links.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`text-sm transition ${
                    activeSection === item.id
                      ? "text-accent"
                      : "text-textMuted hover:text-textPrimary"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            aria-label={themeLabel}
            title={themeLabel}
            onClick={onToggleTheme}
            className="inline-flex items-center gap-2 rounded-md border border-white/10 px-2.5 py-2 text-xs text-textPrimary transition hover:border-accent hover:text-accent"
          >
            {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
            <span className="hidden md:inline">{themeLabel}</span>
          </button>

          <button
            type="button"
            aria-label="Abrir menu"
            className="rounded-md border border-white/10 p-2 text-textPrimary md:hidden"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      {open ? (
        <ul className="section-shell mb-4 flex flex-col gap-2 rounded-xl border border-white/10 bg-surface p-4 md:hidden">
          {links.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`block rounded px-3 py-2 text-sm transition ${
                  activeSection === item.id
                    ? "bg-accent/10 text-accent"
                    : "text-textMuted hover:bg-white/5 hover:text-textPrimary"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  );
}

export default Navbar;
