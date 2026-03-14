import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const onMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <motion.span
      className="custom-cursor pointer-events-none fixed z-[80] hidden h-5 w-5 rounded-full border border-accent/70 bg-accent/10 md:block"
      animate={{ x: position.x - 10, y: position.y - 10 }}
      transition={{ type: "spring", stiffness: 450, damping: 28, mass: 0.2 }}
    />
  );
}

export default CustomCursor;
