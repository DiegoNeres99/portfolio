import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const BOARD_WIDTH = 520;
const BOARD_HEIGHT = 210;
const DOT_SIZE = 30;
const TARGET_HITS = 20;
const INITIAL_TIME_LIMIT = 60;
const TIME_REDUCTION_PER_LEVEL = 6;
const MIN_TIME_LIMIT = 20;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function randomDirection() {
  return Math.random() > 0.5 ? 1 : -1;
}

function levelTimeLimit(level) {
  return Math.max(INITIAL_TIME_LIMIT - (level - 1) * TIME_REDUCTION_PER_LEVEL, MIN_TIME_LIMIT);
}

function levelBaseVelocity(level) {
  const multiplier = 1 + (level - 1) * 0.16;
  return {
    x: randomDirection() * (1.25 + Math.random() * 0.6) * multiplier,
    y: randomDirection() * (1.1 + Math.random() * 0.55) * multiplier,
  };
}

function randomPosition(width = BOARD_WIDTH, height = BOARD_HEIGHT) {
  return {
    x: Math.random() * Math.max(width - DOT_SIZE, 0),
    y: Math.random() * Math.max(height - DOT_SIZE, 0),
  };
}

function HeroMiniGame() {
  const [dot, setDot] = useState(randomPosition);
  const [velocity, setVelocity] = useState(() => levelBaseVelocity(1));
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(1);
  const [level, setLevel] = useState(1);
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME_LIMIT);
  const [running, setRunning] = useState(false);
  const [message, setMessage] = useState("Toque no ponto para iniciar a fase 1");
  const [boardSize, setBoardSize] = useState({ width: BOARD_WIDTH, height: BOARD_HEIGHT });

  const lastTapRef = useRef(0);
  const boardRef = useRef(null);
  const levelRef = useRef(1);
  const scoreRef = useRef(0);

  const boardStyle = {
    maxWidth: `${BOARD_WIDTH}px`,
    height: `${BOARD_HEIGHT}px`,
  };

  useEffect(() => {
    const node = boardRef.current;
    if (!node) return undefined;

    const syncBoardSize = () => {
      setBoardSize({
        width: node.clientWidth,
        height: node.clientHeight,
      });
    };

    syncBoardSize();

    const observer = new ResizeObserver(syncBoardSize);
    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setDot((prev) => ({
      x: clamp(prev.x, 0, Math.max(boardSize.width - DOT_SIZE, 0)),
      y: clamp(prev.y, 0, Math.max(boardSize.height - DOT_SIZE, 0)),
    }));
  }, [boardSize.width, boardSize.height]);

  useEffect(() => {
    levelRef.current = level;
  }, [level]);

  useEffect(() => {
    scoreRef.current = score;
  }, [score]);

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
        const maxX = Math.max(boardSize.width - DOT_SIZE, 0);
        const maxY = Math.max(boardSize.height - DOT_SIZE, 0);

        if (nextX <= 0 || nextX >= maxX) {
          vx *= -1;
          nextX = clamp(nextX, 0, maxX);
        }

        if (nextY <= 0 || nextY >= maxY) {
          vy *= -1;
          nextY = clamp(nextY, 0, maxY);
        }

        if (vx !== velocity.x || vy !== velocity.y) {
          setVelocity({ x: vx, y: vy });
        }

        return { x: nextX, y: nextY };
      });
    }, 16);

    return () => clearInterval(interval);
  }, [running, velocity.x, velocity.y, boardSize.height, boardSize.width]);

  useEffect(() => {
    if (!running) {
      return undefined;
    }

    if (timeLeft <= 0) {
      setRunning(false);
      setScore(0);
      scoreRef.current = 0;
      setMessage(`Tempo esgotado. Reinicie para tentar novamente da fase ${levelRef.current}.`);
      return undefined;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [running, timeLeft]);

  const handleHit = (event) => {
    event?.preventDefault?.();

    const now = Date.now();
    if (now - lastTapRef.current < 80) return;
    lastTapRef.current = now;

    if (!running) {
      setRunning(true);
      setMessage(`Fase ${levelRef.current}: acerte ${TARGET_HITS} em ${timeLeft}s`);
    }

    const nextScore = scoreRef.current + 1;
    setScore(nextScore);
    scoreRef.current = nextScore;

    const speedUp = 0.05;
    setVelocity((prev) => ({
      x: (prev.x > 0 ? 1 : -1) * Math.min(Math.abs(prev.x) + speedUp, 7.2),
      y: (prev.y > 0 ? 1 : -1) * Math.min(Math.abs(prev.y) + speedUp, 7.2),
    }));

    if (nextScore >= TARGET_HITS) {
      const nextLevel = levelRef.current + 1;
      const nextTime = levelTimeLimit(nextLevel);

      setLevel(nextLevel);
      levelRef.current = nextLevel;
      setBest((oldBest) => Math.max(oldBest, nextLevel));
      setScore(0);
      scoreRef.current = 0;
      setTimeLeft(nextTime);
      setVelocity(levelBaseVelocity(nextLevel));
      setMessage(`Boa! Fase ${nextLevel}: ${TARGET_HITS} acertos em ${nextTime}s`);
    }

    setDot(randomPosition(boardSize.width, boardSize.height));
  };

  const resetGame = () => {
    const baseLevel = 1;
    setScore(0);
    scoreRef.current = 0;
    setLevel(baseLevel);
    levelRef.current = baseLevel;
    setTimeLeft(levelTimeLimit(baseLevel));
    setRunning(false);
    setVelocity(levelBaseVelocity(baseLevel));
    setDot(randomPosition(boardSize.width, boardSize.height));
    setMessage("Toque no ponto para iniciar a fase 1");
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
            <span>Fase: {level}</span>
            <span>Acertos: {score}/{TARGET_HITS}</span>
            <span>Tempo: {timeLeft}s</span>
            <span>Recorde: {best}</span>
          </div>
        </div>

        <div
          ref={boardRef}
          className="hero-game-board relative w-full overflow-hidden rounded-xl border border-white/10 bg-panel"
          style={boardStyle}
          role="application"
          aria-label="Mini game de reflexo"
        >
          <button
            type="button"
            className="hero-game-dot"
            onPointerDown={handleHit}
            onTouchStart={handleHit}
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
          <span>Acerte {TARGET_HITS} por fase. Cada fase fica mais rapida e com menos tempo.</span>
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
