import { useEffect, useState } from "react";

function usePointerCapable() {
    const [capable, setCapable] = useState(false);

    useEffect(() => {
        const fine = window.matchMedia("(pointer: fine)");
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

        const update = () => setCapable(fine.matches && !reduced.matches);
        update();

        fine.addEventListener("change", update);
        reduced.addEventListener("change", update);
        return () => {
            fine.removeEventListener("change", update);
            reduced.removeEventListener("change", update);
        };
    }, []);

    return capable;
}

export default usePointerCapable;
