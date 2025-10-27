import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router"
import { Provider } from 'react-redux';
import './index.css'
import App from './App.jsx'
// @ts-ignore: missing type declarations for ./store
import {Store} from './store/index.js'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
  <BrowserRouter>
     <Provider store={Store}>
         <App />
     </Provider>
  </BrowserRouter>,
  </StrictMode>,
)




