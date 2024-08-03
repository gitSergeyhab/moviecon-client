import { FC } from "react";
import { useFetchRecords } from "@/hooks/useFetchRecords";
import { GameCategory, GameDuration } from "@/type/game";
import { PrimaryText, SecondaryHeader } from "@/components/ui/text";
import { TableTopResults } from "./TableTopResults";
import { ContentLoader } from "@/components/ContentLoader";

export interface TablesSectionProps {
  duration: GameDuration;
  category: GameCategory;
}
export const TablesSection: FC<TablesSectionProps> = ({
  duration,
  category,
}) => {
  const { status, records } = useFetchRecords(50);

  if (status === "loading") {
    return <ContentLoader />;
  }
  const filteredRecords = records.find(
    ({ params }) => params.category === category && params.duration === duration
  );

  if (!filteredRecords || !filteredRecords.bestResult.length) {
    return (
      <PrimaryText className="text-center ">
        Нет данных для отображения
      </PrimaryText>
    );
  }
  return (
    <section className="bg-transparent rounded-lg">
      <div className=" bg-neutral-200/20 dark:bg-neutral-900/20 rounded-lg py-4 sm:py-8">
        <SecondaryHeader className="text-center ">
          Наши рекордсмены
        </SecondaryHeader>
        <TableTopResults result={filteredRecords} />
      </div>
    </section>
  );
};
