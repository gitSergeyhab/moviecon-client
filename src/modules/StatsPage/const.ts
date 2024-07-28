import { TextData } from "@/const/textCategories";
import { CategoryTabTata, DurationTabTata } from "./types";

export const durationTabData: DurationTabTata[] = [
  { label: TextData.duration["QUICK"], value: "QUICK" },
  { label: TextData.duration["COMMON"], value: "COMMON" },
  { label: TextData.duration["LONG"], value: "LONG" },
];
export const defaultDuration = durationTabData[1].value;

export const categoryTabData: CategoryTabTata[] = [
  { label: TextData.category["all"], value: "all" },
  { label: TextData.category["world"], value: "world" },
  { label: TextData.category["ussr"], value: "ussr" },
  { label: TextData.category["rus"], value: "rus" },
];
export const defaultCategory = categoryTabData[1].value;
