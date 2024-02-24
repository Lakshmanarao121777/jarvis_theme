import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@client': './src/client',
      '@server': './src/server',
      '@components': './src/client/components',
      '@layout': './src/client/layout',
      'utils': './src/client/utils',
      'pages': './src/client/pages',
    }
  }
});
