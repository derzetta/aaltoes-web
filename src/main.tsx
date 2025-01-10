import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import BillingInfo from './pages/BillingInfo'
import CodeOfConduct from './pages/policies/CodeOfConduct'
import PrivacyNotice from './pages/policies/PrivacyNotice'
import AssociationRules from './pages/policies/AssociationRules'
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
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
