import { LoadingStatus } from "@/type/ui";
import { UserInfo } from "@/type/user";

export interface UserState {
  user: UserInfo | null;
  status: LoadingStatus;
  error: null | string;
}
