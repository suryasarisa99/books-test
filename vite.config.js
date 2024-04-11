import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@src": path.resolve("./src"),
      "@lib": path.resolve("./lib"),
      "@public": path.resolve("./public"),
      "@components": path.resolve("./src/components"),
      "@pages": path.resolve("./src/pages"),
      "@app": path.resolve("./src/app"),
      "@hooks": path.resolve("./src/hooks"),
      "@context": path.resolve("./src/context"),
      "@assets": path.resolve("./src/assets"),
      "@utils": path.resolve("./src/utils"),
    },
  },
  plugins: [
    react(),
    VitePWA({
      includeAssets: [
        "favicon.ico",
        "logo.png",
        "assets/logo.png",
        "assets/img1.jpg",
        "bank.png",
        "register2.png",
        "home/img1.jpg",
        "home/img2.png",
        "home/img3a.jpg",
        "home/img3b.jpg",
        "home/img3c.jpg",
        "home/img4.jpg",
      ],
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      // manifest: false,

      manifest: {
        name: "books-pages",
        short_name: "books-pages",
        description: "My Awesome App description",
        start_url: "/",
        display: "standalone",
        theme_color: "#000000",
        background_color: "#000000",
        icons: [
          {
            src: "/vite.svg",
            sizes: "512x512",
            // type: "image/png",
            type: "image/svg+xml",
          },
          {
            src: "/vite.svg",
            sizes: "144x144",
            type: "image/svg+xml",
          },
        ],
      },
    }),
  ],
  server: {
    host: "192.168.0.169",
    port: 4444,
  },
});
