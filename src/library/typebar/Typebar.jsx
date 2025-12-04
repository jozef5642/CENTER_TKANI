import { observer } from "mobx-react-lite"
import styles from "./Typebar.module.css"
import { Context } from "../../main";
import { useContext } from "react";

export const Typebar = observer(({ Styles }) => {
    const { tkans } = useContext(Context);

    

    return (
        <div className={`${Styles}`}>
            {tkans.types.map(type => (
                <ul
                    onClick={() => tkans.setSelectedType(type)}
                    className={`bg-[#F1F0EE] rounded-lg  
                                text-nowrap w-[293px] text-center text-[17px] cursor-pointer 
                                ${tkans.selectedType.id === type.id ? "text-b_fone" : "text-black"}`}
                    key={type.id}
                >
                    {type.name}
                </ul>
            ))}
        </div>
    );
});
