import { useRef } from "react";
import usePointerCapable from "./usePointerCapable.js";

// Follows the cursor closely while hovering, then eases back over this long
// so releasing a card glides home instead of snapping.
const TRACK_TRANSITION = "transform 100ms ease-out";
const RETURN_TRANSITION = "transform 600ms cubic-bezier(0.22, 1, 0.36, 1)";

// Attaches 3D-tilt + cursor-sheen behaviour to an element via ref + handlers.
// Pointer-only: on touch devices the handlers are no-ops and nothing is applied.
function useTilt({ max = 10, scale = 1.02 } = {}) {
    const ref = useRef(null);
    const enabled = usePointerCapable();

    const onMouseMove = (e) => {
        if (!enabled || !ref.current) return;
        const el = ref.current;
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        const rotateX = (0.5 - y) * max * 2;
        const rotateY = (x - 0.5) * max * 2;

        el.style.transition = TRACK_TRANSITION;
        el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
        el.style.setProperty("--sheen-x", `${x * 100}%`);
        el.style.setProperty("--sheen-y", `${y * 100}%`);
        el.style.setProperty("--sheen-opacity", "1");
    };

    const onMouseLeave = () => {
        if (!enabled || !ref.current) return;
        const el = ref.current;

        el.style.transition = RETURN_TRANSITION;
        el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
        el.style.setProperty("--sheen-opacity", "0");
    };

    return { ref, onMouseMove, onMouseLeave };
}

export default useTilt;
