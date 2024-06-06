import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Leva} from 'leva'
import Overlay from './Overlay.jsx'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Leva collapsed />
    <App />
    <Overlay />
  </React.StrictMode>
)
