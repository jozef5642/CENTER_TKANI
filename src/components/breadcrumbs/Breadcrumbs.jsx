import React from "react";
import styles from "./Breadcrumbs.module.css";
import { Link, useLocation } from "react-router-dom";

export const Breadcrumbs = () => {
  const breadcrumbNameMap = {
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
      <ol className={styles.breadcrumbs}>
        <li>
          <Link className={styles.title} to="/">Главная</Link>
        </li>
        {pathnames.map((_, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          const name = breadcrumbNameMap[to] || "Неизвестно";

          return (
            <li key={to} className={styles.breadcrumbItem}>
              <span className={styles.separator}> &gt; </span>
              {isLast ? (
                <span className={styles.title_path}>{name}</span>
              ) : (
                <Link className={styles.title_path} to={to}>{name}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
