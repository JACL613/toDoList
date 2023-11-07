import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider, useSelector } from 'react-redux'
import store from './store/global.store'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import FormLogin from './components/FormLogin.jsx'
import FormCreateUser from './components/FormCreateUser.jsx'
import FormCreateNote from './components/FormCreateNote.jsx'
import CardNotas from './components/CardNotas.jsx'

const ComponentNotes = () => {
  const state = useSelector((state) => state.notas)

  return <div>
      <h1>To Do List</h1>
      {/* Componente render notas */}
      <ul>
        {state.length > 0 && !state.includes(null)
          ? state.map((item) => (
            <CardNotas key={item._id} item={item} />
          ))
          : <li>No hay notas</li>}
      </ul>

    </div>
}

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
        path: 'register',
        element: <FormCreateUser />
      },
      {
        path: 'desboard',
        element:

      (<div>
          <ComponentNotes/>
          <FormCreateNote/>
        </div>
      )
      },

      {
        path: 'about',
        element: <div>About</div>
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
