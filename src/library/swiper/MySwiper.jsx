import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "./MySwiper.module.css";

const slides = [
  { id: 1, url: "Hero Image Left.jpg" },
  { id: 2, url: "Hero Image Right.jpg" },
];

const MySwiper = () => {
  const swiperRef = useRef(null);
  const [progress, setProgress] = useState(0);

  // обновляем состояние progress каждую десятую секунду
  useEffect(() => {
    let interval;
    const swiper = swiperRef.current;

    if (swiper) {
      interval = setInterval(() => {
        const delay = swiper.params.autoplay?.delay || 3000;
        const autoplay = swiper.autoplay;
        if (autoplay && autoplay.running && autoplay.timeLeft) {
          const percent = 100 - (autoplay.timeLeft / delay) * 100;
          setProgress(percent);
        }
      }, 50);
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative slider-wrapper w-full max-w-4xl mx-auto overflow-hidden"
      onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
      onMouseLeave={() => swiperRef.current?.autoplay?.start()}
    >
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="w-full h-[500px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <img
                src={slide.url}
                alt={`Slide ${slide.id}`}
                className="w-full h-full object-cover"
              />
              {/* Прогресс бар поверх картинки */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-white/30">
                <div
                  className="h-1 bg-blue-500 transition-all duration-75"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MySwiper;







