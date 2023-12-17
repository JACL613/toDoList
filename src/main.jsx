import './index.css'
import './assets/css/text.css'
import './assets/css/list-notes.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store/global.store'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/rutas'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
  </Provider>
)
