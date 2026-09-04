import { useEffect, useRef, useState } from "react";

// Tracks an element's rendered width so pixel-based layout math (drag distance,
// slide spacing) can stay in sync as the viewport or container resizes.
function useElementWidth() {
    const ref = useRef(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new ResizeObserver(([entry]) => {
            setWidth(entry.contentRect.width);
        });
        observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return [ref, width];
}

export default useElementWidth;
