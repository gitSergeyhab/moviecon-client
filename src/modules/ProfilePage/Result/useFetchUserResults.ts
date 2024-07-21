import { requestUserResults$, UserResultParams } from "@/lib/api/gameResult";
import { defaultQuery } from "../const";
import { useEffect, useState } from "react";
import { LoadingStatus } from "@/type/ui";
import { GameResult } from "@/type/game-results";

export const useFetchUserResults = () => {
  const [results, setResults] = useState<GameResult[]>([]);
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState<LoadingStatus>("idle");
  const [query, setQuery] = useState<UserResultParams>(defaultQuery);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setStatus("loading");
        const response = await requestUserResults$(query);
        setResults((prev) => [
          ...prev.slice(0, query.offset),
          ...response.results,
        ]);
        setCount(response.totalCount);
        setStatus("success");
      } catch (error) {
        setStatus("failed");
        console.error({ error });
      }
    };

    fetchResults();
  }, [query]);

  return { query, setQuery, results, status, count };
};
