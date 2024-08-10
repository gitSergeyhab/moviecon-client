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

interface GameImage {
  id: number;
  image: string;
  title: string;
}
export const gameImages: GameImage[] = [
  {
    id: 1,
    image: "/img/screens/dark-movie-by-frame",
    title: "фильмы по кадрам...",
  },
  {
    id: 2,
    image: "/img/screens/frame-by-movie-ussr",
    title: "... и кадры по фильмам",
  },
  {
    id: 3,
    image: "/img/screens/dark-movie-by-person",
    title: "фильмы по актерам...",
  },
  {
    id: 4,
    image: "/img/screens/person-by-movie-for",
    title: "... и актеров по фильмам",
  },
  {
    id: 5,
    image: "/img/screens/dark-person-by-photo",
    title: "актеров по фото...",
  },
  {
    id: 6,
    image: "/img/screens/three",
    title: "... и многое другое!",
  },
];
