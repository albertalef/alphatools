import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './assets/index.css'
import ContextHolder from './components/ContextHolder'
import AutoBidPage from './pages/AutoBidPage'
import ConfigPage from './pages/ConfigPage'
import { store } from './redux/store'
import { QueryClientProvider } from 'react-query'
import queryClient from './config/reactQuery.config'

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/config",
        element: <ConfigPage />
      },
      {
        path: '/',
        element: <AutoBidPage />,
      },
      {
        path: "/traitBid",
        element: <ContextHolder />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ReduxProvider>
  </React.StrictMode>
)
