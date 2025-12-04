import { Button_2l } from "../button/Button";
import styles from "./Footer.module.css"
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, REGISTRATION_ROUTE, ABOUTUS_ROUTE } from "../../utils/consts";
import { Typebar } from "../../library/typebar/Typebar";
import { Logo } from "../logo/Logo";
import { Context } from "../../main";
import { useContext } from "react";
import logo_instagam from "../../assets/insta.svg"
import logo_WhapsApp from "../../assets/whatsapp.svg"
import logo_Telegram from "../../assets/telegram.svg"
import footer_image from "../../assets/footer-img.jpg"

export let Footer = () => {
    const { tkans } = useContext(Context);
    const { user } = useContext(Context);


    return (
        <>
            <footer className="overflow-x-hidden">
                <section
                    className="m-6 lg:m-[64px]">
                    <div className="mb-5
                    flex flex-col justify-between
                    lg:flex-row lg:items-center
                    md:flex-col
                    sm:flex-col"
                    >

                        <h6 className="font-semibold
                    text-[26px] max-w-[372px] h-full mb-2
                    lg:text-[38px] lg:w-[892px]
                    md:text-[32px] md:w-[664px]
                    ">
                            Широкий выбор высококачественных текстильных
                            материалов со скидками до 50%
                        </h6>

                        <NavLink to={SHOP_ROUTE}
                            className="flex justify-center items-center 
                    text-[16px] text-white px-[12px] py-[1px]
                    rounded-lg bg-b_fone w-[170px] md:h-[36px] lg:h-[40px]"
                        >
                            Перейти в каталог
                        </NavLink>

                    </div>
                    <hr />
                </section>

                <section className="m-2 lg:m-[64px]">
                    <div className="
                flex justify-between items-start flex-wrap gap-3
                lg:flex-row md:flex-nowrap md:justify-between"
                    >
                        {/* Для одежды */}
                        <ul className="
                    lg:w-[300px] md:w-[220px] ">
                            <li className="text-[17px] font-semibold cursor-pointer">Для одежды</li>
                            {tkans.brands?.map(brand => (
                                <li className="text-[14px] text-[#888888] text-start my-[5px] cursor-pointer" key={brand.id}>{brand.name}</li>
                            ))}

                        </ul>
                        {/* Для дома */}
                        <ul className="
                    lg:w-[300px] md:w-[220px] ">
                            <li className="text-[17px] font-semibold cursor-pointer">Для дома</li>
                            {tkans.brands?.map(brand => (
                                <li className="text-[14px] text-[#888888] text-start my-[5px] cursor-pointer" key={brand.id}>{brand.name}</li>
                            ))}
                        </ul>

                        <ul className="
                    lg:w-[300px] md:w-[220px] ">
                            <li className="text-[17px] font-semibold">Компания</li>
                            <NavLink to={user.isAuth ? ADMIN_ROUTE : LOGIN_ROUTE}><li className="text-[14px] text-[#888888] text-start my-[5px]">Личный кабинет</li></NavLink>
                            <NavLink to={`${ABOUTUS_ROUTE}#about`}><li className="text-[14px] text-[#888888] text-start my-[5px]">О нас</li></NavLink>
                            <NavLink to={`${ABOUTUS_ROUTE}#contacts`}><li className="text-[14px] text-[#888888] text-start my-[5px]">Контакты</li></NavLink>
                            <NavLink to={`${ABOUTUS_ROUTE}#delivery`}><li className="text-[14px] text-[#888888] text-start my-[5px]">Оплата и доставка</li></NavLink>
                            <NavLink to={`${ABOUTUS_ROUTE}#questions`}><li className="text-[14px] text-[#888888] text-start my-[5px]">Часто задаваемые вопросы</li></NavLink>
                            <NavLink ><li className="text-[14px] text-[#888888] text-start my-[5px]">Политика конфиденциальности</li></NavLink>
                            <NavLink ><li className="text-[14px] text-[#888888] text-start my-[5px]">Пользовательское соглашение</li></NavLink>
                        </ul>
                    </div>
                </section>

                <section className="m-6 lg:m-[64px]">
                    <div className="flex justify-between">
                        <Logo />
                        <img className="w-[143px] h-[48px] md:w-[169px] md:h-[56px]" src={footer_image} alt="image" />
                    </div>

                    <div className="flex flex-col mt-4 md:flex-row lg:flex-row-reverse justify-between">

                        <div className="flex justify-between mb-2">
                            <p className="text-[12px] md:text-[14px] text-[#888888]">Подпишитесь на нас в соцсетях</p>
                            <div className="flex justify-center items-center gap-2">
                                <hr />
                                <NavLink><img className="w-[17px]" src={logo_instagam} alt="Instagram" /></NavLink>
                                <hr />
                                <NavLink><img className="w-[17px]" src={logo_WhapsApp} alt="WhatsApp" /></NavLink>
                                <hr />
                                <NavLink><img className="w-[17px]" src={logo_Telegram} alt="Telegram" /></NavLink>
                            </div>
                        </div>
                        <p className="flex justify-start text-[14px] text-right">© 2025 Центр Ткани. Все права защищены.</p>
                    </div>


                </section>


            </footer>



        </>
    )
}


