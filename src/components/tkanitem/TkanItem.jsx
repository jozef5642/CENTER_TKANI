import { observer } from "mobx-react-lite"
import styles from "./TkanItem.module.css"
import { useContext } from "react"
import { Context } from "../../main"
import { Card } from "@radix-ui/themes"
import { Button_1l, Basket_Icon } from "../button/Button"
import { CostCalculator } from "../../costсalculator/CostCalculator"


export let TkanItem = ({ tkan }) => {

    const { tkans } = useContext(Context)
    return (
        <>

            <Card>
                <div className="bg-white rounded-lg group
                    p-3 cursor-pointer md:h-[calc(100%-90px)] hover:h-full"
                >
                    <img src={tkan.img} />
                    <h6 className="text-black font-semibold">{tkan.name}</h6>
                    <h5 className="text-accent text-b_fone font-semibold">{tkan.price} ₽/м</h5>
                    <div className="md:hidden">
                        <Basket_Icon />
                    </div>
                    <div className="opacity-0 transform transition-all duration-300
                                group-hover:opacity-100"
                    >

                        <div className="hidden md:block">
                            <div className="w- full flex flex-col gap-2">
                                <CostCalculator price={tkan.price} />
                                <Button_1l />
                            </div>
                        </div>

                    </div>
                </div>
            </Card>
        </>
    )
}