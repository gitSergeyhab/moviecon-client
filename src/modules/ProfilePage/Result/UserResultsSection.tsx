import { FC } from "react";
import {
  categoryOptions,
  durationOptions,
  defaultQuery,
  sortOptions,
} from "../const";
import { Button } from "@/components/ui/button";
import { useFetchUserResults } from "./useFetchUserResults";
import { Spinner } from "@/components/Spinner";
import { TableResults } from "./TableResults";
import { FilterSelect } from "./FilterSelect";
import Text from "@/components/ui/text";

export const UserResultsSection: FC = () => {
  const { query, setQuery, results, status, count } = useFetchUserResults();

  const setQueryField = (key: keyof typeof query, value: string): void => {
    setQuery((prev) => ({ ...prev, [key]: value, offset: 0 }));
  };

  const handleSortChange = (value: string): void =>
    setQueryField("sort", value);

  const handleDurationChange = (value: string): void =>
    setQueryField("duration", value);

  const handleCategoryChange = (value: string): void =>
    setQueryField("category", value);

  const handlerLoadMoreBtn = (): void =>
    setQuery((prev) => ({ ...prev, offset: prev.offset + defaultQuery.limit }));

  const loadMoreBtnContent =
    status === "loading" ? <Spinner size="2xs" /> : "Загрузить еще";

  return (
    <div className="mx-auto ">
      <div className="p-4 flex flex-wrap justify-center gap-2 bg-neutral-500 rounded-t-lg">
        <FilterSelect
          onValueChange={handleCategoryChange}
          options={categoryOptions}
          value={query.category}
        />
        <FilterSelect
          onValueChange={handleDurationChange}
          options={durationOptions}
          value={query.duration}
        />
        <FilterSelect
          onValueChange={handleSortChange}
          options={sortOptions}
          value={query.sort}
        />
      </div>

      {!count && (
        <Text tag="p" className="text-center sm:text-xl text-xl font-bold mt-8">
          У вас нет пока игр в выбранных категориях
        </Text>
      )}
      {!!count && (
        <>
          <TableResults results={results} />
          <Button
            className="w-full py-6 mt-2"
            size={"lg"}
            variant={"outline"}
            disabled={status === "loading" || count === results.length}
            onClick={handlerLoadMoreBtn}
          >
            {loadMoreBtnContent}
          </Button>
        </>
      )}
    </div>
  );
};
