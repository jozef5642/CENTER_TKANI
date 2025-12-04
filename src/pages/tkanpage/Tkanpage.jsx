import { Breadcrumbs } from "../../components/breadcrumbs/Breadcrumbs"
import styles from "./Tkanpage.module.css"
import image1 from "../../../public/image_wet_asphalt_1.png"
import { useScrollToHash } from "../../hooks/useScrollToHash"

export let Tkanpage = () => {
    const tkan = { id: 1, name: 'Двунитка Мокрый Асфальт', price: 500, rating: 5, img: image1 }
    useScrollToHash();
    return (
        <>
            <section id="target" className="flex flex-col justify-center items-center gap-1 m-2">
                <img className="w-[372px] h-[480px] rounded-xl" key={tkan.id} src={tkan.img} alt={tkan.name} />
                <div className="flex gap-2 justify-between">
                    
                    <img className="w-[85.5px] h-[96.8px] rounded-xl" key={tkan.id} src={tkan.img} alt={tkan.name} />
                    <img className="w-[85.5px] h-[96.8px] rounded-xl" key={tkan.id} src={tkan.img} alt={tkan.name} />
                    <img className="w-[85.5px] h-[96.8px] rounded-xl" key={tkan.id} src={tkan.img} alt={tkan.name} />
                    <img className="w-[85.5px] h-[96.8px] rounded-xl" key={tkan.id} src={tkan.img} alt={tkan.name} />
                </div>


            </section>

            <section>

            </section>

            <section>

            </section>

        </>
    )
}