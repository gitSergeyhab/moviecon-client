export const classPosition: Record<"1" | "2" | "3", string> = {
  1: "bg-yellow-600",
  2: "bg-neutral-500",
  3: "bg-orange-500",
};

export const features: { feature: string; description: string }[] = [
  {
    feature: "Угадайте актеров по фильмам:",
    description:
      "Вспомните любимые фильмы и попробуйте назвать актеров, которые в них снимались.",
  },
  {
    feature: "Угадайте фильмы по актерам:",
    description: "Увидев актера, попробуйте угадать, в каком фильме он играл.",
  },
  {
    feature: "Угадайте актеров по фото:",
    description: "Посмотрите на фото и попробуйте вспомнить, кто этот актер.",
  },
  {
    feature: "И многое другое...",
    description: " ",
  },
];

export const recordsTableCount = 3;
