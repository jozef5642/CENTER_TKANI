import { observer } from "mobx-react-lite"
import styles from "./Typebar.module.css"
import { Context } from "../../main";
import { useState, useRef, useContext } from "react";

export const Typebar = observer(({ Styles }) => {
    const { tkans } = useContext(Context);

    return (
        <div className={`flex ${Styles} gap-2`}>
            {tkans.types?.map(type => (
                <ul
                    className="bg-[#F1F0EE] rounded-lg text-black 
                               text-nowrap w-[293px] text-center text-[17px] cursor-pointer"
                    key={type.id}
                >
                    {type.name}

                    {tkans.brands?.map(brand => (
                        <li key={brand.id}>{brand.name}</li>
                    ))}
                </ul>
            ))}
        </div>
    );
});