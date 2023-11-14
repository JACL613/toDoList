import '../assets/css/form-note.css'
import { useEffect, useState } from 'react'
import { actionCreateNote } from '../actions/notas.actions'
import { useDispatch, useSelector } from 'react-redux'
import Calendario from './Calendario'
import noteServices from '../services/noteServices'
import Drop from './Drop'
import { useNavigate } from 'react-router-dom'
import { AnimationLabel } from '../assets/animations/scripts'

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
      console.log('User not logged in')
      redirect('/toDoList/login')
    }
    AnimationLabel()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const handleSubmitNote = (e) => {
    e.preventDefault()

    const data = { name: title, description: body, finishDate: fechaEvent, isCompleted, userId: user._id }
    noteServices.create(data)
      .then((res) => {
        console.log(res)
        dispatch(actionCreateNote(res.todo))
      })
    setTitle('')
    setBody('')
    setFechaEvent('')
  }

  return <form className='form' onSubmit={handleSubmitNote} style={{ width: '50vw' }}>
    <Drop stateShow={dropShow} setStateShow={e => setDropShow(e)}>
      <Calendario setClose={e => setDropShow(e)} fechaEvent={e => setFechaEvent(e)}/>
    </Drop>
   <div className='form__control'>
    <input className='form__input' name="Title" onChange={e => setTitle(e.target.value)} type="text" value={title} required/>
    <label className='form__label' >Title</label>
   </div>
   <div className='form__control'>
    <input className='form__input' name="body" onChange={e => setBody(e.target.value)} type="text" value={body} required/>
    <label className='form__label' htmlFor="body">Descripcion</label>
   </div>
   <div className="grup__date">

    <label className="label__float" htmlFor="date">Fecha</label>
    <input name="date" className='input__date' type="datetime-local" defaultValue={fechaEvent}
    onClick={(e) => {
      e.preventDefault()
      setDropShow(!dropShow)
    }}/>
    <label htmlFor="isCompleted">Estado</label>
    <input className='cyberpunk-checkbox' name="isCompleted" type="checkbox" onChange={() => { setisCompleted(!isCompleted) }} />
   </div>
    <button className='button1' type="submit">Add</button>
</form>
}
