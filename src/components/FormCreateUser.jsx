import { useState } from 'react'
import loginServices from '../services/loginServices'
import { actionLogin } from '../actions/user.actions'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function FormCreateUser () {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('email')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const redirect = useNavigate()

  const handleSubmitRegistration = (e) => {
    e.preventDefault()
    loginServices.create({ firstName, lastName, email, password })
      .then((res) => {
        console.log(res)
        redirect('/desboard')
        dispatch(actionLogin(res.data.user))
      })
  }
  return (
    <form onSubmit={handleSubmitRegistration}>
    <h2>Registrar</h2>
        <label htmlFor='firstName'>First Name</label>
        <input name='firstName' type="text" onChange={(e) => setFirstName(e.target.value)}/>
        <label htmlFor='lastName'>Last Name</label>
        <input name='lastName' type="text" onChange={(e) => setLastName(e.target.value)}/>
        <label htmlFor='email'>Email</label>
        <input name="email" type="email" onChange={(e) => setEmail(e.target.value)} autoComplete='username'/>
        <label htmlFor="password">Password</label>
        <input name='password' type="password" onChange={(e) => setPassword(e.target.value)} autoComplete='current-password'/>
        <button type="submit">Registrar</button>
    </form>
  )
}
