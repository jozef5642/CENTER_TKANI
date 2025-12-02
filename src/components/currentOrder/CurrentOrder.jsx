import styles from "./CurrentOrder.module.css"

export let Currentorder = () => {

    return (
        <>
            <div className="max-w-[486px] bg-white rounded-[20px] p-4">
                <div className="flex justify-between ">
                    <p className="text-[18px] font-semibold">Заказ от 02.09.2025</p>
                    <p className="text-b_fone bg-b_fone/10 px-[11px] py-[7px] rounded-[20px]">Оформлен</p>
                </div>
                <div className="flex gap-3 ">
                    <img className="w-[98px] rounded-lg" src="./image_wet_asphalt_1.png" alt="" />
                    <img className="w-[98px] rounded-lg" src="./image_wet_asphalt_2.png" alt="" />
                    <img className="w-[98px] rounded-lg" src="./image_wet_asphalt_3.png" alt="" />
                </div>
                <div>
                    <p className="">3 товара на сумму</p>
                    <p className="text-[16px] text-[#101010] font-semibold">1 600 ₽</p>
                </div>

                <div>
                    <p>Способ получения</p>
                    <p>Самовывоз</p>
                </div>

                <div>
                    <p>Способ оплаты</p>
                    <p>Наличными при получении</p>
                </div>

                <div>
                    <p>Дата доставки</p>
                    <p>11 сентября, 11:00 - 13:00</p>
                </div>
            </div>

        </>
    );
}