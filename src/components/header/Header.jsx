import Burger from "../../library/burger_menu/Burger_menu";
import styles from "./Header.module.css"
import { NavLink } from "react-router-dom";
import { useState } from "react";


export let Header = () =>{

    const [open, setOpen] = useState(false);

    return(
        <>
        <section>
            <div className="flex justify-between mx-4">
                <a href="#" className="text-[14px] text-[#888888] my-[5px] hover:text-black transition-colors">
                Мы на WB
                </a>
                <div className="flex justify-center">
                    <ul className="flex flex-row gap-2">
                        <NavLink><li className="text-[14px] text-[#888888] text-start my-[5px] hover:text-black transition-colors">О нас</li></NavLink>
                        <NavLink><li className="text-[14px] text-[#888888] text-start my-[5px] hover:text-black transition-colors">Оплата и доставка</li></NavLink>
                        <NavLink><li className="text-[14px] text-[#888888] text-start my-[5px] hover:text-black transition-colors">Часто задаваемые вопросы</li></NavLink>
                        <NavLink><li className="text-[14px] text-[#888888] text-start my-[5px] hover:text-black transition-colors">Программа лояльности</li></NavLink>
                        <NavLink><li className="text-[14px] text-[#888888] text-start my-[5px] hover:text-black transition-colors">Контакты</li></NavLink> 
                    </ul>      
                </div>
                <a href="#" className="text-[14px] text-[#888888] my-[5px] hover:text-black transition-colors">
                Мы на OZON
                </a>
            </div>
        </section>

        {/* Нижняя панель */}
        <section className="flex justify-between mx-4">
            <div className="flex gap-6">
                {/* Кнопка каталог */}
                <button>
                    Каталог
                </button>

               <a href="#" className="text-[14px] text-black my-[5px] hover:text-b_fone transition-colors">
                Работы из наших такней
                </a>

                <a href="#" className="text-[14px] text-black my-[5px] hover:text-b_fone transition-colors">
                Скидки и акции
                </a>
            </div>

            {/* Логотип */}
            <div className="flex gap-2">
                <img className="w-[32px] md:w-[36px]" src="./Logo Icon.svg" alt="LOGO"/>
                <img className="w-[105px] md:w-[120px]" src="./CENTER TKANI.svg" alt="LOGO"/>
            </div>

            <Burger open={open} setOpen={setOpen} />

      {open && (
        <div className="mt-4 p-4 bg-gray-100 rounded">Мобильное меню</div>
      )}

        </section>
        </>
    )
}