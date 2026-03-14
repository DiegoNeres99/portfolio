import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

const BOARD_WIDTH = 520;
const BOARD_HEIGHT = 210;
const DOT_SIZE = 24;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function randomPosition() {
  return {
    x: Math.random() * (BOARD_WIDTH - DOT_SIZE),
    y: Math.random() * (BOARD_HEIGHT - DOT_SIZE),
  };
}

function HeroMiniGame() {
  const [dot, setDot] = useState(randomPosition);
  const [velocity, setVelocity] = useState(() => ({
    x: 1.4 + Math.random() * 0.8,
    y: 1.2 + Math.random() * 0.8,
  }));
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [running, setRunning] = useState(false);
  const [message, setMessage] = useState("Clique no ponto para iniciar");

  const lastTapRef = useRef(0);

  const boardStyle = useMemo(
    () => ({
      maxWidth: `${BOARD_WIDTH}px`,
      height: `${BOARD_HEIGHT}px`,
    }),
    []
  );

  useEffect(() => {
    if (!running) {
      return undefined;
    }

    const interval = setInterval(() => {
      setDot((prev) => {
        let nextX = prev.x + velocity.x;
        let nextY = prev.y + velocity.y;
        let vx = velocity.x;
        let vy = velocity.y;

        if (nextX <= 0 || nextX >= BOARD_WIDTH - DOT_SIZE) {
          vx *= -1;
          nextX = clamp(nextX, 0, BOARD_WIDTH - DOT_SIZE);
        }

        if (nextY <= 0 || nextY >= BOARD_HEIGHT - DOT_SIZE) {
          vy *= -1;
          nextY = clamp(nextY, 0, BOARD_HEIGHT - DOT_SIZE);
        }

        if (vx !== velocity.x || vy !== velocity.y) {
          setVelocity({ x: vx, y: vy });
        }

        return { x: nextX, y: nextY };
      });
    }, 16);

    return () => clearInterval(interval);
  }, [running, velocity.x, velocity.y]);

  const handleHit = () => {
    const now = Date.now();
    if (now - lastTapRef.current < 80) return;
    lastTapRef.current = now;

    if (!running) {
      setRunning(true);
      setMessage("Boa! Continue clicando");
    }

    setScore((prev) => {
      const next = prev + 1;
      setBest((oldBest) => Math.max(oldBest, next));
      return next;
    });

    const speedUp = 0.08;
    setVelocity((prev) => ({
      x: (prev.x > 0 ? 1 : -1) * Math.min(Math.abs(prev.x) + speedUp, 4.3),
      y: (prev.y > 0 ? 1 : -1) * Math.min(Math.abs(prev.y) + speedUp, 4.3),
    }));

    setDot(randomPosition());
  };

  const resetGame = () => {
    setScore(0);
    setRunning(false);
    setVelocity({ x: 1.6, y: 1.4 });
    setDot(randomPosition());
    setMessage("Clique no ponto para iniciar");
  };

  return (
    <motion.div
      className="mt-10"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="hero-game-panel rounded-2xl border border-white/10 bg-surface/70 p-4 md:p-5">
        <div className="mb-3 flex items-center justify-between gap-3 text-xs uppercase tracking-[0.14em] text-textMuted">
          <span>Mini game</span>
          <div className="flex items-center gap-3">
            <span>Pontos: {score}</span>
            <span>Recorde: {best}</span>
          </div>
        </div>

        <div
          className="hero-game-board relative w-full overflow-hidden rounded-xl border border-white/10 bg-panel"
          style={boardStyle}
          role="application"
          aria-label="Mini game de reflexo"
        >
          <button
            type="button"
            className="hero-game-dot"
            onPointerDown={handleHit}
            style={{
              left: `${dot.x}px`,
              top: `${dot.y}px`,
              width: `${DOT_SIZE}px`,
              height: `${DOT_SIZE}px`,
            }}
            aria-label="Ponto alvo"
          />

          <p className="pointer-events-none absolute bottom-3 left-3 text-xs text-textMuted">
            {message}
          </p>
        </div>

        <div className="mt-3 flex items-center justify-between gap-3 text-xs text-textMuted">
          <span>Quanto mais acerta, mais rapido fica.</span>
          <button
            type="button"
            onClick={resetGame}
            className="rounded-md border border-accent/60 px-3 py-1.5 text-accent transition hover:bg-accent/10"
          >
            Reiniciar
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default HeroMiniGame;
