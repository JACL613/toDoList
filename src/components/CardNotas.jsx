/* eslint-disable react/prop-types */
import {useDispatch} from 'react-redux';
import { actionDeleteNote } from '../actions/notas.actions';

export default function CardNotas({item}) {
    const dispatch = useDispatch();
    const handleActionDelete = (id) => {
        console.log(id);
        dispatch(actionDeleteNote({id}));
      }
  return (
    <>
         <li>
          Titulo: {item.name}            
          <br/> 
          Description: {item.description}
          <br/> 
          Fecha Final: {item.finishDate.slice(0,10)}
          <br/> 
          Estado: {item.isCompleted === true ? 'Completada' : 'Pendiente'}
          <button onClick={() => handleActionDelete(item.id)}>Delete</button>
          </li>
    </>
  )
}
