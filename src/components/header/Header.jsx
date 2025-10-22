import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.top_bar}>
        <a href="" className={styles.link}>
          Мы на WB
        </a>
        <nav className={styles.navigation}>
          <Link to="" className={styles.link}>
            О нас
          </Link>
          <Link to="/" className={styles.link}>
            Оплата и доставка
          </Link>
          <Link to="/" className={styles.link}>
            Часто задаваемые вопросы
          </Link>
          <Link to="/" className={styles.link}>
            Программа лояльности
          </Link>
          <Link to="/" className={styles.link}>
            Контакты
          </Link>
        </nav>
        <a href="/" className={styles.link}>
          Мы на OZON
        </a>
      </section>
      <section className={styles.bottom_bar}>
        <div className={styles.transitions}>
          <button className={styles.catalog}>Каталог</button>
          <select id="select1" className={styles.catalog} name="Catalog">
            <option value="">
              Каталог2
            </option>
            <option value=""></option>
          </select>
          <Link to="/" className={`${styles.our_work} ${styles.link}`}>
            Работы из наших тканей
          </Link>
          <Link to="/" className={`${styles.sale} ${styles.link}`}>
            Скидки и акции
          </Link>
        </div>
        <div className={styles.logo}>
          <img src="/Logo Icon.svg" alt="Логотип" className={styles.logo_img} />
          <img
            src="/CENTER TKANI.svg"
            alt="Название"
            className={styles.logo_text}
          />
        </div>
        <div className={styles.search}>
          <div className={styles.search_container}>
            <input
              type="text"
              placeholder="Поиск по сайту"
              className={styles.search_input}
              name="search"
            />
            <img
              src="/Loupe.svg"
              alt="Иконка поиска"
              className={styles.search_img}
            />
          </div>
          <Link to="/log_in">
            <img src="/User Icon.svg" alt="" className={styles.user_img} />
          </Link>
          <Link to="/">
            <img src="/Bag Icon.svg" alt="" className={styles.bag_img} />
          </Link>
        </div>
      </section>
    </div>
  );
};
