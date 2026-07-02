import { motion } from "framer-motion";
import { fadeUp } from "../utils/animation";

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <motion.div variants={fadeUp} className="mb-12">
      <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent/70">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-3xl font-bold text-textPrimary md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-textMuted md:text-base">
          {subtitle}
        </p>
      ) : null}
    </motion.div>
  );
}

export default SectionTitle;
