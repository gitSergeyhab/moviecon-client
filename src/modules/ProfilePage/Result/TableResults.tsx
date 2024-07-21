import { SecondaryHeader } from "@/components/ui/headers";
import { Table, TableD, TableH, TableRow } from "@/components/ui/table";
import { FC } from "react";
import { TextData } from "../const";
import { toDayMonthYearTime } from "@/lib/utils/date";
import { GameResult } from "@/type/game-results";
export interface TableResultsProps {
  results: GameResult[];
}
export const TableResults: FC<TableResultsProps> = ({ results }) => {
  return (
    <section className="w-full flex flex-col items-center bg-neutral-200/80 dark:bg-neutral-900/80  rounded-b-lg py-4 ">
      <SecondaryHeader>Ваши результаты</SecondaryHeader>
      <div className="px-2 sm:px-4 w-full  max-h-[520px] sm:max-h-[720px] overflow-auto">
        <Table className="w-full">
          <thead>
            <TableRow type="header">
              {["дата", "счет", "категория", "игра", "статус"].map((item) => (
                <TableH key={item}>{item}</TableH>
              ))}
            </TableRow>
          </thead>
          <tbody>
            {results.map(
              ({ category, createdAt, duration, id, status, score }) => (
                <TableRow key={id} type="body">
                  <TableD>{toDayMonthYearTime(createdAt)}</TableD>
                  <TableD>{score}</TableD>
                  <TableD>{TextData.category[category] || category}</TableD>
                  <TableD>{TextData.duration[duration] || duration}</TableD>
                  <TableD>{TextData.status[status] || status}</TableD>
                </TableRow>
              )
            )}
          </tbody>
        </Table>
      </div>
    </section>
  );
};
