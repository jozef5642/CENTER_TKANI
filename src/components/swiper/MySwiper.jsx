import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./MySwiper.module.css";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export const MySwiper = () => {
  // const swiperRef = useRef(null);
  // const [key, setKey] = useState(0);

  // useEffect(() => {
  //   const swiper = swiperRef.current;
  //   if (!swiper) return;
  //   swiper.on("slideChange", () => setKey((prev) => prev + 1));
  // }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.swiper_container}>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          // modules={[Autoplay]}
          // autoplay={{ delay: 5000, disableOnInteraction: false }}
          // loop
        >
          <SwiperSlide>
            <img src="/Hero Image Left.jpg" alt="Ткань для одежды" className={styles.swiper_img}/>
          </SwiperSlide>

        </Swiper>
        {/* <div className={styles.progress_bar} key={key}>
          <div className={styles.progress_fill}></div>
        </div> */}
      </div>
    </div>
  );
};
