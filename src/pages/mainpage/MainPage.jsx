import { observer } from "mobx-react-lite"
import styles from "./MainPage.module.css"
import { Context } from "../../main";
import { useState, useEffect, useContext } from "react";
import { Tkanlist } from "../../components/tkanlist/TkanList";
import { Slider } from "../../components/slider/Slider"
import { Typebar } from "../../library/typebar/Typebar";
import { useLocation } from "react-router-dom";
import { Button_TextVersion } from "../../components/button/Button";

export let MainPage = observer(() => {
    const { tkans } = useContext(Context)


    const { hash } = useLocation();

    useEffect(() => {
        if (hash && document.visibilityState === "visible") {

            const id = hash.replace("#", "");
            const el = document.getElementById(id);

            if (el) {

                const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;

                window.scrollTo({
                    top: elementPosition - 100,
                    behavior: "smooth",
                });
            }
        }
    }, [hash, 100]);

    return (
        <>
            <section id="main">
                <div className="mx-2 flex flex-col md:flex-row">
                    <Slider Name={"одежды"} />
                    <Slider Name={"Дома"} />
                </div>

                <div className="m-5 flex justify-between">
                   <h1 className="text-[26px] md:text-[32px] lg:text-[38px] text-black font-semibold">Новинки</h1>
                   <Button_TextVersion/> 
                </div>
                    <Tkanlist items={tkans.tkans.slice(0, 4)} />
                <div className="m-5 flex justify-between">
                   <h1 className="text-[26px] md:text-[32px] lg:text-[38px] text-black font-semibold">Акции и скидки</h1>
                   <Button_TextVersion/> 
                </div>
                    <Tkanlist items={tkans.tkans.slice(0, 4)} />

                <div className="m-5 flex justify-between">
                   <h1 className="text-[26px] md:text-[32px] lg:text-[38px] text-black font-semibold">Комбинации</h1>
                   <Button_TextVersion/> 
                </div>
                    <Tkanlist items={tkans.tkans.slice(0, 4)} />
                
            </section>


        </>
    )
})