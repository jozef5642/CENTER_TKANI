import React from 'react';

export default function MenuPanel() {
  return (
    <ul
      style={{
        position: 'absolute',
        top: '100%',
        left: 0,
        margin: 0,
        padding: '10px 0',
        listStyle: 'none',
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        borderRadius: 4,
        minWidth: 150,
        zIndex: 1000,
      }}
    >
      <li style={{ padding: '8px 20px', cursor: 'pointer', userSelect: 'none' }}>
        Ткань 1
      </li>
      <li style={{ padding: '8px 20px', cursor: 'pointer', userSelect: 'none' }}>
        Ткань 2
      </li>
      <li style={{ padding: '8px 20px', cursor: 'pointer', userSelect: 'none' }}>
        Ткань 3
      </li>
    </ul>
  );
}




{/* <div className={styles.wrapper}  onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
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
    </div> */}