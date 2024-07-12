import { UserInfo } from "@/type/user";

export interface UserState {
  user: UserInfo | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: null | string;
}
