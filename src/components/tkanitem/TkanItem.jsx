import { observer } from "mobx-react-lite"
import styles from "./TkanItem.module.css"
import { useContext, useState } from "react"
import { Context } from "../../main"
import { Card } from "@radix-ui/themes"
import { Button_1l, Basket_Icon } from "../button/Button"
import { CostCalculator } from "../costсalculator/CostCalculator"
import { useNavigate } from "react-router-dom"
import { TKAN_ROUTE } from "../../utils/consts"
import { useScrollToHash } from "../../hooks/useScrollToHash"


export let TkanItem = ({ tkan }) => {
    const navigate = useNavigate()
    useScrollToHash();
    const { tkans } = useContext(Context)
    const [totalPrice, setTotalPrice] = useState(0);
    return (
        <>

            <Card>
                <div className="bg-white rounded-lg group
                    p-3 cursor-pointer md:h-[calc(100%-90px)] hover:h-full"
                >
                    <img src={tkan.img} onClick={() => navigate(`${TKAN_ROUTE}/${tkan.id}#target`)} />
                    <h6 className="text-black font-semibold">{tkan.name}</h6>
                    <h5 className="text-accent text-b_fone font-semibold">{tkan.price} ₽/м</h5>
                    <div className="md:hidden">
                        <Basket_Icon />
                    </div>
                    <div className="opacity-0 transform transition-all duration-300
                                group-hover:opacity-100"
                    >

                        <div className="hidden md:block">
                            <div className="w-full flex flex-col gap-2">
                                <div className="flex items-end gap-1">
                                    <CostCalculator
                                        price={tkan.price}
                                        onPriceChange={setTotalPrice}
                                    />
                                    <p
                                        className="w-auto text-[18px] text-black font-semibold m-0 p-0 whitespace-nowrap overflow-visible"
                                    >
                                        {totalPrice > 1000000
                                            ? `${Math.floor(totalPrice / 1000000)}M+`
                                            : totalPrice > 10000
                                                ? `${Math.floor(totalPrice / 1000)}K+`
                                                : `${totalPrice.toFixed(0)} ₽`}
                                    </p>

                                </div>

                                <Button_1l name={`В корзину`} />
                            </div>
                        </div>

                    </div>
                </div>
            </Card>
        </>
    )
}