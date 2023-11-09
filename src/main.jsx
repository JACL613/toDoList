import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/global.store'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import FormLogin from './components/FormLogin.jsx'
import FormCreateUser from './components/FormCreateUser.jsx'
import FormCreateNote from './components/FormCreateNote.jsx'
import Blog from './components/Blog.jsx'
import ListNotes from './components/ListNotes.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'login',
        element: <FormLogin />
      },
      {
        path: 'home',
        element: <Blog />
      },
      {
        path: 'register',
        element: <FormCreateUser />
      },
      {
        path: 'desboard',
        element:

      (<div>
          <ListNotes/>
          <FormCreateNote/>
        </div>
      )
      },

      {
        path: 'config',
        element: <div>Configuración</div>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
  </Provider>
)
