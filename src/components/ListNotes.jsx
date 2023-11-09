import { useSelector } from 'react-redux'
import CardNotas from './CardNotas'

export default function ListNotes () {
  const state = useSelector((state) => state.notas)

  return (
     <ul>
        {state.length > 0 && !state.includes(null)
          ? state.map((item) => (
            <CardNotas key={item._id} item={item} />
          ))
          : <li>No hay notas</li>}
      </ul>
  )
}
