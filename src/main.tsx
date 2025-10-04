import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BackgroundScreen } from './index'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BackgroundScreen />
  </StrictMode>,
)
