import styles from "./Logo.module.css"
import { NavLink } from "react-router-dom";
import { MAIN_PAGE } from "../../utils/consts";

export let Logo = () =>{

    return(
        <>
            <NavLink to={`${MAIN_PAGE}#main`}>
                <div className="flex gap-[6.48px]">
                    <img className="w-[32px] md:w-[36px]" src="./Logo Icon.svg" alt="LOGO"/>
                    <img className="w-[105px] md:w-[120px]" src="./CENTER TKANI.svg" alt="LOGO"/>
                </div>
            </NavLink>
                
        </>
    );
}