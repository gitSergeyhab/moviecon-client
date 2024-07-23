import { TestType } from "@/type/game";

export type Field = "name" | "enName" | "year" | "imageUrl" | "slogan";
export type BlockType = "primary" | "secondary" | "enName" | "image";

export type BlockField = Record<BlockType, Field | null>;

export const VariantBlocksByTestType: Record<TestType, BlockField> = {
  YearByMovie: {
    enName: null,
    primary: "year",
    secondary: null,
    image: null,
  },
  SloganByMovie: {
    enName: null,
    primary: "slogan",
    secondary: null,
    image: null,
  },
  PhotoByPerson: {
    enName: null,
    primary: null,
    secondary: null,
    image: "imageUrl",
  },
  PersonByPhoto: {
    enName: null,
    primary: "name",
    secondary: null,
    image: null,
  },
  PersonByMovie: {
    enName: null,
    primary: "name",
    secondary: null,
    image: "imageUrl",
  },
  MovieByYear: {
    enName: "enName",
    primary: "name",
    secondary: null,
    image: "imageUrl",
  },
  FrameByMovie: {
    enName: null,
    primary: null,
    secondary: null,
    image: "imageUrl",
  },
  MovieByBudget: {
    enName: "enName",
    primary: "name",
    secondary: "year",
    image: "imageUrl",
  },
  MovieByFrame: {
    enName: "enName",
    primary: "name",
    secondary: "year",
    image: null,
  },
  MovieByPerson: {
    enName: "enName",
    primary: "name",
    secondary: "year",
    image: "imageUrl",
  },
  MovieBySlogan: {
    enName: "enName",
    primary: "name",
    secondary: "year",
    image: "imageUrl",
  },
};

export const QuestionBlocksByTestType: Record<TestType, BlockField> = {
  YearByMovie: {
    enName: "enName",
    primary: "name",
    secondary: null,
    image: "imageUrl",
  },
  SloganByMovie: {
    enName: "enName",
    primary: "name",
    secondary: "year",
    image: "imageUrl",
  },
  PhotoByPerson: {
    enName: null,
    primary: "name",
    secondary: null,
    image: null,
  },
  PersonByPhoto: {
    enName: null,
    primary: null,
    secondary: null,
    image: "imageUrl",
  },
  PersonByMovie: {
    enName: "enName",
    primary: "name",
    secondary: "year",
    image: "imageUrl",
  },
  MovieByYear: {
    enName: null,
    primary: "year",
    secondary: null,
    image: null,
  },
  FrameByMovie: {
    enName: "enName",
    primary: "name",
    secondary: "year",
    image: null,
  },
  MovieByBudget: {
    enName: null,
    primary: null,
    secondary: null,
    image: null,
  },
  MovieByFrame: {
    enName: null,
    primary: null,
    secondary: null,
    image: "imageUrl",
  },
  MovieByPerson: {
    enName: null,
    primary: "name",
    secondary: null,
    image: "imageUrl",
  },
  MovieBySlogan: {
    enName: null,
    primary: "slogan",
    secondary: null,
    image: null,
  },
};
