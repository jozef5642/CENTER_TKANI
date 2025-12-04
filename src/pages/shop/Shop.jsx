import styles from "./Shop.module.css"
import { Typebar } from "../../library/typebar/Typebar"
import { BrandBar } from "../../library/brandBar/BrandBar";
import { Tkanlist } from "../../components/tkanlist/TkanList";
export let Shop = () =>{

    return(
        <>
        <Typebar/>
        <BrandBar/>
        <Tkanlist/>
        </>
    );
}