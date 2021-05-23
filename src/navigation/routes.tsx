const publicRoutes = [
  {
    path: '/home',
    loader: () => import('pages/home'),
  },
].filter(Boolean);

export default { publicRoutes }