import {useState, useEffect} from "react";

export enum Size {
    "none",
    "xs",
    "sm",
    "md",
    "lg"
}

export const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState<
        Size
    >(Size.none);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setScreenSize(Size.xs);
            } else if (window.innerWidth >= 640 && window.innerWidth < 768) {
                setScreenSize(Size.sm);
            } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
                setScreenSize(Size.md);
            } else if (window.innerWidth >= 1024) {
                setScreenSize(Size.lg);
            }
        }

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return screenSize;
}