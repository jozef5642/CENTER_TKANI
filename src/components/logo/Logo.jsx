import styles from "./Logo.module.css"

export let Logo = () =>{

    return(
        <>
                <div className="flex gap-[6.48px]">
                    <img className="w-[32px] md:w-[36px]" src="./Logo Icon.svg" alt="LOGO"/>
                    <img className="w-[105px] md:w-[120px]" src="./CENTER TKANI.svg" alt="LOGO"/>
                </div>
        </>
    );
}