import Text from "@/components/ui/text";
import { GameAggregateRecord } from "@/type/game-results";
import { FC } from "react";
import { Table, TableD, TableH, TableRow } from "@/components/ui/table";
import { TextData } from "@/const/textCategories";
import { cn } from "@/lib/utils/styles";
import { classPosition } from "./const";

export interface TableResultsProps {
  result: GameAggregateRecord;
}
export const TableRecords: FC<TableResultsProps> = ({ result }) => {
  const { bestResult, params } = result;
  const { category, duration } = params;
  return (
    <div className="w-full flex flex-col items-center  ">
      <Text tag="h3" className="text-lg my-2">
        {TextData.duration[duration]} игра / {TextData.category[category]}
      </Text>
      <div className="px-2 sm:px-4 w-full  max-h-[520px] sm:max-h-[720px] overflow-auto">
        <Table className="w-full ">
          <thead>
            <TableRow type="header">
              {["место", "игрок", "счет"].map((item) => (
                <TableH key={item}>{item}</TableH>
              ))}
            </TableRow>
          </thead>
          <tbody>
            {bestResult
              .sort((a, b) => b.score - a.score)
              .map(({ id, score, userName }, i) => (
                <TableRow key={id} type="body">
                  <TableD>
                    <div
                      className={cn(
                        "font-bold rounded-full flex items-center justify-center w-6 h-6",
                        classPosition[String(i + 1) as "1" | "2" | "3"]
                      )}
                    >
                      {i + 1}
                    </div>
                  </TableD>
                  <TableD className="font-bold">{userName}</TableD>
                  <TableD>{score}</TableD>
                </TableRow>
              ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
