"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Clock,
  Flame,
  RotateCcw,
  Sparkles,
  Trophy,
  Volume2,
  VolumeX,
} from "lucide-react";
import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  buildDeck,
  CARD_BACK,
  formatTime,
  GAME_LEVELS,
  type GameCard,
  type GameLevel,
} from "@/lib/game";
import { cn } from "@/lib/utils";

type Phase = "idle" | "playing" | "won" | "lost";

export default function MatchGame() {
  const [level, setLevel] = useState<GameLevel>(GAME_LEVELS[1]);
  const [deck, setDeck] = useState<GameCard[]>([]);
  const [flipped, setFlipped] = useState<string[]>([]);
  const [matched, setMatched] = useState<string[]>([]);
  const [locked, setLocked] = useState(false);
  const [moves, setMoves] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_LEVELS[1].seconds);
  const [phase, setPhase] = useState<Phase>("idle");
  const [soundOn, setSoundOn] = useState(true);
  const [bestScore, setBestScore] = useState(0);

  const matchAudio = useRef<HTMLAudioElement | null>(null);
  const missAudio = useRef<HTMLAudioElement | null>(null);
  const finishedRef = useRef(false);

  useEffect(() => {
    matchAudio.current = new Audio("/game/match.mp3");
    missAudio.current = new Audio("/game/miss.mp3");
    if (matchAudio.current) matchAudio.current.volume = 0.35;
    if (missAudio.current) missAudio.current.volume = 0.25;

    try {
      const saved = localStorage.getItem("match-game-best");
      if (saved) setBestScore(Number(saved) || 0);
    } catch {
      /* ignore */
    }
  }, []);

  const playSound = useCallback(
    (kind: "match" | "miss") => {
      if (!soundOn) return;
      const audio = kind === "match" ? matchAudio.current : missAudio.current;
      if (!audio) return;
      audio.currentTime = 0;
      void audio.play().catch(() => undefined);
    },
    [soundOn]
  );

  const startGame = useCallback(
    (nextLevel: GameLevel = level) => {
      finishedRef.current = false;
      setLevel(nextLevel);
      setDeck(buildDeck(nextLevel.pairs));
      setFlipped([]);
      setMatched([]);
      setLocked(false);
      setMoves(0);
      setScore(0);
      setTimeLeft(nextLevel.seconds);
      setPhase("playing");
    },
    [level]
  );

  // Countdown timer
  useEffect(() => {
    if (phase !== "playing") return;
    if (timeLeft <= 0) {
      if (!finishedRef.current) {
        finishedRef.current = true;
        setPhase("lost");
        playSound("miss");
      }
      return;
    }
    const id = window.setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);
    return () => window.clearInterval(id);
  }, [phase, timeLeft, playSound]);

  // Win check
  useEffect(() => {
    if (phase !== "playing" || deck.length === 0) return;
    if (matched.length !== deck.length) return;
    if (finishedRef.current) return;
    finishedRef.current = true;

    const pairCount = deck.length / 2;
    const base = pairCount * 10;
    const timeBonus = timeLeft * 2;
    const movePenalty = Math.max(0, moves - pairCount) * 2;
    const finalScore = Math.max(0, base + timeBonus - movePenalty + 50);

    setScore(finalScore);
    setPhase("won");
    playSound("match");
    try {
      const prev = Number(localStorage.getItem("match-game-best") || 0);
      if (finalScore > prev) {
        localStorage.setItem("match-game-best", String(finalScore));
        setBestScore(finalScore);
      }
    } catch {
      /* ignore */
    }
  }, [matched, deck.length, phase, timeLeft, moves, playSound]);

  const onCardClick = (uid: string) => {
    if (phase !== "playing" || locked) return;
    if (flipped.includes(uid) || matched.includes(uid)) return;
    if (flipped.length >= 2) return;

    const next = [...flipped, uid];
    setFlipped(next);

    if (next.length < 2) return;

    setMoves((m) => m + 1);
    setLocked(true);

    const [a, b] = next;
    const cardA = deck.find((c) => c.uid === a);
    const cardB = deck.find((c) => c.uid === b);

    if (cardA && cardB && cardA.characterId === cardB.characterId) {
      playSound("match");
      setMatched((prev) => [...prev, a, b]);
      setScore((s) => s + 10);
      setFlipped([]);
      setLocked(false);
    } else {
      playSound("miss");
      window.setTimeout(() => {
        setFlipped([]);
        setLocked(false);
      }, 700);
    }
  };

  const isFaceUp = (uid: string) =>
    flipped.includes(uid) || matched.includes(uid);

  const cols =
    level.pairs <= 4
      ? "grid-cols-4"
      : "grid-cols-3 sm:grid-cols-4 md:grid-cols-6";

  return (
    <div className="space-y-6">
      {/* HUD */}
      <div className="glass-card flex flex-wrap items-center justify-between gap-4 p-4 sm:p-5">
        <div className="flex flex-wrap items-center gap-2">
          {GAME_LEVELS.map((l) => (
            <button
              key={l.id}
              type="button"
              disabled={phase === "playing"}
              onClick={() => {
                setLevel(l);
                setTimeLeft(l.seconds);
                setPhase("idle");
                setDeck([]);
                setMatched([]);
                setFlipped([]);
                setMoves(0);
                setScore(0);
              }}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs font-semibold transition-all sm:text-sm",
                level.id === l.id
                  ? "border-rn-300/50 bg-rn-300/15 text-rn-200"
                  : "border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:text-slate-200",
                phase === "playing" && "cursor-not-allowed opacity-50"
              )}
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3 font-mono text-xs sm:text-sm">
          <Stat
            icon={<Clock className="h-3.5 w-3.5" />}
            label="Time"
            value={formatTime(timeLeft)}
            warn={phase === "playing" && timeLeft <= 10}
          />
          <Stat label="Moves" value={String(moves)} />
          <Stat label="Score" value={String(score)} />
          {bestScore > 0 ? (
            <Stat
              icon={<Trophy className="h-3.5 w-3.5 text-accent" />}
              label="Best"
              value={String(bestScore)}
            />
          ) : null}
          <button
            type="button"
            aria-label={soundOn ? "Mute sounds" : "Unmute sounds"}
            onClick={() => setSoundOn((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-rn-300/40 hover:text-rn-200"
          >
            {soundOn ? (
              <Volume2 className="h-4 w-4" />
            ) : (
              <VolumeX className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Board / intro */}
      <div className="relative min-h-[320px]">
        {phase === "idle" ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card flex flex-col items-center justify-center gap-6 px-6 py-16 text-center"
          >
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-rn-300/30 bg-rn-300/10 text-rn-200">
              <Sparkles className="h-7 w-7" />
            </div>
            <div className="max-w-md space-y-2">
              <h3 className="text-2xl font-bold text-white">
                Hero Match Challenge
              </h3>
              <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
                Flip two cards at a time. Match every hero before the timer runs
                out. Current level:{" "}
                <span className="text-rn-200">{level.description}</span>
              </p>
            </div>
            <button
              type="button"
              onClick={() => startGame(level)}
              className="btn-primary"
            >
              <Flame className="h-4 w-4" />
              Start Game
            </button>
          </motion.div>
        ) : (
          <div className={cn("grid gap-3 sm:gap-4", cols)}>
            {deck.map((card) => {
              const up = isFaceUp(card.uid);
              const isMatched = matched.includes(card.uid);
              return (
                <button
                  key={card.uid}
                  type="button"
                  aria-label={up ? card.name : "Hidden card"}
                  disabled={locked || isMatched || phase !== "playing"}
                  onClick={() => onCardClick(card.uid)}
                  className="group relative aspect-square [perspective:1000px]"
                >
                  <motion.div
                    className="relative h-full w-full"
                    initial={false}
                    animate={{ rotateY: up ? 180 : 0 }}
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Back */}
                    <div
                      className={cn(
                        "absolute inset-0 overflow-hidden rounded-xl border border-white/15 bg-navy-800 shadow-card",
                        "transition group-hover:border-rn-300/40"
                      )}
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <Image
                        src={CARD_BACK}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 30vw, 120px"
                        className="object-cover opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-rn-400/20 via-transparent to-accent/20" />
                      <span className="absolute inset-0 flex items-center justify-center font-mono text-lg font-bold text-white/90 drop-shadow">
                        ?
                      </span>
                    </div>

                    {/* Front */}
                    <div
                      className={cn(
                        "absolute inset-0 overflow-hidden rounded-xl border shadow-card",
                        isMatched
                          ? "border-accent/60 ring-2 ring-accent/30"
                          : "border-rn-300/40"
                      )}
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}
                    >
                      <Image
                        src={card.image}
                        alt={card.name}
                        fill
                        sizes="(max-width: 640px) 30vw, 120px"
                        className="object-cover object-top"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/90 to-transparent px-2 pb-2 pt-6">
                        <p className="truncate text-center text-[10px] font-semibold text-white sm:text-xs">
                          {card.name}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </button>
              );
            })}
          </div>
        )}

        {/* Win / lose overlay */}
        <AnimatePresence>
          {(phase === "won" || phase === "lost") && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-10 flex items-center justify-center rounded-2xl bg-navy-950/80 p-6 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.92, y: 12 }}
                animate={{ scale: 1, y: 0 }}
                className="glass-card max-w-sm space-y-4 p-8 text-center"
              >
                <div
                  className={cn(
                    "mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border",
                    phase === "won"
                      ? "border-accent/40 bg-accent/10 text-accent"
                      : "border-red-400/40 bg-red-400/10 text-red-300"
                  )}
                >
                  {phase === "won" ? (
                    <Trophy className="h-7 w-7" />
                  ) : (
                    <Clock className="h-7 w-7" />
                  )}
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {phase === "won" ? "You matched them all!" : "Time’s up"}
                </h3>
                <p className="text-sm text-slate-400">
                  {phase === "won"
                    ? `Final score ${score} · ${moves} moves · ${formatTime(timeLeft)} left`
                    : `You found ${matched.length / 2} of ${level.pairs} pairs. Try again!`}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => startGame(level)}
                    className="btn-primary"
                  >
                    <RotateCcw className="h-4 w-4" />
                    Play Again
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setPhase("idle");
                      setDeck([]);
                    }}
                    className="btn-ghost"
                  >
                    Change Level
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {phase === "playing" ? (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => startGame(level)}
            className="btn-ghost text-xs"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Restart
          </button>
        </div>
      ) : null}
    </div>
  );
}

function Stat({
  label,
  value,
  icon,
  warn,
}: {
  label: string;
  value: string;
  icon?: ReactNode;
  warn?: boolean;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5",
        warn && "border-red-400/40 bg-red-400/10 text-red-300"
      )}
    >
      {icon}
      <span className="text-slate-500">{label}</span>
      <span className={cn("font-semibold text-slate-100", warn && "text-red-200")}>
        {value}
      </span>
    </div>
  );
}
