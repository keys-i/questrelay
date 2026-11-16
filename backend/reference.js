import { createApiReference } from "https://cdn.jsdelivr.net/npm/@scalar/api-reference@1.78.0/esm.js";

createApiReference("#app", {
  url: "/api/openapi.json",
  theme: "none",
  layout: "modern",
  hideModels: false,
  hideDownloadButton: false,
  darkMode: true,
  withDefaultFonts: false,
  customCss: `
      .scalar-app {
        --scalar-font: Inter, ui-sans-serif, system-ui, sans-serif;
        --scalar-font-code: ui-monospace, "SFMono-Regular", Consolas, monospace;
        --scalar-radius: 0.65rem;
        --scalar-radius-lg: 0.9rem;
      }
      .light-mode {
        --scalar-color-1: #242630;
        --scalar-color-2: #616573;
        --scalar-color-3: #7d8190;
        --scalar-color-accent: #5865f2;
        --scalar-background-1: #ffffff;
        --scalar-background-2: #eef0f4;
        --scalar-background-3: #e1e5ed;
        --scalar-background-accent: rgb(88 101 242 / 0.1);
        --scalar-border-color: rgb(22 25 36 / 0.12);
        --scalar-sidebar-background-1: #e3e5eb;
        --scalar-sidebar-color-1: #242630;
        --scalar-sidebar-color-2: #616573;
        --scalar-sidebar-color-active: #ffffff;
        --scalar-sidebar-item-active-background: #5865f2;
        --scalar-sidebar-item-hover-background: #d7dae3;
        --scalar-sidebar-border-color: rgb(22 25 36 / 0.12);
      }
      .dark-mode {
        --scalar-color-1: #f1f2f5;
        --scalar-color-2: #a2a5b3;
        --scalar-color-3: #7d808d;
        --scalar-color-accent: #8b9bea;
        --scalar-background-1: #24252d;
        --scalar-background-2: #2e3039;
        --scalar-background-3: #3b3d48;
        --scalar-background-accent: rgb(88 101 242 / 0.16);
        --scalar-border-color: rgb(255 255 255 / 0.09);
        --scalar-sidebar-background-1: #1b1c23;
        --scalar-sidebar-color-1: #f1f2f5;
        --scalar-sidebar-color-2: #a2a5b3;
        --scalar-sidebar-color-active: #ffffff;
        --scalar-sidebar-item-active-background: #5865f2;
        --scalar-sidebar-item-hover-background: #3b3d48;
        --scalar-sidebar-border-color: rgb(255 255 255 / 0.09);
      }
      .scalar-app :is(a, button, input, select, textarea):focus-visible {
        outline: 3px solid #8b9bea;
        outline-offset: 2px;
      }
    `,
  metaData: {
    title: "QuestRelay API",
    description: "Interactive OpenAPI reference for QuestRelay",
  },
});
