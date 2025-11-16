import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), tailwindcss()],
  server: {
    allowedHosts: [
      "612d-212-124-181-28.ngrok-free.app", // ← your ngrok URL
    ],
  },
  base: "/portfolio",
});
