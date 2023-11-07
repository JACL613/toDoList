import { useEffect, useState } from 'react'
import { actionCreateNote } from '../actions/notas.actions'
import { useDispatch, useSelector } from 'react-redux'
import Calendario from './Calendario'
import noteServices from '../services/noteServices'
import Drop from './Drop'
import { useNavigate } from 'react-router-dom'

export default function FormCreateNote () {
  const dispatch = useDispatch()
  const redirect = useNavigate()
  const user = useSelector(state => state.user)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [fechaEvent, setFechaEvent] = useState('')
  const [isCompleted, setisCompleted] = useState(false)
  const [dropShow, setDropShow] = useState(false)

  useEffect(() => {
    if (!user._id) {
      redirect('/login')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const handleSubmitNote = (e) => {
    e.preventDefault()
    // const id = Math.floor(Math.random() * 999999);

    const data = { name: title, description: body, finishDate: fechaEvent, isCompleted, userId: user._id }
    noteServices.create(data)
      .then((res) => {
        console.log(res)
        dispatch(actionCreateNote(res.todo))
      })
    setTitle('')
    setBody('')
  }

  return <form onSubmit={handleSubmitNote} style={{ width: '50vw' }}>
    <Drop stateShow={dropShow} setStateShow={e => setDropShow(e)}>
      <Calendario setClose={e => setDropShow(e)} fechaEvent={e => setFechaEvent(e)}/>
    </Drop>
    <label htmlFor="Title">Title</label>
    <input name="Title" onChange={e => setTitle(e.target.value)} type="text" placeholder="Titulo" value={title} required/>
    <label htmlFor="body">Descripcion</label>
    <input name="body" onChange={e => setBody(e.target.value)} type="text" placeholder="Descripcion" value={body} required/>
    <input type="datetime-local" defaultValue={fechaEvent}
    onClick={(e) => {
      e.preventDefault()
      setDropShow(!dropShow)
    }}/>
    <label htmlFor="isCompleted">Estado</label>
    <input name="isCompleted" type="checkbox" onChange={() => { setisCompleted(!isCompleted) }} />
    <button type="submit">Add</button>
</form>
}
