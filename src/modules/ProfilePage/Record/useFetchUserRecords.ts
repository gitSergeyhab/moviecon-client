import { requestUserBestResults$ } from "@/lib/api/gameResult";
import { useEffect, useState } from "react";
import { LoadingStatus } from "@/type/ui";
import { GameAggregateResult } from "@/type/game-results";

export const useFetchUserRecords = () => {
  const [records, setRecords] = useState<GameAggregateResult[]>([]);
  const [status, setStatus] = useState<LoadingStatus>("idle");

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setStatus("loading");
        const response = await requestUserBestResults$();
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
