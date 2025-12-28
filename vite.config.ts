import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import type { UserConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 4007,
  },
  assetsInclude: ["**/*.PNG"],
} satisfies UserConfig);
