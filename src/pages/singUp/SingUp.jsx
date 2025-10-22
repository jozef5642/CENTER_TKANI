import styles from "./SingUp.module.css";
import { Link } from "react-router-dom";

export const SingUp = () => {
  return (
    <div className={styles.wrapper}>
      <Link to="/" className={styles.logo}>
        <img src="/Logo Icon.svg" alt="Логотип" className={styles.logo_img} />
        <img
          src="/CENTER TKANI.svg"
          alt="Название"
          className={styles.logo_text}
        />
      </Link>

      <div className={styles.form}>
        <h3>Регистрация</h3>
        <div className={styles.form_user}>
          <div className={styles.form_name}>
            <p>Имя</p>
            <input
              type="text"
              name="last_name"
              id="last_name"
              required
              className={styles.form_input}
            />
          </div>
          <div className={styles.form_surname}>
            <p>Фамилия</p>
            <input
              type="text"
              name="first_name"
              id="first_name"
              required
              className={styles.form_input}
            />
          </div>
        </div>
        <div className={styles.form_email}>
          <p>Электронная почта</p>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="user@company.com"
            required
            className={styles.form_input}
          />
        </div>
        <div className={styles.form_phone}>
          <p>Телефон</p>
          <input
            type="tel"
            name="tel"
            id="tel"
            placeholder="Номер телефона"
            required
            className={styles.form_input}
          />
        </div>
        <div className={styles.form_password}>
          <p>Пароль</p>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Пароль"
            required
            className={styles.form_input}
          />
        </div>
        <button type="submit" className={styles.form_btn}>
          Создать аккаунт
        </button>
        <p>
          Нажимая «Создать аккаунт» выше, вы подтверждаете, что будете получать
          обновления от команды Center Tkani и что вы прочитали, поняли и
          согласны с Условиями и положениями, Лицензионным соглашением и
          Политикой конфиденциальности.
        </p>
        <div className={styles.form_link}>
          <p>У вас уже есть аккаунт?</p>
          <Link to="/log_in" className={styles.form_link_singUp}>
            Войти
          </Link>
        </div>
      </div>
    </div>
  );
};
