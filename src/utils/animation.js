export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Revelação tipo cortina da esquerda para a direita — para o h1 do hero */
export const clipReveal = {
  hidden: { clipPath: "inset(0 100% 0 0)", opacity: 1 },
  show: {
    clipPath: "inset(0 0% 0 0)",
    opacity: 1,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
  },
};

/** Scale in suave — para cards e elementos que "materializam" */
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};
