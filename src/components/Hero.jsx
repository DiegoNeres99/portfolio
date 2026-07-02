import { useEffect, useMemo, useRef, useState } from "react";
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiArrowRight, FiArrowDown } from "react-icons/fi";
import { metrics, profile } from "../data/portfolioData";
import { clipReveal, fadeUp, staggerContainer } from "../utils/animation";
import HeroMiniGame from "./HeroMiniGame";

/* ─── Counter animado ─────────────────────────────────── */
function CountUp({ value, suffix }) {
  const ref = useRef(null);
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => `${Math.round(v)}${suffix}`);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(motionVal, value, { duration: 1.4, ease: "easeOut" });
    }
  }, [isInView, motionVal, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

/* ─── Botão magnético ─────────────────────────────────── */
function MagneticButton({ href, children, primary = false }) {
  const btnRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const onMouseMove = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.18);
    y.set((e.clientY - cy) * 0.18);
  };

  const onMouseLeave = () => {
    animate(x, 0, { type: "spring", stiffness: 300, damping: 22 });
    animate(y, 0, { type: "spring", stiffness: 300, damping: 22 });
  };

  const baseClass = primary
    ? "inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-sm font-semibold text-bg transition-shadow hover:shadow-glow-lg"
    : "inline-flex items-center gap-2 rounded-xl border border-border bg-panel px-6 py-3.5 text-sm font-medium text-textPrimary transition hover:border-accent/50 hover:text-accent";

  return (
    <motion.a
      ref={btnRef}
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      style={{ x, y }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={baseClass}
    >
      {children}
    </motion.a>
  );
}

/* ─── Hero ────────────────────────────────────────────── */
function Hero() {
  const phrases = useMemo(
    () => [
      "Full Stack Developer",
      "React · Angular · Laravel · NestJS",
      "Do banco de dados à interface",
      "Código limpo, performance, resultado",
    ],
    []
  );
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[phraseIndex];
    const isDone = text === phrase;
    const isEmpty = text === "";
    const timeout = setTimeout(() => {
      if (!deleting && !isDone) { setText(phrase.slice(0, text.length + 1)); return; }
      if (!deleting && isDone)  { setDeleting(true); return; }
      if (deleting && !isEmpty) { setText(phrase.slice(0, text.length - 1)); return; }
      setDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, deleting ? 50 : isDone ? 1400 : 85);
    return () => clearTimeout(timeout);
  }, [deleting, phraseIndex, phrases, text]);

  return (
    <section
      id="home"
      data-section
      className="relative flex min-h-screen items-center border-b border-white/5 pt-24"
    >
      {/* Grid de fundo */}
      <div className="absolute inset-0 -z-10 bg-grid grid-overlay opacity-60" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="section-shell w-full py-16"
      >
        {/* Eyebrow label — JetBrains Mono */}
        <motion.p
          variants={fadeUp}
          className="mb-6 font-mono text-[11px] uppercase tracking-[0.3em] text-accent/70"
        >
          Arapongas, PR &mdash; Full Stack Developer
        </motion.p>

        {/* H1 — Playfair Display com clip-path wipe */}
        <div className="overflow-hidden">
          <motion.h1
            variants={clipReveal}
            className="max-w-4xl font-display text-[clamp(2.6rem,8vw,5.5rem)] font-bold leading-[1.08] tracking-tight text-textPrimary"
          >
            Diego Neres{" "}
            <em className="not-italic text-accent">Miotta.</em>
          </motion.h1>
        </div>

        {/* Typewriter — subtítulo dinâmico */}
        <motion.p
          variants={fadeUp}
          className="mt-5 h-7 font-mono text-base text-textMuted sm:text-lg"
        >
          <span className="typing-caret pr-1">{text}</span>
        </motion.p>

        {/* Bio — 1 frase forte */}
        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-xl text-base leading-relaxed text-textMuted md:text-lg"
        >
          {profile.bio}
        </motion.p>

        {/* CTAs — hierarquia clara */}
        <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-3">
          <MagneticButton href={profile.whatsapp} primary>
            <FaWhatsapp size={15} /> Vamos Conversar
            <FiArrowRight size={14} className="ml-0.5" />
          </MagneticButton>
          <MagneticButton href="#projetos">
            Ver Projetos
            <FiArrowDown size={14} className="ml-0.5" />
          </MagneticButton>
        </motion.div>

        {/* Links sociais — peso menor, abaixo dos CTAs */}
        <motion.div variants={fadeUp} className="mt-7 flex items-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="me noreferrer"
            aria-label="GitHub de Diego Neres Miotta"
            className="flex items-center gap-1.5 text-xs text-textMuted transition hover:text-accent"
          >
            <FaGithub size={14} /> GitHub
          </a>
          <span className="h-3 w-px bg-border" aria-hidden="true" />
          <a
            href={profile.linkedin}
            target="_blank"
            rel="me noreferrer"
            aria-label="LinkedIn de Diego Neres Miotta"
            className="flex items-center gap-1.5 text-xs text-textMuted transition hover:text-accent"
          >
            <FaLinkedin size={14} /> LinkedIn
          </a>
        </motion.div>

        {/* Métricas — counter animado */}
        <motion.div
          variants={fadeUp}
          className="mt-14 flex flex-wrap gap-x-10 gap-y-6 border-t border-border pt-8"
        >
          {metrics.map((m) => (
            <div key={m.label}>
              <p className="font-display text-3xl font-bold text-textPrimary md:text-4xl">
                <CountUp value={m.value} suffix={m.suffix} />
              </p>
              <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-textMuted">
                {m.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Mini game — elemento criativo único */}
        <HeroMiniGame />
      </motion.div>
    </section>
  );
}

export default Hero;
