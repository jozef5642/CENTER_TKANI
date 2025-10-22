import styles from "./Modal.module.css";

export const Modal = ({}) => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.modal_left}>
        <h3 className={styles.modal_title}>Для одежды</h3>
        <div className={styles.modal_links}>
          <Link to="/" className={styles.modal_link_item}>
            Шелк
          </Link>
          <select name="" className={styles.modal_link_name}>
            <Link to="/">Ткань 1</Link>
            <Link to="/">Ткань 2</Link>
          </select>
          <select name="" className={styles.modal_link_name}>
            <Link to="/">Ткань 1</Link>
            <Link to="/">Ткань 2</Link>
          </select>
          <Link to="/">Вискоза</Link>
          <Link to="/">Тенсель</Link>
          <select name="" className={styles.modal_link_name}>
            <Link to="/">Купра</Link>
            <Link to="/">Хлопок</Link>
          </select>
          <select name="" className={styles.modal_link_name}>
            <Link to="/">Ткань 1</Link>
            <Link to="/">Ткань 2</Link>
          </select>
          <Link to="/" className={styles.modal_link_item}>
            Джинса
          </Link>
        </div>
      </section>

      <section className={styles.modal_right}>
        <h3 className={styles.modal_title}>Для одежды</h3>
        <div className={styles.modal_links}>
          <select name="" className={styles.modal_link_name}>
            <Link to="/">Однотоп / Страйп</Link>
            <Link to="/">Принт</Link>
          </select>
          <select name="" className={styles.modal_link_name}>
            <Link to="/">Ткань 1</Link>
            <Link to="/">Ткань 2</Link>
          </select>
          <select name="" className={styles.modal_link_name}>
            <Link to="/">Ткань 1</Link>
            <Link to="/">Ткань 2</Link>
          </select>
          <select name="" className={styles.modal_link_name}>
            <Link to="/">Ткань 1</Link>
            <Link to="/">Ткань 2</Link>
          </select>
          <select name="" className={styles.modal_link_name}>
            <Link to="/">Ткань 1</Link>
            <Link to="/">Ткань 2</Link>
          </select>
          <Link to="/" className={styles.modal_link_item}>
            Вафельное полотно
          </Link>
          <Link to="/" className={styles.modal_link_item}>
            Махра
          </Link>
          <Link to="/" className={styles.modal_link_item}>
            Пике косичка
          </Link>
          <Link to="/" className={styles.modal_link_item}>
            Фланель
          </Link>
          <Link to="/" className={styles.modal_link_item}>
            Муслин
          </Link>
        </div>
      </section>
    </div>
  );
};
