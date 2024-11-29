No use this file

import { defineConfig, Plugin, createServer } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import commonjs from "vite-plugin-commonjs";
import requireTransform from "vite-plugin-require";
import nativescriptPluginResolver from "./nativescriptPluginResolver";
import dynamicImport from "vite-plugin-dynamic-import";

const platform = process.env.PLATFORM || "android"; // Cambia "android" o "ios"
console.log("PLATFORM", platform);
const server = await createServer(/* options */)

const environment = server.environments.client
environment.transformRequest(url)
console.log(server.environments.ssr.moduleGraph)
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // platformSpecificResolver(),
    vue(),
    ,
    /*   dynamicImport({
      filter(id) {
        console.log("AQUIII", id);

        // `node_modules` is exclude by default, so we need to include it explicitly
        // https://github.com/vite-plugin/vite-plugin-dynamic-import/blob/v1.3.0/src/index.ts#L133-L135
        if (id.includes("/node_modules/foo")) {
          return true;
        }
      },
    }), */
    // commonjs({}),

    /* commonjs(),
    requireTransform({
      // Configura qué extensiones habilitarán `require`
      fileRegex: /.ts$|.tsx$/,
    })  */
    //nativescriptPluginResolver(),
  ],
  optimizeDeps: {
    include: ["linked-dep"], // Asegúrate de que la librería sea procesada
  },
  server: {
    fs: {
      allow: ["node_modules/@nativescript/core"], // Permite acceso a @nativescript/core
    },
  },
  /*  server: {
    fs: {
      allow: [
        "node_modules/@nativescript/core",
        "node_modules/nativescript-vue",
      ], // Permite acceso a @nativescript/core
    },
  }, */
  /* optimizeDeps: {
    include: ["linked-dep"],
  }, */
  build: {
    /* commonjsOptions: {
      include: [/node_modules\/@nativescript\/core/], // Asegura que Vite maneje los archivos de esta librería
    }, */
    /*  commonjsOptions: {
      include: [
        /linked-dep/,
        /node_modules/,
        "node_modules/@nativescript/core/application/index.android",
        "node_modules/@nativescript/core/globals/index",
        "node_modules/@nativescript/core/bundle-entry-points",
        "node_modules/@nativescript/core/ui/frame",
        "node_modules/@nativescript/core/ui/frame/activity",
      ],
    }, */
    /*     outDir: "dist", // Carpeta donde se generarán los archivos
    emptyOutDir: true, // Limpia la carpeta `dist` antes de compilar
    sourcemap: true, // (opcional) Generar mapas de origen */
    rollupOptions: {
      external: ["@nativescript/core", "nativescript-vue"], // Marcar como dependencias externas
      input: {
        bundle: resolve(__dirname, "src/app.ts"),
      },
      /*  input: [
        resolve(__dirname, "node_modules/@nativescript/core/application/index"),
        resolve(__dirname, "node_modules/@nativescript/core/globals/index"),
        resolve(
          __dirname,
          "node_modules/@nativescript/core/bundle-entry-points"
        ),
        resolve(__dirname, "node_modules/@nativescript/core/ui/frame"),
        resolve(__dirname, "node_modules/@nativescript/core/ui/frame/activity"),
        resolve(__dirname, "src/app.ts"),
      ], */
      /* output: {
        dir: resolve(__dirname, "dist/assets/"),
        entryFileNames: "[name]/build.js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name]/assets/[name].[ext]",
        manualChunks: undefined,
      }, */
    },
  },
  resolve: {
    extensions: [".vue", ".css", ".ts", ".js"],
  },
  define: {
    __APPLE__: false,
    __IOS__: false,
    __VISIONOS__: false,
    __ANDROID__: true,

    "global.isAndroid": true,
    "global.android": true,
    "global.ios": false,
    "global.isIOS": false,

    //__DEV__: "development",
    __NS_WEBPACK__: false,
    __NS_ENV_VERBOSE__: false,
    __CSS_PARSER__: "cssParser", //JSON.stringify(getValue('cssParser', 'css-tree')),
    __UI_USE_XML_PARSER__: true,
    __UI_USE_EXTERNAL_RENDERER__: false,

    development: true,
  },
});
