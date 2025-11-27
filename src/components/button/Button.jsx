import styles from "./Button.module.css"


export let Button_1l = ({children}) => {//Кнопка

    return(
        <>
        <button 
            className="text-[16px] text-white bg-b_fone rounded-lg
                    w-[288px] max-h-[40px] p-2 px-[14px] hover:bg-[#860202]"
        >
            {children}
        </button>
        
        </>
    );
}

export let Button_2l = () => {//Кнопка 2 уровня

    return(
        <>
        <button 
            className="text-[16px] text-b_fone border border-b_fone rounded-lg
                    w-[288px] max-h-[40px] p-2 px-[14px]"
        >
            В корзине
        </button>        
        </>
    );
    
}

export let Button_TextVersion = () => {//Текстовая кнопка

    return(
        <>
            <button
            className="text-[16px] text-b_fone p-3 bg-none hover:text-[#860202]"
            >
                Посмотреть все
            </button>
        
        </>
    );
}

export let Button_PersonalAccount = () => { //Кнопка личный кабинет

    return(
        <>
            <button 
                className="text-[16px] text-white border bg-[#888888] rounded-lg
                            px-[14px] py-[8px] hover:bg-[#4D4D4D]"
            >
                Сохранить
            </button>                
        </>
    );
}

export let Button_Load = () =>{//Кнопка загрузки

    return(
        <>
        <button 
                className="text-[16px] text-[#101010] border border-[#C2C2C2] bg-none rounded-lg
                            px-[14px] py-[8px] hover:border-[#888888]"
            >
                Загрузить фотографию
            </button> 
        
        </>
    );
}

export let Basket_Icon = () =>{

    return(
        <>
        <button 
                className="flex justify-center items-center w-[30px] h-[30px] bg-b_fone rounded-full"
            >
                <img src="./Basket_white.svg" alt="" className="w-[12.83] h-[14px]" />
            </button> 
        
        </>
    );
}

// export let Arrow = () => {


//     return(
//         <>
//         {/* Верхняя линия */}
//         <span
//         className="absolute block w-2 h-0.5 bg-white rounded-[1px] -rotate-45 translate-x-[2px]"       
//         ></span>

//         {/* Нижняя линия */}
//         <span
//             className="absolute block w-2 h-0.5 bg-white rounded-[1px] rotate-45 -translate-x-[3px]"
//         ></span>
        
//         </>
//     );
// }