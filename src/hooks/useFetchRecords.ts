import { requestRecords$ } from "@/lib/api/gameResult";
import { useEffect, useState } from "react";
import { LoadingStatus } from "@/type/ui";
import { GameAggregateRecord } from "@/type/game-results";

export const useFetchRecords = (limit: number) => {
  const [records, setRecords] = useState<GameAggregateRecord[]>([]);
  const [status, setStatus] = useState<LoadingStatus>("idle");

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setStatus("loading");
        const response = await requestRecords$(limit);
        setRecords(response);
        setStatus("success");
      } catch (error) {
        setStatus("failed");
        console.error({ error });
      }
    };

    fetchResults();
  }, []);

  return { status, records };
};
