import  { useState } from 'react'
import loginServices from '../services/loginServices';
import { actionLogin } from '../actions/user.actions';
import { useDispatch } from 'react-redux';

export default function FormCreateUser() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('email');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();


    const handleSubmitRegistration = (e) =>{
      e.preventDefault();
      loginServices.create({firstName , lastName , email , password})
      .then(( res ) => {
        console.log(res);
        dispatch(actionLogin(res.data.user))
      })
    }
  return (
    <form onSubmit={handleSubmitRegistration}>
    <h2>Registrar</h2>
        <input type="text" onChange={(e) => setFirstName(e.target.value)}/>
        <input type="text" onChange={(e) => setLastName(e.target.value)}/>
        <input type="email" onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit">Registrar</button>
    </form>
    )
}
