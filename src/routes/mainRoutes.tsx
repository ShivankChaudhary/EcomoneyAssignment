import { Suspense, lazy } from "react";
import { MAIN_ROUTES } from "../config/appData";

export const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
export const ProfileSettingPage = lazy(
  () => import("../pages/ProfileSettingPage/ProfileSettingPage")
);
export const AccountSettingPage = lazy(
  () => import("../pages/AccountSettingPage/AccountSettingPage")
);
export const LogoutPage = lazy(() => import("../pages/LogoutPage/LogoutPage"));
const mainroutes = [
  {
    path: MAIN_ROUTES.home,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <HomePage />
      </Suspense>
    ),
  },
  {
    path: MAIN_ROUTES.profileSetting,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ProfileSettingPage />
      </Suspense>
    ),
  },
  {
    path: MAIN_ROUTES.accountSetting,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <AccountSettingPage />
      </Suspense>
    ),
  },
  {
    path: MAIN_ROUTES.logout,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <LogoutPage />
      </Suspense>
    ),
  },
];

export default mainroutes;
