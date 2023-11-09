import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faHouse, faPenToSquare, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function Nav () {
  const [show, setShow] = useState(false)
  const handleDropMenu = (e) => {
    const menu = document.querySelector('#menu-contenedor')
    show === true
      ? menu.classList.replace('nav-container-active', 'nav-container')
      : menu.classList.replace('nav-container', 'nav-container-active')
    setShow(!show)
  }
  return (
    <nav className='navbar'>
    <div id="menu-contenedor" className='container nav-container'>
      <input className="checkbox" type="checkbox" name="" id="" onClick={handleDropMenu} />
    <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
          <div className="logo">
            <h1>ToDoList</h1>
          </div>
    <div className="menu-items">
    <li onClick={handleDropMenu}><Link to={'/home'}> <FontAwesomeIcon icon={faHouse}/> Home</Link></li>
    <li onClick={handleDropMenu}><Link to={'/login'}><FontAwesomeIcon icon={faUser}/>Login</Link></li>
    <li onClick={handleDropMenu}><Link to={'/register'}><FontAwesomeIcon icon={faUserPlus}/>Register</Link></li>
    <li onClick={handleDropMenu}><Link to={'/desboard'}><FontAwesomeIcon icon={faPenToSquare}/>Desboard</Link></li>
    <li><Link to={'/config'}><FontAwesomeIcon icon={faGear}/>Configuración</Link></li>

      </div>
    </div>

    </nav>
  )
}
