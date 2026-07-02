import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { projects } from "../data/portfolioData";
import { fadeUp, staggerContainer } from "../utils/animation";
import SectionTitle from "./SectionTitle";

function Projects() {
  const hasValidLink = (url) => Boolean(url && url !== "#");

  return (
    <section id="projetos" data-section className="border-b border-white/5 py-28 md:py-36">
      <motion.div
        className="section-shell"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
      >
        <SectionTitle
          eyebrow="Projetos"
          title="Trabalhos em Destaque"
          subtitle="Cada projeto com contexto real — o problema que existia, o que foi construído e qual o resultado."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={`${project.name}-${index}`}
              variants={fadeUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-7 transition-colors duration-300 hover:border-accent/30"
            >
              {/* Cabeçalho */}
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/60">
                    {project.category}
                  </p>
                  <h3 className="font-display text-lg font-bold leading-snug text-textPrimary group-hover:text-accent transition-colors duration-200">
                    {project.name}
                  </h3>
                </div>
                {project.comingSoon ? (
                  <span className="mt-0.5 shrink-0 rounded-full border border-accent/30 bg-accent/8 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-accent/70">
                    Em breve
                  </span>
                ) : null}
              </div>

              {/* Contexto — o problema */}
              <div className="mt-5 flex gap-3">
                <span className="mt-0.5 shrink-0 font-mono text-[9px] uppercase tracking-[0.15em] text-textMuted">
                  Contexto
                </span>
                <p className="text-sm leading-relaxed text-textMuted">{project.context}</p>
              </div>

              {/* Solução */}
              <div className="mt-3 flex gap-3">
                <span className="mt-0.5 shrink-0 font-mono text-[9px] uppercase tracking-[0.15em] text-textMuted">
                  Solução
                </span>
                <p className="flex-1 text-sm leading-relaxed text-textMuted">{project.description}</p>
              </div>

              {/* Resultado */}
              <div className="mt-3 flex gap-3">
                <span className="mt-0.5 shrink-0 font-mono text-[9px] uppercase tracking-[0.15em] text-accent/70">
                  Resultado
                </span>
                <p className="text-sm leading-relaxed text-textPrimary">{project.result}</p>
              </div>

              {/* Stack */}
              <div className="mt-5 flex flex-wrap gap-2">
                {(project.techs ?? []).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-accent/20 bg-accent/8 px-2.5 py-1 text-[11px] text-accent/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-6 flex gap-2">
                {hasValidLink(project.github) ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-panel px-3.5 py-2 text-xs text-textMuted transition hover:border-accent/40 hover:text-accent"
                  >
                    <FiGithub size={13} /> Código
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3.5 py-2 text-xs text-textMuted/50">
                    <FiGithub size={13} /> Em breve
                  </span>
                )}

                {hasValidLink(project.demo) ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-accent/30 bg-accent/10 px-3.5 py-2 text-xs text-accent transition hover:bg-accent/15"
                  >
                    <FiArrowUpRight size={13} /> Ver site
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3.5 py-2 text-xs text-textMuted/50">
                    <FiArrowUpRight size={13} /> Demo em breve
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
