// import { login } from "@/lib/api/auth";
// import { createAsyncThunk } from "@reduxjs/toolkit";

import { requestUser } from "@/lib/api/auth";
import appRoutes, { publicRoutes } from "@/lib/configs/routes/routes";
import TokenService from "@/lib/utils/tokenService";
import { ApiError } from "@/type/api";
import { UserInfo } from "@/type/user";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { NavigateFunction } from "react-router-dom";

const QUERY_KEY = "back";

// // Registration thunk
// export const registerUser = createAsyncThunk(
//     'auth/registerUser',
//     async (userData: { name: string; email: string; password: string }, { rejectWithValue }) => {
//       try {
//         // const response = await axios.post('/api/register', userData);
//         const data = await login(userData);
//         const {access, refresh} = data;
//         // return response.data;
//       } catch (err: any) {
//         return rejectWithValue(err.response.data);
//       }
//     }
//   );

//   // Login thunk
//   export const loginUser = createAsyncThunk(
//     'auth/loginUser',
//     async (userData: { email: string; password: string }, { rejectWithValue }) => {
//       try {
//         const response = await axios.post('/api/login', userData);
//         return response.data;
//       } catch (err: any) {
//         return rejectWithValue(err.response.data);
//       }
//     }
//   );

export const fetchUser = createAsyncThunk<
  UserInfo | null,
  NavigateFunction,
  { rejectValue: string }
>("auth/fetchUser", async (navigate: NavigateFunction, { rejectWithValue }) => {
  const token = TokenService.accessToken;

  if (!token) {
    const searchParams = new URLSearchParams(location.search);
    const pathname = location.pathname;
    const root = pathname.split("/");
    if (!root.length || (publicRoutes as string[]).includes(`/${root[0]}`)) {
      return null;
    }
    const backQuery = searchParams.get(QUERY_KEY) || pathname.slice(1);
    const redirect = backQuery
      ? `${appRoutes.auth.login}?${QUERY_KEY}=${backQuery}`
      : `${appRoutes.auth.login}`;
    navigate(redirect);
    return null;
  }
  try {
    const response = await requestUser();
    const { tokens, ...user } = response;
    TokenService.accessToken = tokens.access;
    TokenService.refreshToken = tokens.refresh;
    return user;
  } catch (err) {
    return rejectWithValue((err as ApiError).message);
  }
});
