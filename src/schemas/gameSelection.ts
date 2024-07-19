import { z } from "zod";

const category = z.enum(["ussr", "rus", "world", "all"], {
  message: "нужно выбрать из списка",
});

const duration = z.enum(["COMMON", "QUICK", "LONG"], {
  message: "нужно выбрать из списка",
});

export const GameSelectionSchema = z.object({
  category,
  duration,
});

export type GameSelectionSchemaType = z.infer<typeof GameSelectionSchema>;
