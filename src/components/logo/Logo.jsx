import styles from "./Logo.module.css"
import { NavLink } from "react-router-dom";
import { MAIN_PAGE } from "../../utils/consts";
import logo from "../../assets/Logo Icon.svg"
import center_tkani from "../../assets/CENTER TKANI.svg"

export let Logo = () =>{

    return(
        <>
            <NavLink to={`${MAIN_PAGE}#main`}>
                <div className="flex gap-[6.48px]">
                    <img className="w-[32px] md:w-[36px]" src={logo} alt="LOGO"/>
                    <img className="w-[105px] md:w-[120px]" src={center_tkani} alt="LOGO"/>
                </div>
            </NavLink>
                
        </>
    );
}