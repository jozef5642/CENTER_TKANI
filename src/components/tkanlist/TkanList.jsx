import { observer } from "mobx-react-lite"
import styles from "./TkanList.module.css"
import { useContext } from "react"
import { Context } from "../../main"
import { TkanItem } from "../tkanitem/TkanItem"


export let Tkanlist = observer(() =>{

const {tkans} = useContext(Context)
    return(
        <>



        <div className="min-w-screen min-h-screen
                grid
                grid-cols-2        /* мобильные — 2 колонки */
                md:grid-cols-3     /* планшеты — 3 колонки */
                xl:grid-cols-4     /* компьютеры — 4 колонки (если нужно) */
                gap-3
                m-5"
        >
            {tkans.tkans.map(tkan =>
            <TkanItem key={tkan.id} tkan={tkan}/>
            )}
        </div>
       
            
        
       
        </>
    )
})