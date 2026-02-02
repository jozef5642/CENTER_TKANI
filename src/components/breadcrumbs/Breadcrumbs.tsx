import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Breadcrumbs = () => {
  const breadcrumbNameMap: Record<string, string> = {
    '/AboutUs': 'О нас',
    '/catalog_home': 'Для дома',
    '/discounts': 'Скидки и акции',
    '/personal_account': 'Личный кабинет',
    '/our_works' : 'Работы из наших тканей',
    '/Privacypolicy' : 'Политика конфиденциальности',
    '/login' : 'Регистрация',
    '/TermsofUse' : 'Пользовательское соглашение' 
  };
  

  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav aria-label="breadcrumb">
      <ol>
        <li>
          <Link to="/">Главная</Link>
        </li>
        {pathnames.map((_, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          const name = breadcrumbNameMap[to] || "Неизвестно";

          return (
            <li key={to}>
              <span> &gt; </span>
              {isLast ? (
                <span>{name}</span>
              ) : (
                <Link to={to}>{name}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

