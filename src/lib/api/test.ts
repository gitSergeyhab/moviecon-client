import { request } from ".";

export const requestTest = () => {
  return request.get("/test/public/");
};

export const requestProtectedTest = () => {
  return request.get("/test/protected/");
};

export const requestAdminTest = () => {
  return request.get("/test/admin/");
};
