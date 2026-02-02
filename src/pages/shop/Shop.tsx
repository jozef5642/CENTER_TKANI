import { Typebar } from "../../library/typebar/Typebar"
import { BrandBar } from "../../library/brandBar/BrandBar";
import { Tkanlist } from "../../components/tkanlist/TkanList";

export const Shop = () => {
    return (
        <>
            <div className="flex">
                <div className="flex flex-col">
                    <Typebar />
                    <BrandBar />
                </div>

                <Tkanlist />
            </div>
        </>
    );
}

