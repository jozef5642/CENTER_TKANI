import { Breadcrumbs } from "../../components/breadcrumbs/Breadcrumbs"
import styles from "./Tkanpage.module.css"
import image1 from "../../../public/image_wet_asphalt_1.png"
import image2 from "../../../public/image_wet_asphalt_2.png"
import image3 from "../../../public/image_wet_asphalt_3.png"
import image4 from "../../../public/image_wet_asphalt_4.png"
import { useScrollToHash } from "../../hooks/useScrollToHash"
import { CostCalculator } from "../../components/costсalculator/CostCalculator"
import { Button_1l, Button_2l } from "../../components/button/Button"
import { useState } from "react"


export let Tkanpage = () => {
    const tkan = { id: 1, name: 'Двунитка Мокрый Асфальт', price: 500, rating: 5, img: [image1, image2, image3, image4] }
    useScrollToHash();

    const [current, setCurrent] = useState(tkan.img[0]);

    return (
        <>
            <div className="xl:flex justify-between mx-2">
                <section id="target" className="flex flex-col justify-center items-center">
                    <div className="w-full">
                        {/* Основное изображение */}
                        <div className="flex justify-center mb-4">
                            <img
                                src={current}
                                alt="product"
                                className="h-[480px] w-full object-cover rounded-xl transition-all duration-300"
                            />
                        </div>

                        {/* Миниатюры */}
                        <div className="grid grid-cols-4 gap-3">
                            {tkan.img.map((src, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrent(src)}
                                    className={`rounded-xl overflow-hidden border-2 transition ${current === src ? "border-b_fone" : "border-transparent"
                                        }`}
                                >
                                    <img
                                        src={src}
                                        alt={`thumb-${i}`}
                                        className="w-full h-[96.8px] object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="">
                    <div className="">
                        <h1>{tkan.name}</h1>
                        <h3>Артикул:{tkan.id}</h3>
                        <CostCalculator price={tkan.price} />
                        <div className="flex flex-col gap-3 md:flex-row my-1">
                            <Button_2l name={`Добавить в корзину`} />
                            <Button_1l name={`Добавить в один клик`} />
                        </div>


                    </div>
                </section>
            </div>

            <section>

            </section>

        </>
    )
}