import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
     <App></App>
     </BrowserRouter>
  </React.StrictMode>
)
