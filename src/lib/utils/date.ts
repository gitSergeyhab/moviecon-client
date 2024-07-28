import dayjs from "dayjs";

const toDate = (date: string | Date, format: string): string =>
  dayjs(date).format(format);

export const DD_MM_YYYY = "DD.MM.YYYY";
export const DD_MM_YY = "DD.MM.YY";

export const DD_MM_YY_HH_MM = "DD.MM.YY HH:mm";

export const toDayMonthYearTime = (date: string | Date): string =>
  toDate(date, DD_MM_YY_HH_MM);
export const toDayMonthYear = (date: string | Date): string =>
  toDate(date, DD_MM_YY);
