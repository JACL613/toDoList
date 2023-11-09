import '../assets/css/form-login.css'
import { useState } from 'react'
import loginServices from '../services/loginServices'
import { actionLogin } from '../actions/user.actions'
import { useDispatch } from 'react-redux'
import noteServices from '../services/noteServices'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faLock } from '@fortawesome/free-solid-svg-icons'

export default function FormLogin () {
  const dispatch = useDispatch()
  const redirect = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const handleSubmitLogin = (e) => {
    e.preventDefault()

    loginServices.login({ email, password })
      .then((res) => {
        redirect('/desboard')
        dispatch(actionLogin(res.data.user))
        noteServices.setToken(res.data.user)
        if (remember === true) {
          localStorage.setItem('user', JSON.stringify(res.data.user))
        }
      })
      .catch(err => { console.log(err) })
  }

  return (
      <form className='form' onSubmit={handleSubmitLogin} >
        <h2 id='heading'>Login</h2>
        <label className='label-field' htmlFor="user">Username</label>
        <div className='field'>
          <FontAwesomeIcon className='input-icon' icon={faAt}/>
        <input className='input-field' name='user' onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder='correo'/>
        </div>
        <label className='label-field' htmlFor="user">Password</label>
        <div className='field'>
          <FontAwesomeIcon className='input-icon' icon={faLock}/>
        <input className='input-field' name='password' onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder='contraseña' value={password} autoComplete="current-password"/>
        </div>
        <label className="RememberMe"htmlFor="RememberMe">
        <input type="checkbox" onChange={() => setRemember(!remember)} name='RememberMe' className="cyberpunk-checkbox" />
          Remember Me
        </label>
        <div className="btn">
        <button className='button1' type="submit">Enviar</button>
        <button onClick={() => redirect('/register')} className='button2'>Registrar</button>
        </div>
      </form>
  )
}
