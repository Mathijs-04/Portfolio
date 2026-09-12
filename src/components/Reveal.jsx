import { motion } from "framer-motion";

function Reveal({ children, delay = 0, y = 24, className = "", layout = false }) {
    return (
        <motion.div
            layout={layout}
            className={className}
            transition={{
                layout: { duration: 0.5, ease: "easeInOut" },
            }}
        >
            {children}
        </motion.div>
    );
}

export default Reveal;