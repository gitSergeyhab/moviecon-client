// export interface BaseUser {
//   name: string;
//   email: string;
//   password: string;
// }

// export type UserNoPassword = Omit<BaseUser, "password">;
// export type UserNoName = Omit<BaseUser, "name">;

// export interface UserWithTokens extends UserNoPassword {
//   access: string;
//   refresh: string;
// }

export type UserRole = "USER" | "ADMIN";

export interface UserTokens {
  access: string;
  refresh: string;
}
export interface UserLoginData {
  email: string;
  password: string;
}

export interface UserRegisterData extends UserLoginData {
  name: string;
}

export interface UserInfo {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  points?: number;
  role: UserRole;
}

export type UserWithTokens = UserInfo & { tokens: UserTokens };
