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
    <div className="w-full flex flex-col items-center">
      <ItemHeader className="my-2">
        {TextData.duration[duration]} Игра
      </ItemHeader>
      <div className="px-2 sm:px-4 w-full  max-h-[520px] sm:max-h-[720px] overflow-auto">
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
