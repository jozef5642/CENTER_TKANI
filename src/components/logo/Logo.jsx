import styles from "./Logo.module.css"
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../../utils/consts";

export let Logo = () =>{

    return(
        <>
            <NavLink to={SHOP_ROUTE}>
                <div className="flex gap-[6.48px]">
                    <img className="w-[32px] md:w-[36px]" src="./Logo Icon.svg" alt="LOGO"/>
                    <img className="w-[105px] md:w-[120px]" src="./CENTER TKANI.svg" alt="LOGO"/>
                </div>
            </NavLink>
                
        </>
    );
}