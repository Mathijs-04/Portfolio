import { useEffect, useState } from "react";

function useIsDesktop() {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const query = window.matchMedia("(min-width: 768px)");
        const update = () => setIsDesktop(query.matches);
        update();

        query.addEventListener("change", update);
        return () => query.removeEventListener("change", update);
    }, []);

    return isDesktop;
}

export default useIsDesktop;
