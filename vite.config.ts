import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
<<<<<<< HEAD
  base: "/SM-137-Frontend/",
=======
>>>>>>> d05d38b4a17dfdf0679ccea6af385315fbc1447a
  server: {
    proxy: {
      "/api": {
        target:
<<<<<<< HEAD
          "http://ec2-54-180-106-175.ap-northeast-2.compute.amazonaws.com:8080/",
=======
          "http://ec2-54-180-106-175.ap-northeast-2.compute.amazonaws.com:8080",
>>>>>>> d05d38b4a17dfdf0679ccea6af385315fbc1447a
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
