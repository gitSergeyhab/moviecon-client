import { UserResultParams } from "@/lib/api/gameResult";
import { GameCategory, GameDuration } from "@/type/game";
import { Option } from "@/type/option";

export type CategoryOption = Option<GameCategory | "none">;
export type DurationOption = Option<GameDuration | "none">;
export type SortOption = Option<"-1" | "1">;

export const categoryOptions: CategoryOption[] = [
  { value: "none", label: "Все категории" },
  { value: "all", label: "Все фильмы" },
  { value: "ussr", label: "Советское кино" },
  { value: "rus", label: "Российское кино" },
  { value: "world", label: "Мировое кино" },
];

export const sortOptions: SortOption[] = [
  { value: "-1", label: "сначала новые" },
  { value: "1", label: "Сначала старые" },
];

export const durationOptions: DurationOption[] = [
  { value: "none", label: "Все категории" },
  { value: "QUICK", label: "Быстрая" },
  { value: "COMMON", label: "Стандартная" },
  { value: "LONG", label: "Большая" },
];

export const defaultQuery: UserResultParams = {
  offset: 0,
  limit: 10,
  sort: "-1",
  category: "none",
  duration: "none",
  type: "SINGLE",
};
