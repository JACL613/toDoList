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
<<<<<<< HEAD
    <div className="container-fluid">
      <div className="container-text">
      <h3 className='title'>Welcome to your taks<span>&#160;</span></h3>
      </div>
=======
    <>
      <h3>Welcome to your taks</h3>
>>>>>>> 82c5dfc97e00553fa7c08aa079de69882d033570
      <Carrusel images={imgs} showButtons={true}></Carrusel>

      <div className='container-calendario'>
        <Calendario events={eventos}/>
      </div>
    </>
  )
}
