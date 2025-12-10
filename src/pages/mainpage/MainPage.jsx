import { observer } from "mobx-react-lite"
import styles from "./MainPage.module.css"
import { Context } from "../../main";
import { useState, useContext } from "react";
import { Tkanlist } from "../../components/tkanlist/TkanList";
import { Slider } from "../../components/slider/Slider"
import { Typebar } from "../../library/typebar/Typebar";
import { Button_TextVersion } from "../../components/button/Button";


export let MainPage = observer(() => {
    const { tkans } = useContext(Context)


    return (
        <>
            <div className="flex flex-col justify-center items-center ">
                <section id="main" className="items-center xl:max-w-[1140px]">
                    <div className="px-[14px] md:px-[16px] lg:p-[20px] py-[24px] flex flex-col gap-[10px] md:gap-[12px] lg:gap-[16px] lg:flex-row">
                        <Slider Name={"одежды"} />
                        <Slider Name={"Дома"} />
                    </div>
                    <div className="px-[14px] md:px-[9.5px] lg:px-[43px]">
                        <div className="my-5 flex justify-between">
                            <h1 className="text-[26px] md:text-[32px] lg:text-[38px] text-black font-semibold">Новинки</h1>
                            <Button_TextVersion />
                        </div>
                        <Tkanlist items={tkans.tkans.slice(0, 4)} />
                        <div className="my-5 flex justify-between">
                            <h1 className="text-[26px] md:text-[32px] lg:text-[38px] text-black font-semibold">Акции и скидки</h1>
                            <Button_TextVersion />
                        </div>
                        <Tkanlist items={tkans.tkans.slice(0, 4)} />

                        <div className="my-5 flex justify-between">
                            <h1 className="text-[26px] md:text-[32px] lg:text-[38px] text-black font-semibold">Комбинации</h1>
                            <Button_TextVersion />
                        </div>
                        <Tkanlist items={tkans.tkans.slice(0, 4)} />
                    </div>
                </section>
            </div>

        </>
    )
})