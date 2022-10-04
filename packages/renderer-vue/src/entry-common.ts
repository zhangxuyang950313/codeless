import "systemjs";
import "systemjs/dist/extras/amd.min.js";
import "systemjs/dist/extras/use-default.min.js";
import "systemjs/dist/extras/named-register.min.js";
import "systemjs/dist/extras/dynamic-import-maps.min.js";
import "tippy.js/dist/tippy.css";
import "@economizer/types/src/renderer-api";

import { importMap, addToImportMapImports } from "packages/shared/src";

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
    pinia: typeof import("pinia");
    vue: typeof import("vue");
    vueRouter: typeof import("vue-router");
  }
}

addToImportMapImports(importMap);