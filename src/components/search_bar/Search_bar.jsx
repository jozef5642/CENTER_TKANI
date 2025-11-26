
import styles from "./Search_bar.module.css"
import { useState } from "react";

export let Searchbar = () => {

        const [search, setSearch] = useState("");
    return(
        <>
        <div>
            <div className="relative w-[372px] md:w-[300px] lg:w-[340px]">
                <input
                    type="text"
                    name="search"
                    placeholder="Поиск по сайту"
                    className="w-full h-[44px] border-0 outline-none 
                            rounded-[40px] p-0 pl-5 pr-[50px] bg-[#E4E2DF] caret-b_fone 
                            focus:bg-lightfone"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                {/* Кнопка лупы или крестика */}
                <div className="absolute right-1 top-1/2 -translate-y-1/2">
                    {search.length === 0 ? (
                    <button
                        className="bg-b_fone w-[32px] h-[32px] lg:w-[36px] 
                                    lg:h-[36px] flex justify-center items-center
                                    rounded-full cursor-pointer relative"
                    >
                        <img src="/Loupe.svg" alt="Поиск" />
                    </button>
                    ) : (
                    <button
                        onClick={() => setSearch("")}
                        className="bg-b_fone w-[32px] h-[32px] 
                                    lg:w-[36px] lg:h-[36px] flex justify-center items-center
                                    rounded-full cursor-pointer relative"
                    >
                        <span className="absolute block w-5 h-0.5 bg-white rounded-[1.5px] rotate-45"></span>
                        <span className="absolute block w-5 h-0.5 bg-white rounded-[1.5px] -rotate-45"></span>
                    </button>
                    )}
                </div>
            </div>
        </div>
            

    {/* вывод популярные запросы недавние запросы */}
        </>
    )
}