import { defineConfig } from "vite";
import { AllureReporter } from "./index";

export default defineConfig({
  test: {
    reporters: [new AllureReporter({}), "dot"],
    // open:true,
    // ui:true,
    watch: false,
  },
});
