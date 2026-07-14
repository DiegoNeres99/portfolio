import { motion } from "framer-motion";
import { FaCheckCircle, FaDocker, FaShoppingCart } from "react-icons/fa";
import { fadeUp } from "../utils/animation";

const highlights = ["Docker do zero", "Dockerfile e compose", "Deploy em cloud"];

function DockerEbookBanner() {
  return (
    <motion.article
      variants={fadeUp}
      className="relative mt-8 w-full max-w-md overflow-hidden rounded-xl border border-white/10 bg-panel/80 p-5 shadow-[0_18px_60px_rgb(0_0_0/0.22)] backdrop-blur lg:mt-0"
    >
      <div className="absolute inset-0 bg-grid grid-overlay opacity-20" />
      <div className="pointer-events-none absolute -right-8 -top-8 text-[120px] leading-none text-accent opacity-[0.04]">
        <FaDocker />
      </div>

      <div className="relative">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1 font-display text-[10px] uppercase tracking-[0.22em] text-accent">
              <FaDocker />
              Ebook
            </span>
            <h2 className="mt-4 font-display text-2xl font-bold leading-tight text-textPrimary">
              Domine Docker sem enrolacao
            </h2>
          </div>

          <div className="grid size-14 flex-shrink-0 place-items-center rounded-lg border border-accent/25 bg-accent/10 text-3xl text-accent">
            <FaDocker />
          </div>
        </div>

        <p className="text-sm leading-relaxed text-textMuted">
          Um guia direto para criar, gerenciar e publicar conteineres Docker com
          mais seguranca.
        </p>

        <ul className="mt-4 grid gap-2">
          {highlights.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-textMuted">
              <FaCheckCircle className="flex-shrink-0 text-xs text-accent" />
              {item}
            </li>
          ))}
        </ul>

        <a
          href="https://pay.hotmart.com/S106737209C"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 font-display text-sm font-bold text-bg transition hover:shadow-glow active:scale-[0.98]"
        >
          <FaShoppingCart />
          Comprar ebook
          <span className="rounded-full bg-black/15 px-2 py-0.5 text-[11px]">R$ 29,90</span>
        </a>

        <p className="mt-3 text-center text-xs text-textMuted/65">
          Hotmart - acesso imediato - 7 dias de garantia
        </p>
      </div>
    </motion.article>
  );
}

export default DockerEbookBanner;
