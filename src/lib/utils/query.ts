type Params = Record<string, string | number | undefined>;

export const createQueryString = (params: Params): string => {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== "none") {
      searchParams.append(key, value.toString());
    }
  });

  return searchParams.toString();
};
