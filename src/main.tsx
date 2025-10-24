import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router"
import { Provider } from 'react-redux';
import './index.css'
import App from './App.tsx'
// @ts-ignore: missing type declarations for ./store
import {Store} from './store'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <BrowserRouter>
     <Provider store={Store}>
         <App />
     </Provider>
  </BrowserRouter>,
  </StrictMode>,
)
