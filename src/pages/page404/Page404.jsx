import styles from "./Page404.module.css"
import img1 from "../../assets/404.svg"
import img2 from "../../assets/404_m.svg"
import { Link } from "react-router-dom";
import { MAIN_PAGE } from "../../utils/consts";


export let Page404 = () => {
    return (
        <>
            <div className="flex justify-center items-center mt-[165px] mb-[45px]">
                <img className="hidden md:block" src={img1} alt="Not Found" />
                <img className="md:hidden" src={img2} alt="Not Found" />

            </div>

            <div className="flex flex-col justify-center items-center">
                <p className="text-[20px] font-medium mb-[18px] md:mb-[20px]">Страница не найдена</p>
                <Link to={MAIN_PAGE}><button className="bg-[#888888] text-white rounded-[5.36px] px-[9.2px] py-[7.15px] lg:px-[19.5px]">На главную</button></Link>
            </div>
        </>
    );
}