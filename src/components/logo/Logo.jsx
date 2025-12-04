import styles from "./Logo.module.css"
import { NavLink } from "react-router-dom";
import { MAIN_PAGE } from "../../utils/consts";
import image1 from "../../../public/Logo Icon.svg"
import image2 from "../../../public/CENTER TKANI.svg"

export let Logo = () =>{

    return(
        <>
            <NavLink to={`${MAIN_PAGE}#main`}>
                <div className="flex gap-[6.48px]">
                    <img className="w-[32px] md:w-[36px]" src={image1} alt="LOGO"/>
                    <img className="w-[105px] md:w-[120px]" src={image2} alt="LOGO"/>
                </div>
            </NavLink>
                
        </>
    );
}