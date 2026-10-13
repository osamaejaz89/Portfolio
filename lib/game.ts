export interface GameCharacter {
  id: string;
  name: string;
  image: string;
}

export interface GameLevel {
  id: "easy" | "medium" | "hard";
  label: string;
  pairs: number;
  seconds: number;
  description: string;
}

export const GAME_CHARACTERS: GameCharacter[] = [
  { id: "ironman", name: "Iron Man", image: "/game/ironman.jpg" },
  { id: "thor", name: "Thor", image: "/game/thor.jpg" },
  { id: "hulk", name: "Hulk", image: "/game/hulk.jpg" },
  { id: "hawkeye", name: "Hawkeye", image: "/game/hawkeye.jpg" },
  { id: "warmachine", name: "War Machine", image: "/game/warmachine.jpg" },
  { id: "blackwidow", name: "Black Widow", image: "/game/blackwidow.jpg" },
];

export const GAME_LEVELS: GameLevel[] = [
  {
    id: "easy",
    label: "Easy",
    pairs: 4,
    seconds: 60,
    description: "4 pairs · 60 seconds",
  },
  {
    id: "medium",
    label: "Medium",
    pairs: 6,
    seconds: 50,
    description: "6 pairs · 50 seconds",
  },
  {
    id: "hard",
    label: "Hard",
    pairs: 6,
    seconds: 30,
    description: "6 pairs · 30 seconds",
  },
];

export const CARD_BACK = "/game/card-back.jpg";

export interface GameCard {
  uid: string;
  characterId: string;
  name: string;
  image: string;
}

/** Fisher–Yates shuffle (immutable). */
export function shuffle<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function buildDeck(pairs: number): GameCard[] {
  const selected = shuffle(GAME_CHARACTERS).slice(0, pairs);
  const doubled = selected.flatMap((c) => [
    {
      uid: `${c.id}-a`,
      characterId: c.id,
      name: c.name,
      image: c.image,
    },
    {
      uid: `${c.id}-b`,
      characterId: c.id,
      name: c.name,
      image: c.image,
    },
  ]);
  return shuffle(doubled);
}

export function formatTime(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}
