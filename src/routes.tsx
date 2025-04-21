import type { RouteConfig } from "@react-router/dev/routes";

export default [
  {
    path: "/",
    file: "./App.tsx",
  },
  {
    path: "/explore",
    file: "./pages/Explore.tsx",
  },
  {
    path: "/cv1",
    file: "./pages/CV1.tsx",
  },
  {
    path: "/get-involved",
    file: "./pages/GetInvolved.tsx",
  },
  {
    path: "/2025",
    file: "./pages/Announcement2025.tsx",
  },
  {
    path: "/2025/focus-topics",
    file: "./pages/initiatives/FocusTopics.tsx",
  },
  {
    path: "/2025/international",
    file: "./pages/initiatives/International.tsx",
  },
  {
    path: "/2025/spinout",
    file: "./pages/initiatives/Spinout.tsx",
  },
  {
    path: "/2025/opensource",
    file: "./pages/initiatives/OpenSource.tsx",
  },
  {
    path: "/2025/blueprint",
    file: "./pages/initiatives/Blueprint.tsx",
  },
  {
    path: "/2025/robotics",
    id: "robots-1",
    file: "./pages/initiatives/Robotics.tsx",
  },
  {
    path: "/2025/log",
    file: "./pages/initiatives/Log.tsx",
  },
  {
    path: "/tokyo2025task",
    file: "./pages/Tokyo2025Task.tsx",
  },
  {
    path: "/about",
    file: "./pages/About.tsx",
  },
  {
    path: "/team",
    file: "./pages/Team.tsx",
  },
  {
    path: "/projects",
    file: "./pages/Projects.tsx",
  },
  {
    path: "/events",
    file: "./pages/Events.tsx",
  },
  {
    path: "/billing-info",
    file: "./pages/BillingInfo.tsx",
  },
  {
    path: "/screen",
    file: "./pages/Screen.tsx",
  },
  {
    path: "/food-chart",
    file: "./pages/FoodChart.tsx",
  },
  {
    path: "/code-of-conduct",
    file: "./pages/policies/CodeOfConduct.tsx",
  },
  {
    path: "/privacy-notice",
    file: "./pages/policies/PrivacyNotice.tsx",
  },
  {
    path: "/authors",
    id: "authors-1",
    file: "./pages/Authors.tsx",
  },
  {
    path: "/association-rules",
    file: "./pages/policies/AssociationRules.tsx",
  },
  {
    path: "/resources/authors",
    id: "authors-2",
    file: "./pages/Authors.tsx",
  },
  {
    path: "/resources/logo-bank",
    id: "logo-bank-1",
    file: "./pages/LogoBank.tsx",
  },
  {
    path: "/resources/logobank",
    id: "logo-bank-2",
    file: "./pages/LogoBank.tsx",
  },
  {
    path: "/brand",
    file: "./pages/Brand.tsx",
  },
  {
    path: "/robo",
    file: "./pages/Robo.tsx",
  },
  {
    path: "/robots",
    id: "robots-2",
    file: "./pages/initiatives/Robotics.tsx",
  },
  {
    path: "/silkway",
    file: "./pages/Silkway.tsx",
  },
  {
    path: "*",
    file: "./pages/NotFound.tsx",
  }
] satisfies RouteConfig;