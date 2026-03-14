import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { projects } from "../data/portfolioData";
import { fadeUp, staggerContainer } from "../utils/animation";
import SectionTitle from "./SectionTitle";

function Projects() {
  return (
    <section id="projetos" data-section className="border-b border-white/5 py-20 md:py-28">
      <motion.div
        className="section-shell"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <SectionTitle
          eyebrow="Projetos"
          title="Projetos em Destaque"
          subtitle="Cards de projetos com descricao curta, tecnologias e links para codigo/demo."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <motion.article
              key={project.name}
              variants={fadeUp}
              className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-display text-xl text-textPrimary">{project.name}</h3>
                {project.comingSoon ? (
                  <span className="rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">
                    Em breve
                  </span>
                ) : null}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-textMuted">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-xs text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-2">
                {project.comingSoon ? (
                  <>
                    <span className="inline-flex items-center gap-1 rounded-md border border-white/10 px-3 py-2 text-xs text-textMuted opacity-70">
                      <FiGithub /> GitHub em breve
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-md border border-white/10 px-3 py-2 text-xs text-textMuted opacity-70">
                      <FiArrowUpRight /> Demo em breve
                    </span>
                  </>
                ) : (
                  <>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded-md border border-white/10 px-3 py-2 text-xs text-textPrimary transition hover:border-accent hover:text-accent"
                    >
                      <FiGithub /> GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded-md border border-white/10 px-3 py-2 text-xs text-textPrimary transition hover:border-accent hover:text-accent"
                    >
                      <FiArrowUpRight /> Demo
                    </a>
                  </>
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
