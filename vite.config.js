import { cloudflare } from "@cloudflare/vite-plugin";
import { defineConfig } from "vite";
import { sites } from "./build/sites-vite-plugin.js";

const isCodexSeatbeltSandbox = process.env.CODEX_SANDBOX === "seatbelt";
const isGitHubPages = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  base: isGitHubPages ? "/mogu-mogu-seal-pool/" : "/",
  server: isCodexSeatbeltSandbox
    ? { watch: { useFsEvents: false, usePolling: true } }
    : undefined,
  plugins: [
    sites(),
    cloudflare({
      viteEnvironment: {
        name: "server",
      },
      config: {
        name: "mogu-mogu-seal-pool",
        main: "./worker/index.js",
        compatibility_date: "2026-05-22",
        assets: {
          binding: "ASSETS",
          run_worker_first: true,
        },
      },
    }),
  ],
});
