import { requestScores$ } from "@/lib/api/gameResult";
import { useEffect, useState } from "react";
import { LoadingStatus } from "@/type/ui";
import { GameAggregateScores } from "@/type/game-results";

export const useFetchScores = () => {
  const [scores, setScores] = useState<GameAggregateScores[]>([]);
  const [status, setStatus] = useState<LoadingStatus>("idle");

  useEffect(() => {
    const fetchScores = async () => {
      try {
        setStatus("loading");
        const response = await requestScores$();
        setScores(response);
        setStatus("success");
      } catch (error) {
        setStatus("failed");
        console.error({ error });
      }
    };

    fetchScores();
  }, []);

  return { status, scores };
};
