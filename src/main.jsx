import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import PlayerContextProvider from './context/PlayerContaxt.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <PlayerContextProvider>
      <App />
    </PlayerContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
