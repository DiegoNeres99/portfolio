import { motion } from "framer-motion";
import { skills } from "../data/portfolioData";
import { fadeUp, staggerContainer } from "../utils/animation";
import SectionTitle from "./SectionTitle";

function Skills() {
  return (
    <section id="skills" data-section className="border-b border-white/5 py-28 md:py-36">
      <motion.div
        className="section-shell"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <SectionTitle
          eyebrow="Stack"
          title="Tecnologias"
          subtitle="Organizada por especialidade — cada camada do sistema coberta, do banco ao browser."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {skills.map((group) => (
            <motion.article
              key={group.category}
              variants={fadeUp}
              className="rounded-2xl border border-border bg-surface p-6 md:p-7"
            >
              {/* Cabeçalho da categoria */}
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px flex-1 bg-accent/20" aria-hidden="true" />
                <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent/80">
                  {group.category}
                </h3>
                <span className="h-px flex-1 bg-accent/20" aria-hidden="true" />
              </div>

              {/* Pills de tecnologia */}
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.name}
                      className="flex items-center gap-2 rounded-lg border border-border bg-panel px-3.5 py-2 text-sm text-textMuted transition-colors hover:border-accent/40 hover:text-textPrimary"
                    >
                      <Icon className="shrink-0 text-accent/70" aria-hidden="true" />
                      <span>{item.name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
