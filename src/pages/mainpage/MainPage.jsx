import { observer } from "mobx-react-lite"
import styles from "./MainPage.module.css"
import { Context } from "../../main";
import { useState, useEffect, useContext } from "react";
import { Tkanlist } from "../../components/tkanlist/TkanList";
import { Slider } from "../../components/slider/Slider"
import { Typebar } from "../../library/typebar/Typebar";
import { useLocation } from "react-router-dom";

export let MainPage = observer(() => {
    const { tkans } = useContext(Context)


    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {

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

                <div className="flex">

                    <Tkanlist />
                </div>
            </section>


        </>
    )
})