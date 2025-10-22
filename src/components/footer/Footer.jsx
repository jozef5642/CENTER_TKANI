import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.top_section}>
        <h3 className={styles.top_section_title}>
          Широкий выбор высококачественных текстильных материалов со скидками до
          50%
        </h3>
        <button className={styles.top_section_btn}>
          <p>Перейти в каталог</p>
        </button>
      </section>

      <section className={styles.bottom_section}>
        <ul className={styles.bottom_section}></ul>
      </section>
    </div>
  );
};
