import { lazy } from "react";

const MainLazyPage = lazy(() => import('./Main'))

const UserPages  = {
  MainLazyPage
}

export {
  UserPages
}

