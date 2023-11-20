import { useEffect, useState } from 'react'
import styled from 'styled-components'

const CarouselImg = styled.img`
  width: 100%;
  height: auto;
  opacity: 0;
  transition: ease-out 1s;
  &.loaded {
    opacity: 1;
  }
`
const ContainerCarrusel = styled.div`
      position: relative;
    max-width: 1080px;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 50%;

`
const CarouselButtonContainer = styled.div`
    display: flex;
    position: absolute;
    flex-direction: row;
    top: 50%;
    z-index: +2;
    transform: translateY(-50%);
    justify-content: space-between;
    width: 100%;
`

const CarouselButton = styled.button`
    color: white;
    background-color: rgb(0 0 0 / 39%);
    padding: 10px;
    margin: 0 5px;
    border: none;
    border-radius: 50%;
    font-size: 2.5rem;
`

// eslint-disable-next-line react/prop-types
export default function Carrusel ({ images = [], autoPlay, showButtons }) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState(images[0])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    console.log(images)

    if (autoPlay || !showButtons) {
      const interval = setInterval(() => {
        selectNewImage(selectedIndex, images)
      }, 1000)
      return () => clearInterval(interval)
    }
  })

  const selectNewImage = (index, images, next = true) => {
    setLoaded(false)
    setTimeout(() => {
      const condition = next
        ? selectedIndex < images.length - 1
        : selectedIndex > 0
      const nextIndex = next
        ? condition
          ? selectedIndex + 1
          : 0
        : condition
          ? selectedIndex - 1
          : images.length - 1
      setSelectedImage(images[nextIndex])
      setSelectedIndex(nextIndex)
    }, 500)
  }

  const previous = () => {
    selectNewImage(selectedIndex, images, false)
  }

  const next = () => {
    selectNewImage(selectedIndex, images)
  }
  return (
    <ContainerCarrusel>
      <CarouselImg
        src={selectedImage}
        alt="Gentleman"
        className={loaded ? 'loaded' : ''}
        onLoad={() => setLoaded(true)}
      />
      <CarouselButtonContainer>
        {showButtons
          ? (
          <>
            <CarouselButton onClick={previous}>{'<'}</CarouselButton>
            <CarouselButton onClick={next}>{'>'}</CarouselButton>
          </>
            )
          : (
          <></>
            )}
      </CarouselButtonContainer>
    </ContainerCarrusel>
  )
}
