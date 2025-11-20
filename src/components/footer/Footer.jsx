import styles from "./Footer.module.css"
import { NavLink } from "react-router-dom";
export let Footer = () =>{

    return(
        <>
        <section
        className="m-6 lg:m-[64px]">
            <div className="mb-5
                flex flex-col justify-between
                lg:flex-row lg:items-center
                md:flex-col
                sm:flex-col">
                
                <h6 className="font-semibold
                text-[26px] w-[372px] h-full mb-2
                lg:text-[38px] lg:w-[892px]
                md:text-[32px] md:w-[664px]
                ">
                    Широкий выбор высококачественных текстильных
                    материалов со скидками до 50%
                </h6>

                <button className="text-[16px] text-white bg-b_fone rounded-lg
                w-[170px] h-[40px]
                ">Перейти в каталог</button>
                    
            </div>
        <hr/>
        </section>

        <section className="m-6 lg:m-[64px]">
            <div className="
            flex justify-between flex-wrap gap-4
            lg:flex-row md:flex-nowrap md:justify-between"
            >
                {/* Для одежды */}
                <ul className="border-2 border-indigo-600 w-[161px] md:w-[220px] h-[100px] lg:w-[300px]">
                    <li className="text-[14px] text-[#888888] text-start my-[5px"></li>
                </ul>

                {/* Для дома */}
                <ul className="border-2 border-indigo-600 w-[161px] md:w-[220px] h-[100px] lg:w-[300px]">
                    <li className="text-[14px] text-[#888888] text-start my-[5px"></li>
                </ul>

                <ul className="
                lg:w-[300px] md:w-[220px] ">
                    <li className="text-[17px] font-semibold">Компания</li>
                    <NavLink><li className="text-[14px] text-[#888888] text-start my-[5px]">Личный кабинет</li></NavLink>
                    <NavLink><li className="text-[14px] text-[#888888] text-start my-[5px]">О нас</li></NavLink>
                    <NavLink><li className="text-[14px] text-[#888888] text-start my-[5px]">Контакты</li></NavLink>
                    <NavLink><li className="text-[14px] text-[#888888] text-start my-[5px]">Оплата и доставка</li></NavLink>
                    <NavLink><li className="text-[14px] text-[#888888] text-start my-[5px]">Часто задаваемые вопросы</li></NavLink>
                    <NavLink><li className="text-[14px] text-[#888888] text-start my-[5px]">Политика конфиденциальности</li></NavLink>
                    <NavLink><li className="text-[14px] text-[#888888] text-start my-[5px]">Пользовательское соглашение</li></NavLink>
                </ul>
            </div>  
        </section>

        <section className="m-6 lg:m-[64px]">
            <div className="flex justify-between">
                <div className="w-[303px] h-[93px] flex flex-col justify-between">
                    <div className="flex gap-2">
                        <img className="w-[32px] md:w-[36px]" src="./Logo Icon.svg" alt="LOGO"/>
                        <img className="w-[105px] md:w-[120px]" src="./CENTER TKANI.svg" alt="LOGO"/>
                    </div>
                    <p className="text-[14px]">© 2025 Центр Ткани. Все права защищены.</p>
                </div>

                <div className="flex flex-col justify-between items-end">
                    <img className="w-[143px] h-[48px] md:w-[169px] md:h-[56px]" src="./footer-img.jpg" alt="image"/>
                    <div className="flex items-center gap-2">
                        <p className="text-[14px] text-[#888888]">Подпишитесь на нас в соцсетях</p>
                        <hr/>
                        <NavLink><img className="w-[17px]" src="./insta.svg" alt="Instagram"/></NavLink>
                        <hr/>
                        <NavLink><img className="w-[17px]" src="./whatsapp.svg" alt="WhatsApp"/></NavLink>
                        <hr/>
                        <NavLink><img className="w-[17px]" src="./telegram.svg" alt="Telegram"/></NavLink>
                    </div>
                </div>                            
            </div>
        </section>
        
        
        </>
    )
}