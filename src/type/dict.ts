import { ZodString } from "zod";

export type Dict = Record<string, string | number>;
// eslint-disable-next-line
export type AnyDict = Record<string, any>;

export type ZodStringDict = Record<string, ZodString>;
