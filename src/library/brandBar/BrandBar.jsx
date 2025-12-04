import { observer } from "mobx-react-lite";
import styles from "./BrandBar.module.css"
import { Context } from "../../main";
import { useContext } from "react";

export let BrandBar = observer(() => {
    const { tkans } = useContext(Context);
    return (
        <>
            <div className="">
                {tkans.brands.map(brand => (
                    <ul
                        onClick={() => tkans.setSelectedBrand(brand)}
                        className={`bg-[#F1F0EE] rounded-lg  
                               text-nowrap w-[293px] text-center text-[17px] cursor-pointer 
                                 ${tkans.selectedBrand.id === brand.id ? "text-b_fone" : "text-black"}`}
                        key={brand.id}
                    >
                        {brand.name}
                    </ul>
                ))}
            </div>

        </>
    );
});