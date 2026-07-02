import { motion } from "framer-motion";
import { services } from "../data/portfolioData";
import { staggerContainer } from "../utils/animation";
import SectionTitle from "./SectionTitle";

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

function Services() {
  return (
    <section id="servicos" data-section className="border-b border-white/5 py-28 md:py-36">
      <motion.div
        className="section-shell"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
      >
        <SectionTitle
          eyebrow="Serviços"
          title="O que eu entrego"
          subtitle="Soluções completas do banco de dados à interface — com qualidade, performance e foco em resultado real."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                custom={i}
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.22 } }}
                className="group rounded-2xl border border-border bg-surface p-7 transition-colors duration-300 hover:border-accent/30"
              >
                {/* Ícone com fundo âmbar */}
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 border border-accent/20">
                  <Icon className="text-xl text-accent" />
                </div>

                <h3 className="mb-3 font-display text-lg font-bold text-textPrimary">
                  {service.title}
                </h3>

                <p className="text-sm leading-relaxed text-textMuted">
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

export default Services;
