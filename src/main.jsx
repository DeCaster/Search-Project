import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//react dom-dom htmle baglayan bilesendir
//etkilesimi saglayan fonksiyonlar handlerdiir

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
