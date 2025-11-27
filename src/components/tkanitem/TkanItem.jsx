import { observer } from "mobx-react-lite"
import styles from "./TkanItem.module.css"
import { useContext } from "react"
import { Context } from "../../main"
import { Card } from "@radix-ui/themes"
import { Button_1l } from "../button/Button"


export let TkanItem = ({tkan}) =>{

const {tkans} = useContext(Context)
    return(
        <>
        
            <Card className="h-full" >
            <div className="bg-white rounded-lg p-3 cursor-pointer">   
                <img src={tkan.img}/>
                <h6 className="text-accentDark text-neutral-950 font-semibold">{tkan.name}</h6>
                <h5 className="text-accent text-accent font-semibold">{tkan.price} ₽/м</h5>

                <div>
                    <Button_1l/>
                </div>
            </div> 
            </Card>
        
        
        </>
    )
}