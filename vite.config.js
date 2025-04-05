import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [tailwindcss(), react()],
    // server: {
    //   host: '192.168.1.11', // Accept connections from any IP address
    //   port: 3000, // You can specify a different port if needed
    // },
});
