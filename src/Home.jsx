import { useNavigate } from "react-router";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import usePointerCapable from "./hooks/usePointerCapable.js";

function Home() {
    const navigate = useNavigate();
    // The hover-scale is pointer-only; the tap-scale stays for touch feedback.
    const canHover = usePointerCapable();

    return (
        <div className="gradient-background min-h-[85vh] flex items-center justify-center">
            <motion.div
                className="text-center text-white"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <h1 className="text-6xl font-panchang font-bold max-md:text-4xl">Mathijs van der Meijde</h1>
                <div className="mt-4 text-4xl text-white font-panchang font-semibold text-left overflow-hidden max-md:text-base max-md:text-center">
                    <Typewriter
                        options={{ loop: true, delay: "natural" }}
                        onInit={(typewriter) => {
                            typewriter.pauseFor(1500)
                                .typeString("Creative Developer")
                                .pauseFor(1500)
                                .deleteChars(18)
                                .typeString("Full-Stack Web Developer")
                                .pauseFor(1500)
                                .deleteChars(24)
                                .typeString("AI-Engineer")
                                .pauseFor(1500)
                                .deleteChars(11)
                                .typeString("Game Developer")
                                .pauseFor(1500)
                                .deleteChars(14)
                                .typeString("Designer")
                                .pauseFor(1500)
                                .deleteChars(8)
                                .start();
                        }}
                    />
                </div>
                <motion.div
                    className="mt-12 flex justify-center gap-4 max-md:flex-col max-md:mt-8 max-md:gap-3 max-md:w-[60%] max-md:mx-auto"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                >
                    {[
                        { key: "projects", label: "My Projects" },
                        { key: "experience", label: "My Experience" },
                        { key: "about", label: "About Me" },
                    ].map(({ key, label }) => (
                        <motion.button
                            key={key}
                            onClick={() => navigate(`/${key}`)}
                            whileHover={canHover ? { scale: 1.05 } : undefined}
                            whileTap={{ scale: 0.97 }}
                            className="group relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-white rounded-lg bg-gradient-to-br from-[#6C5CE7] via-[#A29BFE] to-[#D6CCFF] md:group-hover:from-[#6C5CE7] md:group-hover:via-[#A29BFE] md:group-hover:to-[#D6CCFF] md:hover:text-white w-48 flex-shrink-0 max-md:w-full btn-white-text"
                        >
                            <span className="relative px-10 py-2.5 transition-all ease-in duration-75 bg-gray-900 dark:bg-gray-900 rounded-md md:group-hover:bg-transparent md:group-hover:dark:bg-transparent w-full font-panchang font-bold text-[10px] max-md:px-4 h-12 flex items-center justify-center text-white">{label}</span>
                            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] md:group-hover:duration-1000 md:group-hover:[transform:skew(-12deg)_translateX(100%)] max-md:hidden">
                                <div className="relative h-full w-8 bg-white/20"></div>
                            </div>
                        </motion.button>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Home;
