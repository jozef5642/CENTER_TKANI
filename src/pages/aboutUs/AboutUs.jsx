import { useState, useEffect } from "react";
import styles from "./AboutUs.module.css";
import { Breadcrumbs } from "../../components/breadcrumbs/Breadcrumbs";
import { useLocation } from "react-router-dom";
import Rectangle01 from "../../../public/Rectangle 01.jpg"
import Rectangle02 from "../../../public/Rectangle 02.jpg"

export const AboutUs = () => {
  return (
    <>
      <section className="px-[14px] md:px-[16px] lg:px-[80px] flex justify-center items-center">
        <div className="xl:w-[1280px] bg-[#FFFFFF] rounded-2xl flex flex-col justify-center items-center
          px-[24px] md:px-[40px] xl:px-[64px]
          py-[24px] md:py-[40px] xl:py-[40px]">
          <h3 className=" text-[#888888] text-center
          text-[14px] md:text-[16px] xl:text-[17px]"
          >Давайте знакомиться!</h3>
          <h1 className="text-black font-semibold text-center
          text-[26px] md:text-[32px] xl:text-[38px]
          w-[324px] md:w-[634px] xl:w-[1152px] 
          "
          >Мы — магазин натуральных тканей</h1>

          <div className="flex flex-col xl:w-[1152px]
            gap-[10px] lg:gap-[16px]"
          >
           <div className="flex flex-col xl:flex-row
            gap-[10px] lg:gap-[16px]"
            > 
              <div className="bg-[#F1F0EE] rounded-2xl
                w-[324px] md:w-[634px] xl:w-[568px]
                h-[180px] md:h-[240px] xl:h-[300px]"
              >
                <p className="text-center tracking-[-0.48px]
                text-[14px] md:text-[16px] xl:text-[16px] 
                px-[30px] md:px-[64px] xl:px-[55px]
                py-[30px] md:py-[74px] xl:py-[102px]
                "
                >
                  <b>«Центр ткани»</b> — это магазин натуральных тканей и трикотажа высокого качества. У нас вы найдёте широкий выбор материалов для одежды и текстиля: хлопок, лен, футер и многое другое.
                </p>
              </div>
              <img src={Rectangle01} alt="" className="
              rounded-2xl
              w-[324px] md:w-[634px] xl:max-w-[568px]
              h-[180px] md:h-[240px] xl:h-[300px]"
              />
            </div>
            <div className="flex flex-col xl:flex-row 
            gap-[10px] xl:gap-[16px]">
              <div className="bg-[#F1F0EE] rounded-2xl
              w-[324px] md:w-[634px] xl:w-[568px]
              h-[180px] md:h-[240px] xl:h-[300px]"
              >
                <p className="text-center tracking-[-0.48px]
                text-[14px] md:text-[16px] xl:text-[16px]
                px-[30px] md:px-[64px] xl:px-[55px]
                py-[30px] md:py-[74px] xl:py-[102px]"
                >
                  Мы работаем с 2020 года и сотрудничаем напрямую с ведущими фабриками <b>Турции, Беларуси и Китая.</b> Среди наших партнёров — <b>Sabaev, Wella, IPEKER, Оршанский льнокомбинат</b> и другие известные производители.
                </p>
              </div>
              <img src={Rectangle02} alt="" className="
              rounded-2xl
              w-[324px] md:w-[634px] xl:max-w-[568px]
              h-[180px] md:h-[240px] xl:h-[300px]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
