import { defineConfig, Plugin, UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import commonjs from "vite-plugin-commonjs";
import requireTransform from "vite-plugin-require";
import nativescriptPluginResolver from "./nativescriptPluginResolver";
import dynamicImport from "vite-plugin-dynamic-import";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import pkg from "./package.json";
const platform = process.env.PLATFORM || "android"; // Cambia "android" o "ios"
console.log("PLATFORM", platform);
import dynamicImportVars from "@rollup/plugin-dynamic-import-vars";
const define = {
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
};
function platformSpecificResolver(): Plugin {
  return {
    name: "platform-specific-resolver",
    enforce: "pre",
    async resolveId(source: string, importer: string | undefined, options) {
      console.log("ESTO", source);

      if (source.includes("fps-native")) {
        console.log("ENTRAAAA", source);

        return `./root-layout/index.${platform}.ts`; // Redirige al archivo correspondiente
      }
      return null; // No intercepta otras rutas
    },
  };
}

const resolveId = (source, importer) => {
  console.log("resolveId", source, importer);

  /*  if (source.endsWith("/application")) {
    const resolver = `/Users/vallemar/workspaces/test/nativescript-vue-vite/node_modules/@nativescript/core/application/application.${platform}.js`;
    console.log("entry application", "application", resolver);
    return { id: resolver, external: true };
  }
  if (source.endsWith("/color")) {
    const resolver = `@nativescript/core/color/index.${platform}.js`;
    console.log("entry color", "application", resolver);
    return { id: resolver, external: true };
  } */
  return null;
};
function platformSpddecificResolver(): Plugin {
  return {
    name: "platform-specific-resolverdd",
    enforce: "pre",
    async resolveId(source: string, importer: string | undefined, options) {
      return resolveId(source, importer);
    },
  };
}
function transform(): Plugin {
  return {
    name: "transform-first",
    resolveId: {
      order: "pre",
      handler(source) {
        return resolveId(source, null);
      },
    },
  };
}
function defineEnv(): Plugin {
  // Share state among all environments in dev and build

  return {
    name: "nativescript-env-plugin",
    config(config: UserConfig) {
      console.log("ENVs", config.environments);
      if (config.environments) config.environments.nativescript ??= {};
    },

    // Opt-in into a single instance for all environments
    sharedDuringBuild: true,
  };
}
// https://vitejs.dev/config/
export default defineConfig({
  /*  environments: {
    nativescript: {
      define,
      optimizeDeps: {
        include: ["@nativescript/core"], // Asegúrate de que la librería sea procesada
      },
      build: {
        rollupOptions: {
          external: ["@nativescript/core", "@nativescript/core/application"],
          input: {
            bundle: resolve(__dirname, "src/app.ts"),
          },
        },
      },
    },
  }, */
  // appType: "custom",
  plugins: [
    // platformSpecificResolver(),
    vue(),
    // defineEnv(),
    transform(),
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
    // platformSpddecificResolver(),
    commonjs({}),
    /* commonjs(),
    requireTransform({
      // Configura qué extensiones habilitarán `require`
      fileRegex: /.ts$|.tsx$/,
    })  */
    //nativescriptPluginResolver(),
  ],
  optimizeDeps: {
    //  include: ["@nativescript/core/**/*.js"], // Asegúrate de que la librería sea procesada
  },
  /*   server: {
    fs: {
      allow: ["node_modules/@nativescript/core"], // Permite acceso a @nativescript/core
    },
  }, */
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
      external: Object.keys(pkg.dependencies),
      input: {
        globals: resolve(
          __dirname,
          "node_modules/@nativescript/core/globals/index.js"
        ), // Tu archivo principal
        application: resolve(
          __dirname,
          "node_modules/@nativescript/core/bundle-entry-points.js"
        ),
        bundle: resolve(__dirname, "src/app.ts"),
        //   bundle: resolve(__dirname, "src/app.ts"), // Tu archivo principal
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
      output: {
        dir: resolve(__dirname, "dist/assets/"),
        entryFileNames: "[name]/build.js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name]/assets/[name].[ext]",
        manualChunks: undefined,
      },
    },
  },
  resolve: {
    extensions: [".vue", ".android.js", ".css", ".ts", ".js"],
  },
  define,
});
