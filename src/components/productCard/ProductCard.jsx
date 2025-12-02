import styles from "./ProductCard.module.css"
import { Card } from "@radix-ui/themes"

export let ProductCard = () => {

    return (
        <>
            <Card>
                <div className="bg-white rounded-[20px] w-[181px] p-2
            xl:w-[323px] md:w-[229px]">
                    <img className="rounded-[20px]" src="./product.png" alt="product" />

                    <p
                        className="text-[14px] font-semibold line-clamp-2"
                    >
                        Платье из вискозного шифона "Флаурэль" для выстаки "Гранд Текстиль"
                    </p>

                    <button className="text-[14px] px-[14px] py-[7px] rounded-lg border-[#10101026] border-[1px]">
                        Посмотреть
                    </button>
                </div>

            </Card>
        </>
    );
}