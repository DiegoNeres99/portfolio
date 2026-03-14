import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { profile } from "../data/portfolioData";
import { fadeUp, staggerContainer } from "../utils/animation";

function Hero() {
  const phrases = useMemo(
    () => [
      "Full Stack Developer",
      "React · Angular · Laravel · NestJS",
      "Do banco de dados a interface",
      "Codigo limpo, performance, resultado",
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

    const timeout = setTimeout(
      () => {
        if (!deleting && !isDone) {
          setText(phrase.slice(0, text.length + 1));
          return;
        }

        if (!deleting && isDone) {
          setDeleting(true);
          return;
        }

        if (deleting && !isEmpty) {
          setText(phrase.slice(0, text.length - 1));
          return;
        }

        setDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      },
      deleting ? 55 : isDone ? 1200 : 90
    );

    return () => clearTimeout(timeout);
  }, [deleting, phraseIndex, phrases, text]);

  return (
    <section
      id="home"
      data-section
      className="relative flex min-h-screen items-center border-b border-white/5 pt-24"
    >
      <div className="absolute inset-0 -z-10 bg-grid grid-overlay opacity-50" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="section-shell w-full"
      >
        <motion.p
          variants={fadeUp}
          className="mb-4 font-display text-xs uppercase tracking-[0.35em] text-cyan"
        >
          Desenvolvedor Full Stack
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="max-w-4xl font-display text-4xl font-bold leading-tight text-textPrimary sm:text-5xl md:text-7xl"
        >
          Diego Neres Miotta
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-5 h-8 max-w-3xl font-display text-lg text-accent sm:text-xl"
        >
          <span className="typing-caret pr-1">{text}</span>
        </motion.p>
        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-2xl text-base leading-relaxed text-textMuted md:text-lg"
        >
          {profile.bio}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-panel px-4 py-2 text-sm text-textPrimary transition hover:border-accent hover:text-accent"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-panel px-4 py-2 text-sm text-textPrimary transition hover:border-accent hover:text-accent"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-panel px-4 py-2 text-sm text-textPrimary transition hover:border-accent hover:text-accent"
          >
            <FaEnvelope /> Email
          </a>
          <a
            href={profile.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-panel px-4 py-2 text-sm text-textPrimary transition hover:border-accent hover:text-accent"
          >
            <FaWhatsapp /> WhatsApp
          </a>
          <a
            href={profile.resumeFile}
            download
            className="inline-flex items-center gap-2 rounded-lg border border-accent bg-accent/10 px-4 py-2 text-sm text-accent transition hover:shadow-glow"
          >
            <FiDownload /> Baixar Curriculo
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
