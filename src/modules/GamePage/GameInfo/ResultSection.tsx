import { SecondaryHeader } from "@/components/ui/headers";
import { Table, TableD, TableH, TableRow } from "@/components/ui/table";
import { LevelResult } from "@/type/game";
import { FC } from "react";

interface TableData {
  title: string;
  value: string | number;
}
export interface PrevLevelSectionProps {
  levelResult: LevelResult;
  totalScore: number;
  isGameOver: boolean;
}
export const ResultSection: FC<PrevLevelSectionProps> = ({
  levelResult,
  totalScore,
  isGameOver,
}) => {
  const { answersScore, errorBonus, levelScore, skipBonus, timeBonus } =
    levelResult;

  const tableData: TableData[] = [
    { title: "балы за ответы", value: answersScore },
    { title: "балы за неиспользованное право на ошибку", value: errorBonus },
    { title: "балы за неиспользованное право на пропуск", value: skipBonus },
    { title: "балы за время", value: timeBonus },
  ];

  return (
    <section>
      <SecondaryHeader>Результаты уровня</SecondaryHeader>
      <div className="container mx-auto p-4 flex justify-center">
        <Table className="min-w-48">
          <thead>
            <TableRow type="header">
              {["критерии", "результат"].map((item) => (
                <TableH key={item}>{item}</TableH>
              ))}
            </TableRow>
          </thead>
          <tbody>
            {tableData.map(({ title, value }) => (
              <TableRow key={title} type="body">
                <TableD>{title}</TableD>
                <TableD>{value}</TableD>
              </TableRow>
            ))}
            <TableRow type="body" className="border-t-4 border-t-slate-200">
              {["итог уровня", levelScore].map((item) => (
                <TableD key={item}>{item}</TableD>
              ))}
            </TableRow>
            {!isGameOver && (
              <TableRow type="body">
                {["промежуточный итог игры", totalScore].map((item) => (
                  <TableD key={item}>{item}</TableD>
                ))}
              </TableRow>
            )}
          </tbody>
        </Table>
      </div>
    </section>
  );
};
