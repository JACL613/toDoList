import { useState } from 'react'
import loginServices from '../services/loginServices'
import { actionLogin } from '../actions/user.actions'
import { useDispatch } from 'react-redux'
import noteServices from '../services/noteServices'

export default function FormLogin () {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmitLogin = (e) => {
    e.preventDefault()
    loginServices.login({ email, password })
      .then((res) => {
        dispatch(actionLogin(res.data.user))
        noteServices.setToken(res.data.user)
      })
      .catch(err => { console.log(err) })
  }
  return (
      <form onSubmit={handleSubmitLogin} >
        <h2>Login</h2>

        <input onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder='correo' autoComplete="username"/>
        <input onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder='contraseña' autoComplete="current-password"/>
        <button type="submit">Enviar</button>
      </form>
  )
}
