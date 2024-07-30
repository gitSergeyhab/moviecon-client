import { GameDuration, GameCategory } from "@/type/game";
import { Option } from "@/type/option";

export type DurationOption = Option<GameDuration>;

export const durationOptions: DurationOption[] = [
  { label: "Быстрая", value: "QUICK" },
  { label: "Стандартная", value: "COMMON" },
  { label: "Большая", value: "LONG" },
];

export type CategoryOption = Option<GameCategory>;

export const categoryOptions: CategoryOption[] = [
  { label: "Все фильмы", value: "all" },
  { label: "Мировое кино", value: "world" },
  { label: "Советское кино", value: "ussr" },
  { label: "Российское кино", value: "rus" },
];

export const title = "Выбор игры";
