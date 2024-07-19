import { request } from "./";

export const requestTest = () => {
  return request.get("/test/public/");
};

export const requestProtectedTest = () => {
  return request.get("/test/protected/");
};

export const requestAdminTest = () => {
  return request.get("/test/admin/");
};

export const requestRandomQuestionList$ = () => {
  return request.get(`/test/random-quests?category=al&count=wer`);
};

export const requestTestById$ = () => {
  return request.get("/test/quest/65282ed1c23dc783b0e38438");
};
