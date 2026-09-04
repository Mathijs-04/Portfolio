import { motion } from "framer-motion";

// Fades + slides content in the first time it scrolls into view. When `layout`
// is set, it also animates to its new position/size when it moves within its
// parent (e.g. a grid item re-sorting) via Framer Motion's FLIP animation.
function Reveal({ children, delay = 0, y = 24, className = "", layout = false }) {
    return (
        <motion.div
            layout={layout}
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1, margin: "0px 0px -10% 0px" }}
            transition={{
                opacity: { duration: 0.3, delay, ease: "easeOut" },
                y: { duration: 0.3, delay, ease: "easeOut" },
                layout: { duration: 0.5, ease: "easeInOut" },
            }}
        >
            {children}
        </motion.div>
    );
}

export default Reveal;
