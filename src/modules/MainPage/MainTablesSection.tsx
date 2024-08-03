import { SecondaryHeader } from "@/components/ui/text";
import { FC } from "react";
import { useFetchRecords } from "../../hooks/useFetchRecords";
import { TableRecords } from "./RecordTable";
import { recordsTableCount } from "./const";
import { ContentLoader } from "@/components/ContentLoader";

export const MainTableSection: FC = () => {
  const { status, records } = useFetchRecords(recordsTableCount);

  if (status === "loading") {
    return <ContentLoader className="min-h-96" />;
  }

  if (!records || records.length === 0) return null;

  return (
    <section className="rounded-lg mt-8 md:mt-16">
      <div className=" bg-neutral-200/70 dark:bg-neutral-900/70 py-4 sm:py-8 rounded-lg">
        <SecondaryHeader className="text-center text-3xl md:text-5xl">
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
