import { Card } from "@radix-ui/themes";
import styles from "./MaterialCard.module.css"
import { Basket_Icon } from "../button/Button";


export let MaterialCard = () => {

    

    return (
        <>
            <Card>
                <div className="w-fit bg-white flex gap-4 rounded-3xl p-4">
                    <img className="w-[80px] rounded-lg" src="./image_wet_asphalt_2.png" alt="" />
                    <div className="flex flex-col justify-between">
                        <p className="text-start text-[16px] font-semibold">Сатин принт Веточки Зел</p>
                        <div className="flex justify-between">
                            <p className="text-start text-[16px] font-semibold">400 ₽</p>
                            <Basket_Icon />
                        </div>
                    </div>
                </div>
            </Card>
        </>
    );
}