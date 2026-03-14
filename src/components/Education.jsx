import { motion } from "framer-motion";
import { profile } from "../data/portfolioData";
import { fadeUp, staggerContainer } from "../utils/animation";
import SectionTitle from "./SectionTitle";

function Education() {
  return (
    <section id="formacao" data-section className="border-b border-white/5 py-20 md:py-28">
      <motion.div
        className="section-shell"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <SectionTitle
          eyebrow="Formacao"
          title="Linha do Tempo Academica"
          subtitle="Evolucao academica focada em base solida para desenvolvimento web."
        />

        <motion.div variants={fadeUp} className="relative pl-6">
          <span className="absolute bottom-0 left-2 top-0 w-px bg-accent/40" />

          <article className="relative rounded-2xl border border-border bg-surface p-5 md:p-6">
            <span className="absolute left-[-1.2rem] top-7 h-3 w-3 rounded-full bg-accent shadow-glow" />
            <p className="font-display text-sm uppercase tracking-[0.18em] text-cyan">
              2024 - 2026
            </p>
            <h3 className="mt-2 font-display text-xl text-textPrimary">{profile.college}</h3>
            <p className="mt-2 text-sm leading-relaxed text-textMuted">
              Graduacao superior com foco em fundamentos de engenharia de software, banco de dados,
              arquitetura de sistemas e praticas modernas de desenvolvimento Full Stack.
            </p>
          </article>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Education;
