import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// 1. Third-party library styles first
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// 2. Your custom styles second (so they can easily override Bootstrap if needed)
import './index.css'
import './Resources/css/styles.css'

// 3. Components last
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)