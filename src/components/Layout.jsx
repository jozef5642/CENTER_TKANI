import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";

export const Layout = () => {
  const location = useLocation()
  const hideHeader = ['/sing_up', '/log_in']
  const shouldRoutes = hideHeader.includes(location.pathname)

  return (
    <>
      {!shouldRoutes && <Header />}
      <main>
        <Outlet />
      </main>
      {!shouldRoutes && <Footer />}
    </>
  );
};
