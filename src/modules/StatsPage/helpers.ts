interface Result {
  name: string;
  count: number;
  isUser?: boolean;
}
export const generateHistogramData = (data: number[], userRecord: number) => {
  if (!data.length || !userRecord) {
    console.error("нет данных для графика");
    return null;
  }
  data.sort((a, b) => a - b);
  const minValue = 0;
  const maxValue = Math.ceil((data[data.length - 1] + 1) / 10) * 10;

  const size = (maxValue - minValue) / 10;
  let start = minValue;
  const result: Result[] = [];
  let dict: Result = {
    name: `${Math.floor(start)}-${Math.floor(start + size)}`,
    count: 0,
  };
  for (let i = 0; i < data.length; i++) {
    if (data[i] <= start + size) {
      if (start <= userRecord && start + size > userRecord) {
        dict.isUser = true;
      }
      dict.count++;
    } else {
      result.push(dict);
      start += size;
      dict = {
        name: `${Math.floor(start)}-${Math.floor(start + size)}`,
        count: 0,
      };
      i--;
    }
  }
  result.push(dict);

  return result;
};
