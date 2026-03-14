import { motion } from "framer-motion";
import { skills } from "../data/portfolioData";
import { fadeUp, staggerContainer } from "../utils/animation";
import SectionTitle from "./SectionTitle";

function Skills() {
  return (
    <section id="skills" data-section className="border-b border-white/5 py-20 md:py-28">
      <motion.div
        className="section-shell"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <SectionTitle
          eyebrow="Skills"
          title="Tecnologias"
          subtitle="Stack organizada por especialidade para acelerar entregas full stack."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {skills.map((group) => (
            <motion.article
              key={group.category}
              variants={fadeUp}
              className="rounded-2xl border border-border bg-surface p-5 md:p-6"
            >
              <h3 className="font-display text-lg text-textPrimary">{group.category}</h3>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.name}
                      className="flex items-center gap-2 rounded-lg border border-white/5 bg-panel px-3 py-2 text-sm text-textMuted"
                    >
                      <Icon className="text-accent" />
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
