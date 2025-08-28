import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    projects: ["apps/api/vitest.config.e2e.ts"],
    coverage: {
      enabled: true,
      provider: "v8",
      reporter: ["cobertura"],
      reportOnFailure: true,
    },
    reporters: ["default", "junit", "html"],
  },
});
