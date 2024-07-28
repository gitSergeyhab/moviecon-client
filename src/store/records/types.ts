import { UserAggregateRecords } from "@/type/game-results";
import { LoadingStatus } from "@/type/ui";

export interface RecordState {
  records: UserAggregateRecords[] | null;
  status: LoadingStatus;
}
