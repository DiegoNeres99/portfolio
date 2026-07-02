import { motion } from "framer-motion";
import { profile } from "../data/portfolioData";
import { fadeUp, staggerContainer } from "../utils/animation";
import SectionTitle from "./SectionTitle";

function About() {
  return (
    <section id="sobre" data-section className="border-b border-white/5 py-28 md:py-36">
      <motion.div
        className="section-shell"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <SectionTitle
          eyebrow="Sobre"
          title="Quem está por trás do código"
          subtitle="Full Stack por escolha, não por acidente — porque entender o sistema inteiro é o que diferencia um desenvolvedor de um digitador de código."
        />

        <div className="grid gap-6 md:grid-cols-[1fr_auto]">
          {/* Parágrafos */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-border bg-surface p-7 md:p-9"
          >
            <div className="space-y-5">
              {profile.aboutParagraphs.map((paragraph, index) => (
                <p key={index} className="leading-[1.85] text-textMuted">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Highlights */}
            <div className="mt-8 grid grid-cols-2 gap-3 border-t border-border pt-7 sm:grid-cols-3">
              {profile.highlights.map((item) => (
                <div key={item.label} className="space-y-0.5">
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-textMuted">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium text-textPrimary">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Coluna lateral — empresa atual */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col justify-between rounded-2xl border border-accent/20 bg-accent/5 p-6 md:w-56"
          >
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">
                Atualmente em
              </p>
              <p className="mt-2 font-display text-base font-bold text-textPrimary leading-tight">
                Applicativa Technologies
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-textMuted">
                Arapongas, PR — Dev Full Stack
              </p>
            </div>
            <div className="mt-6 space-y-2">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">
                Stack diária
              </p>
              {["Laravel", "NestJS", "React"].map((tech) => (
                <span
                  key={tech}
                  className="block rounded-md border border-accent/20 bg-accent/10 px-3 py-1.5 text-xs text-accent"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
