/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux'
import { actionDeleteNote, actionUpdateNote } from '../actions/notas.actions'
import noteServices from '../services/noteServices'

export default function CardNotas ({ item }) {
  const dispatch = useDispatch()
  const handleActionDelete = (id) => {
    console.log(id)
    noteServices.Delete(id)
      .then((res) => {
        console.log(res)
        dispatch(actionDeleteNote({ id }))
      })
  }
  const handleActionIsCompleted = (nota) => {
    const data = {
      ...nota,
      isCompleted: !nota.isCompleted
    }
    noteServices.Update(data)
      .then((res) => {
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
    dispatch(actionUpdateNote(data))
  }
  return (
    <>
         <li >
          Titulo: {item.name}
          <br/>
          Description: {item.description}
          <br/>
          Fecha Final: {item.finishDate.slice(0, 10)}
          <br/>
          Estado: {item.isCompleted === true ? 'Completada' : 'Pendiente'}
          <button onClick={() => handleActionIsCompleted(item)} >
            {item.isCompleted === true ? 'Seguimiento' : 'Completar'}
          </button>
          <br/>
          <button onClick={() => handleActionDelete(item._id)}>Delete</button>
          </li>
    </>
  )
}
