import { useSelector } from "react-redux";
import { Table, TableD, TableRow } from "@/components/ui/table";
import {
  getLevelInfo,
  getCurrentTestIndex,
  getMadeErrors,
  getMadeSkips,
  getLevelsCount,
} from "@/store/game/selectors";

interface TableData {
  label: string;
  value: string;
}

export const InfoSection = () => {
  const levelInfo = useSelector(getLevelInfo);
  const testIndex = useSelector(getCurrentTestIndex);

  const madeErrors = useSelector(getMadeErrors);
  const madeSkips = useSelector(getMadeSkips);
  const levelsCount = useSelector(getLevelsCount);

  if (levelInfo === null) {
    console.error("невозможно получить статус вопроса");
    return <p>невозможно получить данные уровня</p>;
  }

  const { errors, number, questions, skips } = levelInfo;

  const tableData: TableData[] = [
    { label: "уровень", value: `${number} / ${levelsCount}` },
    { label: "вопрос", value: `${testIndex + 1} / ${questions}` },
    { label: "ошибки", value: `${madeErrors} / ${errors}` },
    { label: "пропуски", value: `${madeSkips} / ${skips}` },
  ];
  return (
    <section className="py-2 flex w-full justify-center items-center">
      <Table>
        <tbody>
          {tableData.map(({ label, value }) => (
            <TableRow type="body" key={label}>
              <TableD className="py-1">{label}</TableD>
              <TableD className="py-1">
                <div className="w-full text-center">{value}</div>
              </TableD>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </section>
  );
};
