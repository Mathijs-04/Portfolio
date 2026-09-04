import { useId, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import useIsDesktop from "./hooks/useIsDesktop.js";
import useElementWidth from "./hooks/useElementWidth.js";

// Desktop: each slide is narrower than the container (leaving margin either side)
// and neighbours peek into that margin at reduced scale/rotation, coverflow-style.
// Mobile: slides fill the container edge-to-edge, so it's a plain swipe with
// neighbours fully off-screen until dragged into view.
const DESKTOP_SLIDE_WIDTH = 0.74;
const DESKTOP_STEP = 0.42;
const DESKTOP_SCALE = 0.82;
const DESKTOP_ROTATE = 22;
const SWIPE_DISTANCE_RATIO = 0.18;
const SWIPE_VELOCITY = 0.5; // px/ms
const DRAG_MOVE_THRESHOLD = 5; // px, above which a click-through on a peeking slide is suppressed
const SLOT_OFFSETS = [-2, -1, 0, 1, 2];

// Shortest signed distance from `current` to `i` around a loop of length `len`,
// used only to pick the short way when jumping to a specific image (indicator dots).
function circularDiff(i, current, len) {
    let diff = i - current;
    if (diff > len / 2) diff -= len;
    if (diff < -len / 2) diff += len;
    return diff;
}

function CarouselComponent({ images }) {
    const isDesktop = useIsDesktop();
    const [containerRef, width] = useElementWidth();
    const uid = useId();
    const len = images.length;

    // An unbounded "virtual" position rather than a real array index: slides are
    // rendered by their fixed distance from this position (-2..+2), so each slide's
    // role only ever shifts by exactly one step and never has to flip sides — and for
    // a short image set, the same real image naturally fills both peek slots, giving
    // a seamless infinite loop instead of a dead edge.
    const [virtualIndex, setVirtualIndex] = useState(0);
    const currentReal = ((virtualIndex % len) + len) % len;

    const [dragX, setDragX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const dragStartX = useRef(null);
    const dragStartTime = useRef(0);
    const draggedRef = useRef(false);

    const goPrev = () => setVirtualIndex((v) => v - 1);
    const goNext = () => setVirtualIndex((v) => v + 1);
    // Dots identify a real image, not a slot, so jump by the shortest circular path.
    const goToReal = (i) => setVirtualIndex((v) => v + circularDiff(i, currentReal, len));

    const handlePointerDown = (e) => {
        if (len <= 1) return;
        draggedRef.current = false;
        dragStartX.current = e.clientX;
        dragStartTime.current = performance.now();
        setIsDragging(true);
        e.currentTarget.setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e) => {
        if (dragStartX.current === null) return;
        const delta = e.clientX - dragStartX.current;
        if (Math.abs(delta) > DRAG_MOVE_THRESHOLD) draggedRef.current = true;
        setDragX(delta);
    };

    const handlePointerUp = (e) => {
        if (dragStartX.current === null) return;
        const delta = e.clientX - dragStartX.current;
        const elapsed = Math.max(performance.now() - dragStartTime.current, 1);
        const velocity = Math.abs(delta) / elapsed;

        if (Math.abs(delta) > width * SWIPE_DISTANCE_RATIO || velocity > SWIPE_VELOCITY) {
            if (delta < 0) goNext(); else goPrev();
        }

        dragStartX.current = null;
        setIsDragging(false);
        setDragX(0);
        // Keep the "just dragged" flag alive through the click event the browser
        // fires right after pointerup, so it can suppress a stray slide-click nav.
        setTimeout(() => { draggedRef.current = false; }, 0);
    };

    const slideWidthRatio = isDesktop ? DESKTOP_SLIDE_WIDTH : 1;
    const step = isDesktop ? DESKTOP_STEP : 1;
    const scalePeek = isDesktop ? DESKTOP_SCALE : 1;
    const rotatePeek = isDesktop ? DESKTOP_ROTATE : 0;
    const slideWidth = width * slideWidthRatio;
    const slideLeft = (width - slideWidth) / 2;
    // Every slide keeps a true 16:9 box (matching the source screenshots) instead
    // of stretching to the container's full height, so nothing gets over-cropped.
    const containerHeight = width * (9 / 16);
    const slideHeight = slideWidth * (9 / 16);
    const slideTop = (containerHeight - slideHeight) / 2;
    const slotOffsets = len <= 1 ? [0] : SLOT_OFFSETS;

    return (
        <div className="mb-6">
            <div
                ref={containerRef}
                className="relative w-full aspect-video overflow-hidden rounded-xl select-none touch-pan-y cursor-grab active:cursor-grabbing"
                style={{ perspective: isDesktop ? 1200 : undefined }}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
            >
                {width > 0 && slotOffsets.map((offset) => {
                    // This slot's own position on the endless timeline — its identity,
                    // and hence its key, so React keeps animating the same DOM node as
                    // it glides from one role (offset) to the next.
                    const v = virtualIndex + offset;
                    const diff = offset;
                    const realIdx = ((v % len) + len) % len;

                    const x = diff * width * step + dragX;
                    const scale = diff === 0 ? 1 : scalePeek;
                    const rotateY = diff === 0 ? 0 : diff > 0 ? -rotatePeek : rotatePeek;
                    const opacity = Math.abs(diff) >= 2 ? 0 : diff === 0 ? 1 : 0.55;

                    return (
                        <motion.div
                            key={v}
                            className="absolute"
                            style={{ width: slideWidth, height: slideHeight, left: slideLeft, top: slideTop, zIndex: 10 - Math.abs(diff) }}
                            initial={false}
                            animate={{ x, scale, rotateY, opacity }}
                            transition={isDragging ? { duration: 0 } : {
                                x: { type: "spring", stiffness: 300, damping: 32 },
                                scale: { type: "spring", stiffness: 300, damping: 32 },
                                rotateY: { type: "spring", stiffness: 300, damping: 32 },
                                // A spring on opacity can overshoot and briefly rebound,
                                // which reads as a ghost of the slide it's fading past —
                                // a plain ease never overshoots, so it just fades cleanly.
                                opacity: { type: "tween", duration: 0.25, ease: "easeOut" },
                            }}
                            onClick={() => {
                                if (draggedRef.current || diff === 0) return;
                                setVirtualIndex(v);
                            }}
                        >
                            <img
                                src={images[realIdx]}
                                alt={`Slide ${realIdx + 1}`}
                                draggable={false}
                                className="h-full w-full object-cover rounded-xl pointer-events-none"
                            />
                        </motion.div>
                    );
                })}

                {len > 1 && (
                    <>
                        <button
                            onClick={goPrev}
                            onPointerDown={(e) => e.stopPropagation()}
                            aria-label="Previous slide"
                            className="absolute top-2/4 left-4 -translate-y-2/4 z-20 bg-slate-800/90 hover:bg-slate-800 text-white rounded-full border border-gray-400/50 hover:border-blue-400 transition-all duration-300 p-2"
                        >
                            <ChevronLeftIcon strokeWidth={2} className="h-5 w-5" />
                        </button>
                        <button
                            onClick={goNext}
                            onPointerDown={(e) => e.stopPropagation()}
                            aria-label="Next slide"
                            className="absolute top-2/4 right-4 -translate-y-2/4 z-20 bg-slate-800/90 hover:bg-slate-800 text-white rounded-full border border-gray-400/50 hover:border-blue-400 transition-all duration-300 p-2"
                        >
                            <ChevronRightIcon strokeWidth={2} className="h-5 w-5" />
                        </button>
                    </>
                )}
            </div>

            {len > 1 && (
                <div className="flex items-center justify-center gap-2 mt-4">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goToReal(i)}
                            aria-label={`Go to slide ${i + 1}`}
                            className="relative h-1.5 rounded-full bg-white/15 overflow-hidden transition-[width] duration-300 ease-out"
                            style={{ width: i === currentReal ? 28 : 8 }}
                        >
                            {i === currentReal && (
                                <motion.div
                                    layoutId={`carousel-indicator-${uid}`}
                                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA]"
                                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                                />
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default CarouselComponent;
