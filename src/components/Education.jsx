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
          eyebrow="Formação"
          title="Linha do Tempo Acadêmica"
          subtitle="Graduação concluída e evolução contínua em DevOps, cloud e segurança da informação."
        />

        <motion.div variants={fadeUp} className="relative space-y-5 pl-6">
          <span className="absolute bottom-0 left-2 top-0 w-px bg-accent/40" />

          <article className="glass-card relative rounded-2xl p-5 md:p-6">
            <span className="absolute left-[-1.2rem] top-7 h-3 w-3 rounded-full bg-accent shadow-glow" />
            <p className="font-display text-sm uppercase tracking-[0.18em] text-cyan">
              Atual
            </p>
            <h3 className="mt-2 font-display text-xl text-textPrimary">
              Pós-graduação em Engenharia de DevOps e Segurança e Proteção de Dados na Nuvem
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-textMuted">
              {profile.postGraduation}
            </p>
          </article>

          <article className="relative rounded-2xl border border-border bg-surface p-5 md:p-6">
            <span className="absolute left-[-1.2rem] top-7 h-3 w-3 rounded-full bg-accent shadow-glow" />
            <p className="font-display text-sm uppercase tracking-[0.18em] text-cyan">
              Atual
            </p>
            <h3 className="mt-2 font-display text-xl text-textPrimary">
              Applicativa Technologies - Arapongas
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-textMuted">
              Atuando como desenvolvedor Full Stack em projetos web, com foco em backend com Laravel e NestJS e
              frontend com React.
            </p>
          </article>

          <article className="relative rounded-2xl border border-border bg-surface p-5 md:p-6">
            <span className="absolute left-[-1.2rem] top-7 h-3 w-3 rounded-full bg-accent shadow-glow" />
            <p className="font-display text-sm uppercase tracking-[0.18em] text-cyan">
              2024 - 2026
            </p>
            <h3 className="mt-2 font-display text-xl text-textPrimary">{profile.college}</h3>
            <p className="mt-2 text-sm leading-relaxed text-textMuted">
              Formação em Análise e Desenvolvimento de Sistemas, com base sólida em engenharia de software,
              banco de dados, arquitetura de sistemas e desenvolvimento Full Stack.
            </p>
          </article>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Education;
