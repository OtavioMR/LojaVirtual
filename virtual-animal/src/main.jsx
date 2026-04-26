import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// Imports de estilo (mantenha todos aqui)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './css/App.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* O BrowserRouter envolve o App para que as rotas lá dentro funcionem */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)