import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import noteServices from './services/noteServices'
import { actionSaveAllNotes } from './actions/notas.actions'
import Nav from './components/Nav'
import { Outlet } from 'react-router-dom'

function App () {
  // const state = useSelector((state) => state.notas)
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  // const [show, setShow] = useState(false)

  useEffect(() => {
    if (user && user._id) {
      noteServices.getAll()
        .then((res) => {
          dispatch(actionSaveAllNotes(res.todos))
        })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  return (
    <div className="">

      <Nav />
      <Outlet />
    </div>
  )
}

export default App
