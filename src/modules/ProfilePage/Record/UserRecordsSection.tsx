import { FC, useEffect } from "react";
import { getResultSplitByDuration } from "../utils";
import { TableRecords } from "./TableRecords";
import { PrimaryText, SecondaryHeader } from "@/components/ui/text";
import { useSelector } from "react-redux";
import {
  getUserRecords,
  getUserRecordsStatus,
} from "@/store/records/selectors";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { fetchUserRecords } from "@/store/records/thunks";
import { ContentLoader } from "@/components/ContentLoader";

export const UserRecordsSection: FC = () => {
  // const { records, status } = useFetchUserRecords();
  const records = useSelector(getUserRecords);
  const loadingStatus = useSelector(getUserRecordsStatus);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (records === null) {
      dispatch(fetchUserRecords());
    }
  }, [records, dispatch]);

  if (loadingStatus === "loading" || records === null) return <ContentLoader />;

  const { COMMON, LONG, QUICK } = getResultSplitByDuration(records);

  if (!COMMON && !LONG && !QUICK)
    return (
      <PrimaryText className="text-center font-bold m-auto mt-8">
        У вас нет пока рекордов
      </PrimaryText>
    );
  return (
    <div className="bg-neutral-200/80 dark:bg-neutral-900/80 mx-auto h-min py-4 rounded-lg  ">
      <SecondaryHeader className="text-center ">Ваши рекорды</SecondaryHeader>
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
