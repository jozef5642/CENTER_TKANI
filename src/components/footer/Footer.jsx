import styles from "./Footer.module.css";

export const Footer = () => {
  return (
  <>
    <div className={styles.wrapper}>
      <section className={styles.top_section}>
        
        <h1 className={styles.top_section_title}>
          Широкий выбор высококачественных<br/> текстильных материалов 
          со скидками до 50%</h1>

        <button className={styles.top_section_btn}>
          <p className={styles.top_section_btn_p}>Перейти в каталог</p>
        </button>

        
      </section>
      <hr/>
      

      <section className={styles.bottom_section}>
        
      </section>

      
    </div>
    </>
  )
};
