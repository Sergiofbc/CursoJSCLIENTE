import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './Componentes/Login.jsx'
import SignUp from './Componentes/SignUp.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SignUp />
  </React.StrictMode>,
)
