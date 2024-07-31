const appRoutes = {
  main: "/",
  auth: {
    login: "/login",
    register: "/register",
  },
  profile: "/profile",
  about: "/about",
  gameSelection: "/game",
  game: "/game/:gameId",
  stats: "/stats",
  admin: "/admin",
  notFound: "not-found-page",
} as const;
export default appRoutes;

export const protectedRoutes = [
  appRoutes.game,
  appRoutes.profile,
  appRoutes.stats,
];

export const publicRoutes = [
  appRoutes.main,
  appRoutes.about,
  appRoutes.auth.login,
  appRoutes.auth.register,
];

export const adminRoutes = [appRoutes.admin];
