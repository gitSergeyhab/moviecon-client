import { requestUserRecords$ } from "@/lib/api/gameResult";
import { useEffect, useState } from "react";
import { LoadingStatus } from "@/type/ui";
import { UserAggregateRecords } from "@/type/game-results";

export const useFetchUserRecords = () => {
  const [records, setRecords] = useState<UserAggregateRecords[]>([]);
  const [status, setStatus] = useState<LoadingStatus>("idle");

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setStatus("loading");
        const response = await requestUserRecords$();
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
