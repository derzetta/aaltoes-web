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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
