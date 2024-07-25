import { SecondaryHeader } from "@/components/ui/text";
import { FC } from "react";
import { useFetchRecords } from "./useFetchRecords";
import { Spinner } from "@/components/Spinner";
import { TableRecords } from "./RecordTable";

export const MainTableSection: FC = () => {
  const { status, records } = useFetchRecords();

  if (status === "loading") {
    return (
      <div className="max-w-[1200px] mx-auto px-0 sm:px-8 pb-12 pt-4 rounded-lg bg-neutral-500/50 flex justify-center">
        <Spinner size="xl" />
      </div>
    );
  }

  if (!records || records.length === 0) return null;

  return (
    <section className="bg-[url('/img/game-go.webp')] bg-no-repeat bg-cover bg-center rounded-lg">
      <div className=" bg-neutral-200/70 dark:bg-neutral-900/70 py-4 sm:py-8 rounded-lg">
        <SecondaryHeader className="text-center ">
          Наши рекордсмены
        </SecondaryHeader>
        <div className="grid xl:grid-cols-3 mt-4 lg:grid-cols-2 grid-cols-1 gap-4">
          {records.map((record) => (
            <TableRecords
              key={`${record.params.category}-${record.params.duration} `}
              result={record}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
