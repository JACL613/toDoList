import { useState } from 'react'

// eslint-disable-next-line react/prop-types
export default function Drop ({ children, stateShow, setStateShow, buttons }) {
  const [show, setShow] = useState(false)
  const ComponenteButton = () => {
    return <button onClick={() => {
      if (stateShow) {
        return setStateShow(!stateShow)
      }
      return setShow(!show)
    }}>
    {show === true || stateShow === true
      ? 'hide'
      : 'show'}
    </button>
  }
  if (show === true || stateShow === true) {
    return <div>
    {buttons === true ? <ComponenteButton /> : null}
    {children}
  </div>
  } else {
    return buttons === true ? <ComponenteButton /> : null
  }
}
