import { observer } from "mobx-react-lite"
import { Context } from "../../main";
import { useContext } from "react";

interface TypebarProps {
  Styles?: string;
}

export const Typebar = observer(({ Styles }: TypebarProps) => {
    const context = useContext(Context);
    
    if (!context) {
        return null;
    }
    
    const { tkans } = context;

    return (
        <div className={`${Styles}`}>
            {tkans.types.map(type => (
                <ul
                    onClick={() => tkans.setSelectedType(type)}
                    className={`bg-[#F1F0EE] rounded-lg  
                                text-nowrap w-[293px] text-center text-[17px] cursor-pointer 
                                ${(tkans.selectedType as { id?: number })?.id === type.id ? "text-b_fone" : "text-black"}`}
                    key={type.id}
                >
                    {type.name}
                </ul>
            ))}
        </div>
    );
});

