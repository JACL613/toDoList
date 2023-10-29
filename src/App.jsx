// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { useState } from 'react';
import { useSelector} from 'react-redux';
import FormLogin from './components/FormLogin';
import FormCreateNote from './components/FormCreateNote';
import CardNotas from './components/CardNotas';
import FormCreateUser from './components/FormCreateUser';

function App() {
  const state = useSelector((state) => state.notas);
  const user = useSelector((state) => state.user);
  const [show, setShow] = useState(false);
 
 
  const ComponentNotes = () => {
    return <div>
      <h1>To Do List</h1>
      {/* Componente render notas */}
      <ul>
        {state.length > 0 && !state.includes(null)
          ?state.map((item) => (
            <CardNotas key={item.id} item={item} />
           ))
           :<li>No hay notas</li>}
      </ul>
  
    </div>
  }
  
  return (
    <div className="">
      {user._id ? <h3>{user.firstName}</h3>:null}
      
      {
        user._id ?
        <div>
          <ComponentNotes />  
          <FormCreateNote />        
        </div>
        :
        <div>
        <button type="button" onClick={() => setShow(!show)}>{show == true ? 'Registrar' : 'Iniciar' }</button>
          {
            show === true 
            ?<FormLogin /> 
            :<FormCreateUser />
          }
        </div>
      }
    </div>
  )
}

export default App
