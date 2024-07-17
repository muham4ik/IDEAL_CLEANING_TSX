import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src/*" },
      { find: "@components", replacement: "/src/components" },
      { find: "@pages", replacement: "/src/pages/index.tsx" },
      { find: "@router", replacement: "/src/router/index.tsx" },
      { find: "@routes", replacement: "/src/router/routes.tsx" },
      { find: "@service", replacement: "/src/service/index.ts" },
      { find: "@assets", replacement: "/src/assets/index.jsx" },
      { find: "@modal", replacement: "/src/components/modal/index.tsx" },
      { find: "@validation", replacement: "/src/utils/validation.ts" },
      { find: "@notification", replacement: "/src/utils/notification.ts" },
      { find: "@token", replacement: "/src/utils/token-service.ts" },
      { find: "@auth-type", replacement: "/src/types/auth.ts" },
      { find: "@service-type", replacement: "/src/types/service.ts" },
      { find: "@order-type", replacement: "/src/types/order.ts" },
    ],
  },
});
