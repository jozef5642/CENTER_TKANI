import styles from "./Navbar.module.css"
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, REGISTRATION_ROUTE, ABOUTUS_ROUTE} from "../../utils/consts";

export let Navbar = () =>{

    return(
        <>
        <div className="flex justify-start">
            <ul className="flex flex-col md:flex-row lg:flex-row gap-3">
                <NavLink to={ABOUTUS_ROUTE}><li className="text-[14px] text-[#888888] text-start my-[5px] hover:text-black transition-colors">О нас</li></NavLink>
                <NavLink ><li className="text-[14px] text-[#888888] text-start my-[5px] hover:text-black transition-colors">Оплата и доставка</li></NavLink>
                <NavLink ><li className="text-[14px] text-[#888888] text-start my-[5px] hover:text-black transition-colors">Часто задаваемые вопросы</li></NavLink>
                <NavLink ><li className="text-[14px] text-[#888888] text-start my-[5px] hover:text-black transition-colors">Программа лояльности</li></NavLink>
                <NavLink ><li className="text-[14px] text-[#888888] text-start my-[5px] hover:text-black transition-colors">Контакты</li></NavLink> 
            </ul>      
        </div>
        
        </>
    )
}