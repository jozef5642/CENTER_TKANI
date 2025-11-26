import styles from "./Input_field.module.css"
import { useState } from "react"

export let Input_field = () => {
    

    return(
        <>
        <div className="relative w-[363px]">
            <input
                type="text"
                name="name"
                placeholder=""
                className="w-full h-[36px] border-0 outline-none 
                        rounded-[8px] p-0 pl-3  bg-[#E4E2DF] caret-b_fone 
                        focus:bg-lightfone"
            
            />

        </div>

        </>
    )
}