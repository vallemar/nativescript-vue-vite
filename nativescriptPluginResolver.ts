import path from "path";
import fs from "fs";
import { Plugin } from "vite";

export default function nativescriptPluginResolver(): Plugin {
  return {
    name: "nativescript-plugin-resolver",
    enforce: "pre",
    async resolveId(source: string, importer: string | undefined, options) {
      console.log("RESOLVING", source, importer);

      let resolution: { id: string } | null = null;

      try {
        resolution = await this.resolve(source, importer, options);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        const pkgJsonResolution = await this.resolve(source + "/package.json");

        if (pkgJsonResolution?.id) {
          const pkgJson = JSON.parse(
            fs.readFileSync(pkgJsonResolution.id, "utf-8")
          );

          // Handle NativeScript plugins
          if (pkgJson.main && pkgJson.nativescript) {
            source = path.join(source, `${pkgJson.main}.ios`);
            resolution = await this.resolve(source, importer, options);
          }
        }
      }

      return resolution?.id ?? "";
    },
  };
}
