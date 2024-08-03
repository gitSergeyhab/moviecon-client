import { Table, TableD, TableH, TableRow } from "@/components/ui/table";
import { FC } from "react";
import { toDayMonthYearTime } from "@/lib/utils/date";
import { GameResult } from "@/type/game-results";
import { GameDuration } from "@/type/game";
import { TextData } from "@/const/textCategories";
import { ItemHeader } from "@/components/ui/text";

export interface TableResultsProps {
  results: GameResult[];
  duration: GameDuration;
}
export const TableRecords: FC<TableResultsProps> = ({ results, duration }) => {
  return (
    <div className="flex flex-col items-center w-full">
      <ItemHeader className="my-2">
        {TextData.duration[duration]} Игра
      </ItemHeader>
      <div className="w-full max-h-[520px] overflow-auto px-2 sm:px-4 sm:max-h-[720px]">
        <Table className="w-full">
          <thead>
            <TableRow type="header">
              {["дата", "счет", "категория", "статус"].map((item) => (
                <TableH key={item}>{item}</TableH>
              ))}
            </TableRow>
          </thead>
          <tbody>
            {results
              .sort((a, b) => b.score - a.score)
              .map(({ category, createdAt, id, status, score }) => (
                <TableRow key={id} type="body">
                  <TableD>{toDayMonthYearTime(createdAt)}</TableD>
                  <TableD>{score}</TableD>
                  <TableD>{TextData.category[category] || category}</TableD>
                  <TableD>{TextData.status[status] || status}</TableD>
                </TableRow>
              ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
