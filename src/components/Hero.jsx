import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { profile } from "../data/portfolioData";
import { fadeUp, staggerContainer } from "../utils/animation";
import { isValidSocialProfile } from "../utils/socialLinks";
import DockerEbookBanner from "./DockerEbookBanner";
import HeroMiniGame from "./HeroMiniGame";

function Hero() {
  const hasGithub = isValidSocialProfile(profile.github, "github");
  const hasLinkedin = isValidSocialProfile(profile.linkedin, "linkedin");
  const hasInstagram = isValidSocialProfile(profile.instagram, "instagram");

  const phrases = useMemo(
    () => [
      "Full Stack Developer",
      "DevOps em evolução",
      "Cloud Security · APIs · Infra",
      "React · Angular · Laravel · NestJS",
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
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)]">
          <div className="hero-spotlight">
            <motion.p
              variants={fadeUp}
              className="mb-4 font-display text-xs uppercase tracking-[0.35em] text-cyan"
            >
              {profile.role}
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="max-w-4xl font-display text-4xl font-bold leading-tight text-textPrimary sm:text-5xl md:text-7xl"
            >
              Diego Neres Miotta
            </motion.h1>
            <motion.div variants={fadeUp} className="mt-4 flex flex-wrap gap-2">
              {[
                "ADS",
                "Pós em DevOps",
                "Segurança na Nuvem",
              ].map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-accent"
                >
                  {badge}
                </span>
              ))}
            </motion.div>
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
              {hasGithub ? (
                <a
                  href={profile.github}
                  target="_blank"
                  rel="me noreferrer"
                  aria-label="GitHub de Diego Neres Miotta"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-panel px-4 py-2 text-sm text-textPrimary transition hover:border-accent hover:text-accent"
                >
                  <FaGithub /> GitHub
                </a>
              ) : null}
              {hasLinkedin ? (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="me noreferrer"
                  aria-label="LinkedIn de Diego Neres Miotta"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-panel px-4 py-2 text-sm text-textPrimary transition hover:border-accent hover:text-accent"
                >
                  <FaLinkedin /> LinkedIn
                </a>
              ) : null}
              {hasInstagram ? (
                <a
                  href={profile.instagram}
                  target="_blank"
                  rel="me noreferrer"
                  aria-label="Instagram @diegoneres.dev"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-panel px-4 py-2 text-sm text-textPrimary transition hover:border-accent hover:text-accent"
                >
                  <FaInstagram /> Instagram
                </a>
              ) : null}
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
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-6 grid gap-3 sm:grid-cols-3"
            >
              {[
                { label: "Stack", value: "React · Node · Laravel" },
                { label: "Foco", value: "DevOps + Cloud" },
                { label: "Perfil", value: "Produto + Infra" },
              ].map((item) => (
                <div key={item.label} className="glass-card rounded-2xl p-3">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-textMuted">{item.label}</p>
                  <p className="mt-1 text-sm font-semibold text-textPrimary">{item.value}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="glass-card rounded-[28px] p-2">
            <DockerEbookBanner />
          </div>
        </div>
        <HeroMiniGame />
      </motion.div>
    </section>
  );
}

export default Hero;
