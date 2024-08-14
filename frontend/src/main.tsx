import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App1 from './App1.tsx'
import 'bootstrap/dist/css/bootstrap.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App1/> 
  </StrictMode>,
)

// App component

