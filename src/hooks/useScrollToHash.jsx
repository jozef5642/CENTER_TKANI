import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollToHash(offset) {
    const { hash } = useLocation();

    useEffect(() => {
        if (!hash || document.visibilityState !== "visible") return;

        const id = hash.replace("#", "");
        const el = document.getElementById(id);

        if (!el) return;

        const elementPosition =
            el.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({
            top: elementPosition - offset,
            behavior: "smooth",
        });
    }, [hash, offset]);
}