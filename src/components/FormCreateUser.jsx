import { useState } from 'react'
import loginServices from '../services/loginServices'
import { actionLogin } from '../actions/user.actions'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faSignature } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

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
    <form className='form' onSubmit={handleSubmitRegistration}>
    <h2 id='heading'>Registrar</h2>
        <label className='label-field' htmlFor='firstName'>First Name</label>
        <div className='field'>
        <FontAwesomeIcon className='input-icon' icon={faSignature}/>
        <input className='input-field' name='firstName' type="text" onChange={(e) => setFirstName(e.target.value)}/>
        </div>
        <label className='label-field' htmlFor='lastName'>Last Name</label>
        <div className='field'>
        <FontAwesomeIcon className='input-icon' icon={faSignature}/>
        <input className='input-field' name='lastName' type="text" onChange={(e) => setLastName(e.target.value)}/>
        </div>
        <label className='label-field' htmlFor='email'>Email</label>
        <div className="field">
        <FontAwesomeIcon className='input-icon' icon={faEnvelope}/>
        <input className='input-field' name="email" type="email" onChange={(e) => setEmail(e.target.value)} autoComplete='username'/>
        </div>
        <label className='label-field' htmlFor="password">Password</label>
        <div className="field">
        <FontAwesomeIcon className='input-icon' icon={faLock}/>
        <input className='input-field' name='password' type="password" onChange={(e) => setPassword(e.target.value)} autoComplete='current-password'/>
        </div>
        <div className='btn'>
        <button className='button1' type="submit">Registrar</button>
        <button className='button2' onClick={() => redirect('/login')}>Login</button>
        </div>
    </form>
  )
}
