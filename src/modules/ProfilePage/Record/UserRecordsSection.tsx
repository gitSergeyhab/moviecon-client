import { FC } from "react";
import { useFetchUserRecords } from "./useFetchUserRecords";
import { getResultSplitByDuration } from "../utils";
import { Spinner } from "@/components/Spinner";
import { TableRecords } from "./TableRecords";
import Text from "@/components/ui/text";

export const UserRecordsSection: FC = () => {
  const { records, status } = useFetchUserRecords();

  if (status === "loading")
    return (
      <div className="w-full flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );

  const { COMMON, LONG, QUICK } = getResultSplitByDuration(records);

  if (!COMMON && !LONG && !QUICK)
    return (
      <Text tag="p" className="text-center sm:text-xl text-xl font-bold mt-8">
        У вас нет пока рекордов
      </Text>
    );
  return (
    <div className="mx-auto bg-neutral-200/80 dark:bg-neutral-900/80  rounded-lg py-4 ">
      <Text tag="p" className="text-center sm:text-3xl text-2xl font-bold mt-8">
        Ваши рекорды
      </Text>
      <div className="grid grid-cols-1 gap-4">
        {Boolean(LONG) && <TableRecords results={LONG} duration={"LONG"} />}
        {Boolean(COMMON) && (
          <TableRecords results={COMMON} duration={"COMMON"} />
        )}
        {Boolean(QUICK) && <TableRecords results={QUICK} duration={"QUICK"} />}
      </div>
    </div>
  );
};
