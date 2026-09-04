import { useEffect, useState } from "react";

// True only for devices with a precise pointer (mouse/trackpad) and no reduced-motion preference.
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
