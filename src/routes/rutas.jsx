import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Blog from '../components/Blog'
import FormCreateNote from '../components/FormCreateNote'
import FormCreateUser from '../components/FormCreateUser'
import FormLogin from '../components/FormLogin'
import ListNotes from '../components/ListNotes'

export const router = createBrowserRouter([
  {
    path: '/toDoList',
    basename: 'toDoList',
    element: <App />,
    children: [
      {
        path: 'login',
        basename: 'toDoList',
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
            <ListNotes />
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
