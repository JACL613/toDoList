import Carrusel from './Carrusel'
export default function Blog () {
  const imgs = [
    'https://res.cloudinary.com/duxmumzjg/image/upload/v1697337215/cld-sample-5.jpg',
    'https://res.cloudinary.com/duxmumzjg/image/upload/v1697337214/cld-sample-4.jpg',
    'https://res.cloudinary.com/duxmumzjg/image/upload/v1697337213/cld-sample-2.jpg'
  ]
  return (
    <div className="container-fluid">  <Carrusel images={imgs} showButtons={true}></Carrusel></div>
  )
}
