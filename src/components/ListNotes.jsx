/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux'
import CardNotas from './CardNotas'

export default function ListNotes () {
  const state = useSelector((state) => state.notas)

  return (
    <div className='container container-list-flex'>
       <ul className='container-list'>
        {state.length > 0 && !state.includes(null)
          ? state.map((item) => (
            item.isCompleted ? <CardNotas key={item._id} item={item} /> : null
          ))
          : <li>No hay notas</li>}
      </ul>

       <ul className='container-list'>
        {state.length > 0 && !state.includes(null)
          ? state.map((item) => (
            !item.isCompleted ? <CardNotas key={item._id} item={item} /> : null
          ))
          : <li>No hay notas</li>}
      </ul>
    </div>
  )
}
