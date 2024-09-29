import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const rootElement = document.getElementById('root');
const reactRoot = createRoot(rootElement)

reactRoot.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
