import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import { RequestsProvider } from './context/RequestsContext.jsx'
import { ListingsProvider } from './context/ListingsContext.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { OrdersProvider } from './context/OrdersContext.jsx'
import { ReviewsProvider } from './context/ReviewsContext.jsx'
import { AdminProvider } from './context/AdminContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <RequestsProvider>
          <ListingsProvider>
            <CartProvider>
              <OrdersProvider>
                <ReviewsProvider>
                  <AdminProvider>
                    <App />
                  </AdminProvider>
                </ReviewsProvider>
              </OrdersProvider>
            </CartProvider>
          </ListingsProvider>
        </RequestsProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)