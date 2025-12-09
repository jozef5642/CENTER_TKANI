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
    const [totalPrice, setTotalPrice] = useState(0);
    const [openText, setOpenText] = useState(false);
    return (
        <>
            {/* ProductGallery */}
            <div className="xl:flex justify-between mx-2">
                <section id="target" className="flex flex-col justify-start items-center xl:w-1/3 xl:mr-12 ">
                    <div className="w-full">
                        {/* Основное изображение */}
                        <div className="flex justify-center mb-4 h-[480px] md:h-[712px] xl:h-[420px] w-full">
                            <img
                                src={current}
                                alt="product"
                                className="w-full object-cover rounded-xl transition-all duration-300"
                            />
                        </div>

                        {/* Миниатюры */}
                        <div className="flex gap-[14px] justify-start">
                            {tkan.img.map((src, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrent(src)}
                                    className={` md:w-[107px] md:h-[120px]
                                        rounded-xl overflow-hidden border-2 transition ${current === src ? "border-b_fone" : "border-transparent"
                                        }`}
                                >
                                    <img
                                        src={src}
                                        alt={`thumb-${i}`}
                                        className="w-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="xl:w-2/3">
                    <div className="">
                        <h1 className="text-[26px] font-semibold">{tkan.name}</h1>
                        <h3 className="text-[14px] text-[#888888]">Артикул:{tkan.id}</h3>
                        <div className="flex">
                            <CostCalculator
                                price={tkan.price}
                                onPriceChange={setTotalPrice}
                            />
                            <div className="wt-6">
                                <p className="w-auto text-[16px] text-end text-[#10101099] text-nowrap m-0 p-0">{tkan.price} ₽ /м</p>
                                <p className="w-auto text-[26px] text-b_fone font-semibold m-0 p-0 text-nowrap">{totalPrice.toFixed(0)} ₽</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 md:flex-row my-1">
                            <Button_2l name={`Добавить в корзину`} />
                            <Button_1l name={`Добавить в один клик`} />
                        </div>
                    </div>
                    <section className="mx-2 m-6">
                        <p className="text-[14px] text-black m-0 p-0 leading-none">
                            Персональные скидки от количества:
                        </p>
                        <p className="text-[14px] text-[#888888] m-0 p-0 leading-none">
                            От 5м одного отреза – <b className="text-black font-normal">640 ₽</b>
                        </p>
                        <p className="text-[14px] text-[#888888] m-0 p-0 leading-none">
                            От 10м одного отреза – <b className="text-black font-normal">420 ₽</b>
                        </p>
                        <p className="text-[14px] text-[#888888] m-0 p-0 leading-none">
                            Запросить цену от 30 метров: <b className="text-b_fone font-normal">8 (928) 716-66-26</b>
                        </p>
                        <p className="mb-5 text-[14px] text-b_fone underline m-0 p-0 leading-none">
                            Телеграм
                        </p>

                        <h1 className="text-[20px] font-semibold">Характеристики</h1>
                        <div className="flex justify-between"><h2 className="text-[16px] ">Состав</h2><h2 className="text-[16px] ">100% хлопок</h2></div><hr />
                        <div className="flex justify-between"><h2 className="text-[16px] ">Ширина</h2><h2 className="text-[16px] ">150см</h2></div><hr />
                        <div className="flex justify-between"><h2 className="text-[16px] ">Плотность</h2><h2 className="text-[16px] ">90гр</h2></div><hr />
                        <div className="flex justify-between"><h2 className="text-[16px] ">Страна производства</h2><h2 className="text-[16px] ">Россия</h2></div><hr />

                        <h1 className=" my-2 text-[20px] font font-semibold">Описание</h1>
                        <p className={`text-[16px] text-[#4D4D4D] ${openText ? "" : "line-clamp-4"}`}>Ткань обладает высокой прочностью, гигроскопичностью, теплопроводностью и устойчивостью к износам, неаллергенна; высокой сминаемостью; переплетение полотняное; на ощупь мягкая; не просвечивает; усадка до 10%.
                            Ткань прекрасно подходит для пошива комфортной одежды для взрослых и детей, домашнего текстиля (постельного белья, легких занавесок).
                            Ткань натуральная дает усадку, поэтому перед раскроем рекомендуется постирать при температуре дальнейших стирок, но не выше 40С, немного отжать и дать просохнуть в развешенном состоянии, прогладить с изнаночной стороны через проутюжильник на минимальном режиме утюга (важно не пересушивать ткань).
                            Уход: - стирка до 40C в деликатном режиме, отжим на низких оборотах - противопоказано употребление отбеливателей - гладить рекомендуется с изнаночной стороны, сушить в расправленном, подвешенном состоянии.
                            Цветопередача может отличаться от оригинального цвета ткани в зависимости от настроек вашего монитора и в зависимости от партии тон ткани может отличаться.
                        </p>
                        <button
                            className="text-[16px] text-b_fone"
                            onClick={() => setOpenText(!openText)}>{openText ? "Свернуть" : "Читать полностью"}</button>
                    </section>

                </section>
            </div>



        </>
    )
}