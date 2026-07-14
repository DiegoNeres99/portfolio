import { motion } from "framer-motion";
import { services } from "../data/portfolioData";
import { staggerContainer } from "../utils/animation";
import SectionTitle from "./SectionTitle";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

function Services() {
  return (
    <section id="servicos" data-section className="border-b border-white/5 py-20 md:py-28">
      <motion.div
        className="section-shell"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        <SectionTitle
          eyebrow="Serviços"
          title="O que eu faço"
          subtitle="Soluções completas do backend ao frontend — com qualidade, performance e foco no resultado."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                custom={i}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group rounded-2xl border border-white/8 bg-surface p-7 transition-colors duration-300 hover:border-white/20"
              >
                {/* Ícone com gradiente */}
                <div className="mb-6 inline-flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-cyan shadow-lg">
                  <Icon className="text-[28px] text-gray-950" />
                </div>

                {/* Título */}
                <h3 className="mb-3 font-display text-lg font-semibold text-accent">
                  {service.title}
                </h3>

                {/* Descrição */}
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
