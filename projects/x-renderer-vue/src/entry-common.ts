import "systemjs";
import "systemjs/dist/extras/amd.min.js";
import "systemjs/dist/extras/use-default.min.js";
import "systemjs/dist/extras/named-register.min.js";
import "systemjs/dist/extras/dynamic-import-maps.min.js";

import { importMap, addToImportMapImports } from "packages/x-shared/utils/ImportMap";
import { ApplicationSchema } from "packages/x-core/src/types/schemas/application";

window.__X_RENDERER_API__ = {
  document,
  updateRoute() {
    console.warn("render is not initialized");
  },
  updateSchema() {
    console.warn("render is not initialized");
  }
};

declare global {
  interface Window {
    // 渲染器对外暴露 api
    __X_RENDERER_API__: {
      document: Document;
      updateRoute: (id: string) => void;
      updateSchema: (runtime: ApplicationSchema) => void;
    };
    pinia: typeof import("pinia");
    vue: typeof import("vue");
    vueRouter: typeof import("vue-router");
  }
}

addToImportMapImports(importMap);
