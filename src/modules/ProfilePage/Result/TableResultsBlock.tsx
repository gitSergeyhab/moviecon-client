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

  if (!count || !results.length) {
    return (
      <PrimaryText className="mt-8 text-center font-bold">
        У вас пока нет игр в выбранных категориях
      </PrimaryText>
    );
  }
  return <TableResults results={results} />;
};
