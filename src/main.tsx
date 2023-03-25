import React from 'react'
import ReactDOM from 'react-dom/client'
import {Router} from './routes'
import {store} from './shared/features/store'
import { Provider } from 'react-redux'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
    <Router />
    </Provider>
  </React.StrictMode>,
)
