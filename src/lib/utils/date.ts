import dayjs from "dayjs";

const toDate = (date: string | Date, format: string): string =>
  dayjs(date).format(format);

export const DD_MM_YYYY = "DD.MM.YYYY";
export const DD_MM_YYYY_HH_MM = "DD.MM.YYYY HH:mm";

export const toDayMonthYearTime = (date: string | Date): string =>
  toDate(date, DD_MM_YYYY_HH_MM);
