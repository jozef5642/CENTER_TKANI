import { observer } from "mobx-react-lite"
import styles from "./TkanItem.module.css"
import { useContext } from "react"
import { Context } from "../../main"
import { Card } from "@radix-ui/themes"
import { Button_1l, Basket_Icon } from "../button/Button"


export let TkanItem = ({tkan}) =>{

const {tkans} = useContext(Context)
    return(
        <>
        
            <Card>
            <div className="bg-white rounded-lg group
                            p-3 cursor-pointer md:h-[calc(100%-90px)] hover:h-full">   
                <img src={tkan.img}/>
                <h6 className="text-black font-semibold">{tkan.name}</h6>
                <h5 className="text-accent text-b_fone font-semibold">{tkan.price} ₽/м</h5>
                <div className="md:hidden">
                        <Basket_Icon/>
                </div>
                <div className="opacity-0 transform transition-all duration-300
                                group-hover:opacity-100"
                >
                    <div className="md:hidden"></div>
                    <div className="w-auto h-[40px] justify-between items-center rounded-lg hidden md:block">
                        <div className="flex flex-row ">
                            <button className="px-3 py-1 text-lg">-</button>
                            <h5 className="text-[#101010] px-4 py-1 bg-[#E4E2DE]">1.0</h5>
                            <button className="px-3 py-1 text-lg">+</button>
                        </div>
                        <h5 className="text-accent text-[#101010] font-semibold">{tkan.price} ₽/м</h5>
                    </div>
                    <div className="hidden md:block">
                        <Button_1l/>
                    </div>
                    
                </div>
                
                
            </div> 
            </Card>
        </>
    )
}