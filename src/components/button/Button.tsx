interface ButtonProps {
  name?: string;
  Name?: string;
}

export const Button_1l = ({ name }: ButtonProps) => {
    return (
        <>
            <button 
                className="text-[16px] text-white bg-b_fone rounded-lg
                       h-[40px] p-2 px-[14px] hover:bg-[#860202]"
            >
                {name}
            </button>
        </>
    );
}

export const Button_2l = ({ name }: ButtonProps) => {
    return (
        <>
            <button 
                className="text-[16px] text-b_fone border border-b_fone rounded-lg
                        max-h-[40px] p-2 px-[14px]"
            >
                {name}
            </button>        
        </>
    );
}

export const Button_TextVersion = () => {
    return (
        <>
            <button
                className="text-[16px] text-b_fone p-3 bg-none hover:text-[#860202]"
            >
                Посмотреть все
            </button>
        </>
    );
}

export const Button_PersonalAccount = ({ Name }: ButtonProps) => {
    return (
        <>
            <button 
                className="max-h-[33px] text-[16px] text-white border bg-[#888888] rounded-lg
                            px-[14px] hover:bg-[#4D4D4D]"
            >
                {Name}
            </button>                
        </>
    );
}

export const Button_Load = () => {
    return (
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

export const Basket_Icon = () => {
    return (
        <>
            <button 
                className="flex justify-center items-center w-[30px] h-[30px] bg-b_fone rounded-full"
            >
                <img src="./Basket_white.svg" alt="" className="w-[12.83] h-[14px]" />
            </button> 
        </>
    );
}

