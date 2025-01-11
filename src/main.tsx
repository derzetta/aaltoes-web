import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import BillingInfo from './pages/BillingInfo'
import CodeOfConduct from './pages/policies/CodeOfConduct'
import PrivacyNotice from './pages/policies/PrivacyNotice'
import AssociationRules from './pages/policies/AssociationRules'
import Projects from './pages/Projects'
import About from './pages/About'
import Team from './pages/Team'
import Events from './pages/Events'
import './index.css'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/billing-info',
    element: <BillingInfo />,
  },
  {
    path: '/code-of-conduct',
    element: <CodeOfConduct />,
  },
  {
    path: '/privacy-notice',
    element: <PrivacyNotice />,
  },
  {
    path: '/association-rules',
    element: <AssociationRules />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/team',
    element: <Team />,
  },
  {
    path: '/events',
    element: <Events />,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
