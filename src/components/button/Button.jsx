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
        
        </>
    );
}

export let Button_PersonalAccount = () => { //Кнопка личный кабинет

    return(
        <>
        
        </>
    );
}

export let Button_Load = () =>{//Кнопка загрузки

    return(
        <>
        
        </>
    );
}

export let Basket_Icon = () =>{

    return(
        <>
        
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