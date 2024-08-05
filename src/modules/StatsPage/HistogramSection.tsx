import { FC, useEffect } from "react";
import { SecondaryHeader } from "@/components/ui/text";
import { Histogram } from "./Histogram";
import { generateHistogramData } from "./helpers";
import { useFetchScores } from "./useFetchScores";
import { GameAggregateScores } from "@/type/game-results";
import { useSelector } from "react-redux";
import { getTopUserRecord } from "@/store/records/selectors";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { fetchUserRecords } from "@/store/records/thunks";
import { ContentLoader } from "@/components/ContentLoader";
import { ErrorBlock } from "../../components/ErrorBlock";

// TODO когда будет больше данных фильтровать по категориям и длительности
const getTemporaryData = (data: GameAggregateScores[]): number[] =>
  data
    .reduce((acc, item) => [...acc, ...item.scores], [] as number[])
    .sort((a, b) => a - b);

export const HistogramSection: FC = () => {
  const { scores, status } = useFetchScores();
  // TODO когда будет больше  - данных фильтровать по категориям и длительности
  const userRecord = useSelector(getTopUserRecord);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (userRecord === null) {
      dispatch(fetchUserRecords());
    }
  }, [userRecord, dispatch]);

  if (status === "loading") {
    return <ContentLoader />;
  }
  if (status === "failed" || userRecord === null) {
    return <ErrorBlock text="Не удалось загрузить данные графика" />;
  }

  const data = getTemporaryData(scores);

  const histogramData = generateHistogramData(data, userRecord);
  if (!histogramData) {
    return (
      <SecondaryHeader className="text-center">
        Недостаточно данных для построения графика
      </SecondaryHeader>
    );
  }
  return (
    <section>
      <h2 className="invisible h-0">Гистограмма распределения результатов</h2>
      <Histogram data={histogramData} userRecord={userRecord} />
    </section>
  );
};
