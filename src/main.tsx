import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import NotFound from './pages/NotFound'
import App from './App.tsx'
import About from './pages/About'
import Team from './pages/Team'
import Projects from './pages/Projects'
import Events from './pages/Events'
import BillingInfo from './pages/BillingInfo'
import CodeOfConduct from './pages/policies/CodeOfConduct'
import PrivacyNotice from './pages/policies/PrivacyNotice'
import Authors from './pages/Authors'
import AssociationRules from './pages/policies/AssociationRules'
import Screen from './pages/Screen.tsx'
import FoodChart from './pages/FoodChart'
import Brand from './pages/Brand'
import Announcement2025 from './pages/Announcement2025'
import Tokyo2025Task from './pages/Tokyo2025Task'
import FocusTopics from './pages/initiatives/FocusTopics'
import International from './pages/initiatives/International'
import Spinout from './pages/initiatives/Spinout'
import OpenSource from './pages/initiatives/OpenSource'
import Blueprint from './pages/initiatives/Blueprint'
import Robotics from './pages/initiatives/Robotics'
import Log from './pages/initiatives/Log'
import Explore from './pages/Explore'
import ZeroBullshit from './pages/CV1.tsx'
import GetInvolved from './pages/GetInvolved'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/explore",
    element: <Explore />,
  },
  {
    path: "/cv1",
    element: <ZeroBullshit />,
  },
  {
    path: "/get-involved",
    element: <GetInvolved />,
  },
  {
    path: "/2025",
    element: <Announcement2025 />,
  },
  {
    path: "/2025/focus-topics",
    element: <FocusTopics />,
  },
  {
    path: "/2025/international",
    element: <International />,
  },
  {
    path: "/2025/spinout",
    element: <Spinout />,
  },
  {
    path: "/2025/opensource",
    element: <OpenSource />,
  },
  {
    path: "/2025/blueprint",
    element: <Blueprint />,
  },
  {
    path: "/2025/robotics",
    element: <Robotics />,
  },
  {
    path: "/2025/log",
    element: <Log />,
  },
  {
    path: "/tokyo2025task",
    element: <Tokyo2025Task />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/billing-info",
    element: <BillingInfo />,
  },
  {
    path: "/screen",
    element: <Screen />,
  },
  {
    path: "/food-chart",
    element: <FoodChart />,
  },
  {
    path: "/code-of-conduct",
    element: <CodeOfConduct />,
  },
  {
    path: "/privacy-notice",
    element: <PrivacyNotice />,
  },
  {
    path: "/authors",
    element: <Authors />,
  },
  {
    path: "/association-rules",
    element: <AssociationRules />,
  },
  {
    path: "/resources/authors",
    element: <Authors />
  },
  {
    path: "/resources/logo-bank",
    element: <Navigate to="/brand" replace />
  },
  {
    path: "/resources/logobank",
    element: <Navigate to="/brand" replace />
  },
  {
    path: "/brand",
    element: <Brand />
  },
  {
    path: "*",
    element: <NotFound />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
