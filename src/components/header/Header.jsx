import Burger from "../burger_menu/Burger_menu";
import styles from "./Header.module.css"
import { Searchbar } from "../search_bar/Search_bar";
import { Navbar } from "../navbar/Navbar";
import { Logo } from "../logo/Logo";
import { Button_1l } from "../button/Button";
import { NavLink, Link } from "react-router-dom";
import { useState, useRef, useContext } from "react";
import * as Avatar from "@radix-ui/react-avatar";
import { Context } from "../../main";
import { observer } from "mobx-react-lite";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, REGISTRATION_ROUTE, ABOUTUS_ROUTE} from "../../utils/consts";


export let Header = observer(() =>{

    const [openMenu, setOpenMenu] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);

    const {user} = useContext(Context)

    return(
    <>
        {/* Мобильное меню */}
        <header className="m-[20px] md:m-[5px] max-w-screen">
            <section className="md:hidden w-full">
                <div className="flex justify-between">
                    <Logo/>

                <div className="flex gap-2 relative">
                        
                        <img
                            src={openSearch ? "/LoupeRed.svg" : "/LoupeBlack.svg"} 
                            alt={openSearch ? "Закрыть поиск" : "Поиск"} 
                            onClick={() => {
                                setOpenSearch(!openSearch); // открыть поиск
                                setOpenMenu(false);       // закрыть меню
                            }}
                            className="cursor-pointer transition-all duration-300"
                        />

                        <Burger 
                            open={openMenu} 
                            setOpen={() => {
                                setOpenMenu(!openMenu);     //открыть меню
                                setOpenSearch(false);    // закрыть поиск
                            }} 
                        />
                    </div>
                </div>

                {/* Navbar */}
                <div 
                    className={`relative w-full z-50
                    transition-all duration-300 
                    ${openMenu ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
                >
                    <Navbar/>
                </div>

                {/* Search_bar */}
                <div 
                    className={`relative w-full z-50 left-0
                                transition-all duration-300
                                ${openSearch ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}
                                flex justify-center my-4
                                `}
                >
                    <Searchbar/>
                </div>
            </section>
            
            {/* Компьютер и планшет */}
            <section className="hidden md:block">
                    <section>
                        <div className="flex xl:justify-between md:justify-center mx-[10px]">
                            <a href="#" 
                                className="text-[14px] text-[#888888] text-start my-[5px] hover:text-black transition-colors flex md:hidden xl:flex"
                            >
                                Мы на WB
                            </a>
                            <Navbar/>
                            <a href="#" 
                                className="text-[14px] text-[#888888] text-start my-[5px] hover:text-black transition-colors flex md:hidden xl:flex"
                            >
                                Мы на OZON
                            </a>
                        </div>
                    </section>

                    <section className="flex xl:flex-row justify-between xl:items-center md:flex-col-reverse">
                        <div className="flex justify-between items-center gap-7 md:overflow-x-hidden">
                            <button
                            className="flex items-center text-[14px] text-white flex-row px-[14px]
                                        lg:py-2 md:py-[6px] bg-b_fone rounded-lg"
                            >
                            Каталог <img src="/Arrow.svg" alt="Arrow" className="ml-1 mt-1"/>
                            </button>
                        
                            <NavLink to="" className="text-[14px] text-black">
                                Работы из наших тканей
                            </NavLink>
                            <NavLink to="" className="text-[14px] text-black">
                                Скидки и акции
                            </NavLink>
                            <div className="hidden md:flex xl:hidden gap-7">
                                <a href="#" 
                                    className="text-[14px] text-[#888888] text-start my-[5px] hidden md:block
                                    hover:text-black transition-colors"
                                >
                                    Мы на WB
                                </a>

                                <a href="#" 
                                    className="text-[14px] text-[#888888] text-start my-[5px] hidden md:block
                                    hover:text-black transition-colors"
                                >
                                    Мы на OZON
                                </a>
                            </div>
                                   

                            
                        </div>
                        
                        
                        
                        <div className="flex justify-between items-center gap-7 xl:w-[50%]">
                            <NavLink to={SHOP_ROUTE}>
                            <Logo/>
                            </NavLink>
                            <div className="flex justify-between items-center md:gap-2">
                                <Searchbar/>

                                <NavLink to='/'>
                                    <img src="./Bag Icon.svg" alt="Корзина" className="w-6 h-6" />
                                </NavLink>

                                {user.isAuth ? 
                                    <NavLink to={ADMIN_ROUTE} className="hidden md:block">
                                        <Avatar.Root className="inline-flex h-6 w-6 select-none items-center justify-center overflow-hidden rounded-full bg-gray-200 align-middle"> //Главный контейнер
                                                        <Avatar.Image
                                                        className="h-full w-full object-cover"
                                                        src="https://i.pravatar.cc/100"//адрес картинки 
                                                        alt="User avatar"
                                                        />
                                                        <Avatar.Fallback //картинка если не прогрузилась(JD)
                                                        className="text-gray-700 text-sm font-medium"
                                                        delayMs={600}
                                                        >
                                                        JD
                                                        </Avatar.Fallback>
                                                    </Avatar.Root>
                                    </NavLink>
                                    : 
                                <Link to={LOGIN_ROUTE} className="hidden md:block">
                                    <img src="./User Icon.svg" alt="Профиль" className="w-6 h-6" />
                                </Link>
                            }
                            </div>
                            
                        </div>   
                    </section>       
            </section>
        </header>               
    </>
    );
});