import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { projects } from "../data/portfolioData";
import { fadeUp, staggerContainer } from "../utils/animation";
import SectionTitle from "./SectionTitle";

function Projects() {
  const hasValidLink = (url) => Boolean(url && url !== "#");

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
          {projects.map((project, index) => (
            <motion.article
              key={`${project.name}-${index}`}
              variants={fadeUp}
              className="glass-card flex h-full flex-col rounded-2xl p-6"
            >
              <div className="flex min-h-[3.5rem] items-start justify-between gap-3">
                <h3 className="font-display text-lg leading-snug text-textPrimary">{project.name}</h3>
                {project.comingSoon ? (
                  <span className="mt-0.5 shrink-0 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">
                    {project.status ?? "Em breve"}
                  </span>
                ) : null}
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-textMuted">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {(project.techs ?? []).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-xs text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {(project.githubLinks ?? (hasValidLink(project.github) ? [{ label: "GitHub", url: project.github }] : [])).map(
                  ({ label, url }) => (
                    <a
                      key={url}
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded-md border border-white/10 px-3 py-2 text-xs text-textPrimary transition hover:border-accent hover:text-accent"
                    >
                      <FiGithub /> {label}
                    </a>
                  ),
                )}

                {!project.githubLinks && !hasValidLink(project.github) ? (
                  <span className="inline-flex items-center gap-1 rounded-md border border-white/10 px-3 py-2 text-xs text-textMuted opacity-70">
                    <FiGithub /> GitHub em breve
                  </span>
                ) : null}

                {hasValidLink(project.demo) ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-md border border-white/10 px-3 py-2 text-xs text-textPrimary transition hover:border-accent hover:text-accent"
                  >
                    <FiArrowUpRight /> Acesse
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1 rounded-md border border-white/10 px-3 py-2 text-xs text-textMuted opacity-70">
                    <FiArrowUpRight /> Demo em breve
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
