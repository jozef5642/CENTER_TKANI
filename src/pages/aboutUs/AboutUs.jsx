import styles from "./AboutUs.module.css";
import { Breadcrumbs } from "../../components/breadcrumbs/Breadcrumbs";
import { useScrollToHash } from "../../hooks/useScrollToHash";
import Rectangle01 from "../../../public/Rectangle 01.jpg"
import Rectangle02 from "../../../public/Rectangle 02.jpg"
import ROKT from "../../assets/ROKT_logo.svg"
import IDEO from "../../assets/IDEO_logo.svg"
import Finsweet from "../../assets/Finsweet_logo.svg"
import VML from "../../assets/VML_logo.svg"
import wallet_red from "../../assets/wallet-red.svg"
import arrow from "../../assets/arrow-right.svg"
import bank_card from "../../assets/Subtract.svg"
import calculator from "../../assets/Calculator_img.svg";

export const AboutUs = () => {
  useScrollToHash();
  return (
    <>
      <Breadcrumbs />
      <section id="about" className="px-[14px] md:px-[16px] lg:px-[80px] flex flex-col justify-center items-center">
        <section className="xl:w-[1280px] bg-[#FFFFFF] rounded-2xl flex flex-col justify-center items-center
          px-[24px] md:px-[40px] xl:px-[64px]
          py-[24px] md:py-[40px] xl:py-[40px]">
          <h3 className=" text-[#888888] text-center
          text-[14px] md:text-[16px] xl:text-[17px]"
          >Давайте знакомиться!</h3>
          <h1 className="text-black font-semibold text-center
            text-[26px] md:text-[32px] xl:text-[38px]
            w-[324px] md:w-[634px] xl:w-[1152px] mb-[4px]"
          >
            Мы — магазин натуральных тканей
          </h1>
          {/* карточка */}
          <div className="flex flex-col xl:w-[1152px] justify-center items-center
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

            <h4 className="font-medium text-center
            text-[16px] xl:text-[17px]
            w-[287px] md:w-[592px]"
            >
              Мы всегда стараемся радовать вас актуальными коллекциями и качественным обслуживанием.
            </h4>
            <div className="grid grid-cols-2 md:flex">
              <img src={ROKT} alt="" className="" />
              <img src={IDEO} alt="" className="" />
              <img src={Finsweet} alt="" className="" />
              <img src={VML} alt="" className="" />
            </div>
          </div>
        </section>

        <div className="flex flex-col justify-start items-start 
        w-[372px] md:w-[714px] xl:w-[1280px]"
        >
          <h1 className="text-start font-semibold
          text-[26px] md:text-[32px] xl:text-[38px]
          pt-[32px] xl:pt-[64px] "
          >
            Доставка
          </h1>

          <p className="text-[#888888] pb-[16px]
          text-[14px] xl:text-[16px]
          w-[372px] md:w-[714px] xl:w-[718px]"
          >
            Отгружаем посылки два раза в неделю (среда/суббота) Сдеком, Почтой России.
            Оптовые заказы отправляем транспортными компаниями Magic Trans, DPD, Деловые Линии, Кит.
          </p>

          {/* Способ доставки */}
          <section className="grid grid-cols-2 md:flex md:flex-wrap
            gap-3 xl:gap-4"
          >
            {/* Самовывоз */}
            <div className="bg-[#FFFFFF] rounded-2xl flex flex-col justify-between
            w-[181px] md:w-[229px] xl:w-[243px]
            p-[10px] xl:p-[12px]
            h-[110px]"
            >
              <div className=" flex justify-between">
                <p>Самовывоз</p>
                <p className=" text-[#888888] text-[16px] rounded-lg bg-[#F1F0EE] cursor-pointer
              hover:bg-b_fone hover:text-white
              px-[9px] pb-[6px] w-[26px] h-[26px]"
                >
                  1
                </p>
              </div>
              <p>ул. Московская 21/3,<br />
                пн-пт 10:00-18:00</p>
            </div>

            {/* СДЭК */}
            <div className="bg-[#FFFFFF] rounded-2xl flex flex-col justify-between
            w-[181px] md:w-[229px] xl:w-[243px]
            p-[10px] xl:p-[12px]
            h-[110px]"
            >
              <div className=" flex justify-between">
                <p>СДЭК</p>
                <p className=" text-[#888888] text-[16px] rounded-lg bg-[#F1F0EE] cursor-pointer
              hover:bg-b_fone hover:text-white
              px-[9px] pb-[6px] w-[26px] h-[26px]"
                >
                  2
                </p>
              </div>
              <p>2-4 дня</p>
            </div>

            {/* Почта России */}
            <div className="bg-[#FFFFFF] rounded-2xl flex flex-col justify-between
            w-[181px] md:w-[229px] xl:w-[243px]
            p-[10px] xl:p-[12px]
            h-[110px]"
            >
              <div className=" flex justify-between">
                <p>Почта России</p>
                <p className=" text-[#888888] text-[16px] rounded-lg bg-[#F1F0EE] cursor-pointer
              hover:bg-b_fone hover:text-white
              px-[9px] pb-[6px] w-[26px] h-[26px]"
                >
                  3
                </p>
              </div>
              <p>5-7 дней</p>
            </div>

            {/* Ozon */}
            <div className="bg-[#FFFFFF] rounded-2xl flex flex-col justify-between
            w-[181px] md:w-[229px] xl:w-[243px]
            p-[10px] xl:p-[12px]
            h-[110px]"
            >
              <div className=" flex justify-between">
                <p>Ozon</p>
                <p className=" text-[#888888] text-[16px] rounded-lg bg-[#F1F0EE] cursor-pointer
              hover:bg-b_fone hover:text-white
              px-[9px] pb-[6px] w-[26px] h-[26px]"
                >
                  4
                </p>
              </div>
              <p>1-2 дня</p>
            </div>

            {/* Доставка курьером */}
            <div className="bg-[#FFFFFF] rounded-2xl flex flex-col justify-between
            w-[181px] md:w-[229px] xl:w-[243px]
            p-[10px] xl:p-[12px]
            h-[110px]"
            >
              <div className=" flex justify-between ">
                <p>Доставка курьером</p>
                <p className=" text-[#888888] text-[16px] rounded-lg bg-[#F1F0EE] cursor-pointer
              hover:bg-b_fone hover:text-white
              px-[9px] pb-[6px] w-[26px] h-[26px]"
                >
                  5
                </p>
              </div>
              <p>1-2 дня</p>
            </div>
          </section>

          {/* Оплата */}
          <section id="delivery" className="">
            <h1 className="text-start font-semibold
              text-[26px] md:text-[32px] xl:text-[38px]
              pt-[32px] xl:pt-[64px]"
            >
              Оплата
            </h1>
            <h4 className="text-[#888888] pb-[16px]
              text-[14px] xl:text-[16px]
              w-[372px] md:w-[714px] xl:w-[718px]"
            >
              Вы можете оплатить заказ любым предложенным удобным способом.
            </h4>

            <div className="flex flex-col md:flex-row gap-[10px] md:gap-[12px] xl:gap-[16px]">
              {/* Банковской картой на сайте */}
              <div className="flex md:flex-col justify-start items-center bg-white rounded-xl gap-[17px]
                w-[372px] md:w-[229px] xl:w-[416px]
                h-[70px] md:h-[140px] xl:h-[160px]"
              >
                <img src={bank_card} alt="" className="h-[36px] md:h-[40px] xl:h-[48px] ml-6 md:ml-0 md:mt-6 xl:mt-9" />
                <p className="text-center
                w-[224px] md:w-[171px] xl:w-[280px]"
                >
                  Банковской картой <br className="hidden md:block xl:hidden" /> на сайте
                </p>
              </div>

              {/* Наличными при получении */}
              <div className="flex md:flex-col justify-start items-center bg-white rounded-xl gap-[17px]
                w-[372px] md:w-[229px] xl:w-[416px]
                h-[70px] md:h-[140px] xl:h-[160px]"
              >
                <img src={wallet_red} alt="" className="h-[36px] md:h-[40px] xl:h-[48px] ml-6 md:ml-0 md:mt-6 xl:mt-9" />
                <p className="text-center
                w-[215px] md:w-[201px] xl:w-[269px]"
                >Наличными при <br className="hidden md:block xl:hidden" /> получении
                </p>
              </div>

              {/* Оплата по счету на юридическое лицо */}
              <div className="flex md:flex-col justify-start items-center bg-white rounded-xl gap-[17px]
                w-[372px] md:w-[229px] xl:w-[416px]
                h-[70px] md:h-[140px] xl:h-[160px]"
              >
                <img src={calculator} alt="" className="h-[36px] md:h-[40px] xl:h-[48px] ml-6 md:ml-0 md:mt-6 xl:mt-9" />
                <p className="text-center
                w-[252px] md:w-[201px] xl:w-[266px]"
                >
                  Оплата по счету на <br className="" /> юридическое лицо
                </p>
              </div>
            </div>
          </section>

          {/* Часто задаваемые вопросы */}
          <section id="questions" className="">

            <div className="flex flex-col">
              <h1 className="text-start font-semibold
                text-[26px] md:text-[32px] xl:text-[38px]
                pt-[32px] xl:pt-[64px]"
              >
                Часто задаваемые вопросы
              </h1>

              <p className="font-semibold pb-[16px]
                text-[14px] xl:text-[20px]
                w-[372px] md:w-[714px] xl:w-[718px]"
              >
                Вопросы о доставке
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-[10px]">
              <div className="flex flex-col gap-[10px]">
                {/* Как узнать трек-номер */}
                <div className="bg-white flex justify-between items-center rounded-[10px]
                px-[12px] md:px-[14px] xl:px-[17px]
                w-[372px] md:w-[351px] xl:w-[635px]
                h-[43px] md:h-[47px] xl:h-[52px]"
                >
                  <p className="text-[#888888] font-medium  
                text-[16px] xl:text-[17px] hover:text-b_fone"
                  >Как узнать трек-номер</p>
                  <img src={arrow} alt="" className="h-[11px]" />
                </div>

                {/* Сроки отправки заказа */}
                <div className="bg-white flex justify-between items-center rounded-[10px]
                px-[12px] md:px-[14px] xl:px-[17px]
                w-[372px] md:w-[351px] xl:w-[635px]
                h-[43px] md:h-[47px] xl:h-[52px]"
                >
                  <p className="text-[#888888] font-medium  
                text-[16px] xl:text-[17px] hover:text-b_fone"
                  >Сроки отправки заказа</p>
                  <img src={arrow} alt="" className="h-[11px]" />
                </div>

                {/* Доставка в регионы */}
                <div className="bg-white flex justify-between items-center rounded-[10px]
                px-[12px] md:px-[14px] xl:px-[17px]
                w-[372px] md:w-[351px] xl:w-[635px]
                h-[43px] md:h-[47px] xl:h-[52px]"
                >
                  <p className="text-[#888888] font-medium  
                text-[16px] xl:text-[17px] hover:text-b_fone"
                  >Доставка в регионы</p>
                  <img src={arrow} alt="" className="h-[11px]" />
                </div>
              </div>

              <div className="flex flex-col gap-[10px]">
                {/* Самовывоз заказа */}
                <div className="bg-white flex justify-between items-center rounded-[10px]
                px-[12px] md:px-[14px] xl:px-[17px]
                w-[372px] md:w-[351px] xl:w-[635px]
                h-[43px] md:h-[47px] xl:h-[52px]"
                >
                  <p className="text-[#888888] font-medium  
                text-[16px] xl:text-[17px] hover:text-b_fone"
                  >Самовывоз заказа</p>
                  <img src={arrow} alt="" className="h-[11px]" />
                </div>

                {/* Как рассчитать стоимость доставки */}
                <div className="bg-white flex justify-between items-center rounded-[10px]
                px-[12px] md:px-[14px] xl:px-[17px]
                w-[372px] md:w-[351px] xl:w-[635px]
                h-[43px] md:h-[47px] xl:h-[52px]"
                >
                  <p className="text-[#888888] font-medium  
                text-[16px] xl:text-[17px] hover:text-b_fone"
                  >Как рассчитать стоимость доставки</p>
                  <img src={arrow} alt="" className="h-[11px]" />
                </div>
              </div>

            </div>
          </section>
        </div>
      </section>
    </>
  );
};
