import { motion } from "framer-motion";
import { profile } from "../data/portfolioData";
import { fadeUp, staggerContainer } from "../utils/animation";
import SectionTitle from "./SectionTitle";

function About() {
  return (
    <section id="sobre" data-section className="border-b border-white/5 py-20 md:py-28">
      <motion.div
        className="section-shell"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <SectionTitle
          eyebrow="Sobre"
          title="Perfil Tecnico"
          subtitle="Construindo sistemas confiaveis do banco de dados a interface — com codigo limpo e foco em resultado."
        />

        {/* Texto + Destaques */}
        <motion.div
          variants={fadeUp}
          className="rounded-2xl border border-border bg-surface p-6 md:p-8"
        >
          <div className="grid gap-8 md:grid-cols-2">
            {/* Paragrafos */}
            <div className="space-y-4">
              {profile.aboutParagraphs.map((paragraph, index) => (
                <p key={index} className="leading-relaxed text-textMuted">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Grid de destaques */}
            <div className="grid grid-cols-2 gap-3 content-start">
              {profile.highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/5 bg-panel px-4 py-3"
                >
                  <p className="text-[10px] uppercase tracking-[0.14em] text-textMuted">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-textPrimary">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
