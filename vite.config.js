import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    base: "/Portfolio/",
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (!id.includes("node_modules")) return;
                    if (/node_modules\/(react|react-dom|scheduler)\//.test(id)) return "react";
                    if (/node_modules\/(framer-motion|motion-dom|motion-utils)\//.test(id)) return "motion";
                    if (id.includes("node_modules/react-router")) return "router";
                    return "vendor";
                },
            },
        },
    },
});
