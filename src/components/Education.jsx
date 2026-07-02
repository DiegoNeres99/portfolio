import { motion } from "framer-motion";
import { profile } from "../data/portfolioData";
import { fadeUp, staggerContainer } from "../utils/animation";
import SectionTitle from "./SectionTitle";

function Education() {
  return (
    <section id="formacao" data-section className="border-b border-white/5 py-28 md:py-36">
      <motion.div
        className="section-shell"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <SectionTitle
          eyebrow="Formação"
          title="Trajetória"
          subtitle="Experiência profissional e formação acadêmica — construindo fundamentos sólidos enquanto entrega na prática."
        />

        <motion.div variants={fadeUp} className="relative space-y-5 pl-7">
          <span className="absolute bottom-0 left-2.5 top-0 w-px bg-accent/25" aria-hidden="true" />

          <article className="relative rounded-2xl border border-border bg-surface p-6 md:p-8">
            <span className="absolute -left-[1.35rem] top-8 h-3 w-3 rounded-full border-2 border-accent bg-bg shadow-glow" aria-hidden="true" />
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              Atual — Arapongas, PR
            </p>
            <h3 className="mt-2 font-display text-xl font-bold text-textPrimary">
              Applicativa Technologies
            </h3>
            <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-textMuted">
              Desenvolvedor Full Stack em projetos web reais, com foco em backend com Laravel e
              NestJS e frontend com React. Atuação em todo o ciclo: levantamento de requisitos,
              arquitetura da API, desenvolvimento, code review e deploy.
            </p>
          </article>

          <article className="relative rounded-2xl border border-border bg-surface p-6 md:p-8">
            <span className="absolute -left-[1.35rem] top-8 h-3 w-3 rounded-full border-2 border-accent/50 bg-bg" aria-hidden="true" />
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-textMuted">
              {profile.educationPeriod}
            </p>
            <h3 className="mt-2 font-display text-xl font-bold text-textPrimary">
              {profile.college}
            </h3>
            <p className="mt-1 text-sm text-textMuted">{profile.course}</p>
            <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-textMuted">
              Graduação com foco em engenharia de software, banco de dados, arquitetura de sistemas
              e práticas modernas de desenvolvimento. Complementado com projetos práticos e
              freelances em paralelo ao curso.
            </p>
          </article>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Education;
