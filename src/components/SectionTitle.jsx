import { motion } from "framer-motion";
import { fadeUp } from "../utils/animation";

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <motion.div variants={fadeUp} className="mb-10">
      <span className="font-display text-xs uppercase tracking-[0.25em] text-accent">
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
