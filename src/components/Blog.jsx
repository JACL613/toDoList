import { useSelector } from 'react-redux'
import Calendario from './Calendario'
import Carrusel from './Carrusel'
import { useEffect, useState } from 'react'
import { newEvents } from '../assets/functions/helpers'
export default function Blog () {
  const imgs = [
    'https://res.cloudinary.com/duxmumzjg/image/upload/v1700453303/APP-ToDoList/tpcvbbarig93tdzlkdsk.jpg',
    'https://res.cloudinary.com/duxmumzjg/image/upload/v1700453303/APP-ToDoList/xluutyx7w7jfl6tnz2xf.jpg',
    'https://res.cloudinary.com/duxmumzjg/image/upload/v1700453303/APP-ToDoList/kqeanufii4nvetaq1xxh.jpg'
  ]
  const [eventos, setEventos] = useState([])
  const notas = useSelector(state => state.notas)
  useEffect(() => {
    setEventos(newEvents(notas))
  }, [])
  return (
    <>
      <h3>Welcome to your taks</h3>
      <Carrusel images={imgs} showButtons={true}></Carrusel>

      <div className='container-calendario'>
        <Calendario events={eventos}/>
      </div>
    </>
  )
}
