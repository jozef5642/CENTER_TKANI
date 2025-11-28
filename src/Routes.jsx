import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  TKAN_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
  ABOUTUS_ROUTE,
  MAIN_PAGE
} from "./utils/consts";

import { Basket } from "./pages/basket/Basket";
import { MainPage } from "./pages/mainpage/MainPage";
import { Auth } from "./pages/auth/Auth";
import { Tkanpage } from "./pages/tkanpage/Tkanpage";
import { Registration } from "./pages/registration/Registration";
import { AboutUs } from "./pages/aboutUs/AboutUs";
import { Admin } from "./pages/admin/Admin";
import { Shop } from "./pages/shop/Shop";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    element: <Admin />,
  },
  {
    path: BASKET_ROUTE,
    element: <Basket />,
  },
];

export const publicRoutes = [
  {
    path: MAIN_PAGE,
    element: <MainPage />,
  },
  {
    path: SHOP_ROUTE,
    element: <Shop />,
  },
  {
    path: LOGIN_ROUTE,
    element: <Auth />,
  },
  {
    path: REGISTRATION_ROUTE,
    element: <Registration />,
  },
  {
    path: ABOUTUS_ROUTE,
    element: <AboutUs/>,
  },
  {
    path: TKAN_ROUTE + "/:id",
    element: <Tkanpage/>,
  },

];