import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
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
    path: "*",
    element: <NotFound />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
