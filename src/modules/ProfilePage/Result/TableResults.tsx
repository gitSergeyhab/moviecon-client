import { Table, TableD, TableH, TableRow } from "@/components/ui/table";
import { FC } from "react";
import { toDayMonthYearTime } from "@/lib/utils/date";
import { GameResult } from "@/type/game-results";
import { TextData } from "@/const/textCategories";
import { cn } from "@/lib/utils/styles";

const tdClasses = "p-1 sm:p-2 lg:px-4";
export interface TableResultsProps {
  results: GameResult[];
}
export const TableResults: FC<TableResultsProps> = ({ results }) => {
  return (
    <section className="bg-neutral-200/80 dark:bg-neutral-900/80  w-full flex flex-col items-center  py-4 rounded-b-lg">
      <div className=" w-full  max-h-[320px] sm:max-h-[720px] overflow-auto hide-scrollbar">
        <Table className="w-full">
          <thead>
            <TableRow type="header">
              {["дата", "счет", "категория", "игра", "статус"].map(
                (item, i, arr) => (
                  <TableH
                    className={cn(
                      tdClasses,
                      i === arr.length - 1 && "hidden xl:table-cell"
                    )}
                    key={item}
                  >
                    {item}
                  </TableH>
                )
              )}
            </TableRow>
          </thead>
          <tbody>
            {results.map(
              ({ category, createdAt, duration, id, status, score }) => (
                <TableRow key={id} type="body">
                  <TableD className={tdClasses}>
                    {toDayMonthYearTime(createdAt)}
                  </TableD>
                  <TableD className={tdClasses}>{score}</TableD>
                  <TableD className={tdClasses}>
                    {TextData.category[category] || category}
                  </TableD>
                  <TableD className={tdClasses}>
                    {TextData.duration[duration] || duration}
                  </TableD>
                  <TableD className={cn(tdClasses, "hidden xl:table-cell")}>
                    {TextData.status[status] || status}
                  </TableD>
                </TableRow>
              )
            )}
          </tbody>
        </Table>
      </div>
    </section>
  );
};
