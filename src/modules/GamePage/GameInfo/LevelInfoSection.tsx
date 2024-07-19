import { SecondaryHeader } from "@/components/ui/headers";
import { Table, TableD, TableRow } from "@/components/ui/table";
import { Level } from "@/type/game";
import { FC } from "react";

interface TableData {
  title: string;
  value: string | number;
}

export interface LevelInfoSectionProps {
  level: Level;
}
export const LevelInfoSection: FC<LevelInfoSectionProps> = ({ level }) => {
  const { errors, number, questions, skips, time } = level;

  const tableData: TableData[] = [
    { title: "номер уровня", value: number },
    { title: "количество вопросов", value: questions },
    { title: "максимальное количество ошибок", value: errors },
    { title: "максимальное количество пропусков", value: skips },
    { title: "базовое время на уровень, секунд", value: time / 1000 },
  ];

  return (
    <section>
      <SecondaryHeader>Следующий уровень</SecondaryHeader>
      <div className="container mx-auto p-4 flex justify-center">
        <Table className="min-w-48">
          <tbody>
            {tableData.map(({ title, value }) => (
              <TableRow key={title} type="body">
                <TableD>{title}</TableD>
                <TableD>{value}</TableD>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </div>
    </section>
  );
};
