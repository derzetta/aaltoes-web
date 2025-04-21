import type { Config } from "@react-router/dev/config";
import routes from "./src/routes";

export default {
  appDirectory: "src",
  prerender: () => {
    return routes.map((route) => route.path)
  }
} satisfies Config;
