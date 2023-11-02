import  { useState } from 'react'

export default function Drop({children}) {
    const [show, setShow] = useState(false);
  
if (show === true) {
  return <div>
    <button onClick={() => setShow(!show)}>
    {show === true ? 'hide' : 'show'}
    </button>
    {children}
  </div>  
} else {
    return <button onClick={() => setShow(!show)}>
    {show === true ? 'hide' : 'show'}
    </button>
}
}
