import { FC } from "react";
import { TableResults } from "./TableResults";
import { PrimaryText } from "@/components/ui/text";
import { GameResult } from "@/type/game-results";
import { LoadingStatus } from "@/type/ui";
import { ContentLoader } from "@/components/ContentLoader";

export interface TableResultsBlockProps {
  results: GameResult[];
  status: LoadingStatus;
  count: number;
}
export const TableResultsBlock: FC<TableResultsBlockProps> = ({
  count,
  results,
  status,
}) => {
  if ((status === "loading" || status === "idle") && !results.length) {
    return <ContentLoader />;
  }
  console.log({ count, results, status });

  if (!count || !results.length) {
    return (
      <PrimaryText className="text-center font-bold mt-8">
        У вас пока нет игр в выбранных категориях
      </PrimaryText>
    );
  }
  return <TableResults results={results} />;
};
