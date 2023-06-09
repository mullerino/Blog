import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App'

import './global.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
)
