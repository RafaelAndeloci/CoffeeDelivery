import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

import { RootLayout } from './root'
import { Index } from './routes/_index'
import { Checkout } from './routes/checkout'
import { Order } from './routes/order'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RootLayout>
      <Index />
    </RootLayout>
  </React.StrictMode>
)
