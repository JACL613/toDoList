// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FormLogin from './components/FormLogin'
import FormCreateNote from './components/FormCreateNote'
import CardNotas from './components/CardNotas'
import FormCreateUser from './components/FormCreateUser'
import noteServices from './services/noteServices'
import Drop from './components/Drop'
import { actionSaveAllNotes } from './actions/notas.actions'

function App () {
  const state = useSelector((state) => state.notas)
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (user && user._id) {
      noteServices.getAll()
        .then((res) => {
          dispatch(actionSaveAllNotes(res.todos))
        })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  const ComponentNotes = () => {
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

  return (
    <div className="">

      {user._id ? <h3>{user.firstName}</h3> : null}

      {
        user._id
          ? <div>
          <Drop >
            <h4>hola</h4>
          </Drop>
          <ComponentNotes />
          <FormCreateNote />
        </div>
          : <div>
        <button type="button" onClick={() => setShow(!show)}>{show === true ? 'Registrar' : 'Iniciar' }</button>
          {
            show === true
              ? <FormLogin />
              : <FormCreateUser />
          }
        </div>
      }
    </div>
  )
}

export default App
