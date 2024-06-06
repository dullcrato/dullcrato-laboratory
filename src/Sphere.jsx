import React from "react"
import {useTexture} from '@react-three/drei'
import Sticker from './Sticker'
import {PRICE_TAG_IMAGES, THRESHOLD, DEFAULT_SCALE} from './consts'

const Sphere = () => {
  const textures = useTexture(PRICE_TAG_IMAGES)
  const [initialMousePosition, setInitialMousePosition] = React.useState({x: 0, y: 0})
  const [stickers, setStickers] = React.useState([])

  const handleOnMouseDown = React.useCallback((event) => {
    setInitialMousePosition({x: event.clientX, y: event.clientY})
  }, [])

  const handleOnMouseUp = React.useCallback((event) => {
    const moveX = Math.abs(event.clientX - initialMousePosition.x)
    const moveY = Math.abs(event.clientY - initialMousePosition.y)
    const isDragging = moveX > THRESHOLD || moveY > THRESHOLD
    if (!isDragging) {
      const texture = textures[Math.floor(Math.random() * textures.length)]
      const newSticker = {
        position: event.point,
        rotation: Math.PI * (Math.random() * (2.2 - 1.8) + 1.8),
        scale: DEFAULT_SCALE.map((s) => s + Math.random() * 0.1),
        texture: texture,
        renderOrder: stickers.length
      }
      setStickers([...stickers, newSticker])
    }
    setInitialMousePosition({x: 0, y: 0})
  }, [stickers, initialMousePosition, textures])

  return (
    <mesh castShadow receiveShadow onPointerDown={handleOnMouseDown} onPointerUp={handleOnMouseUp}>
      <sphereGeometry args={[1, 64, 64]} />
      {stickers.map((sticker, i) => <Sticker key={i} {...sticker} />)}
      <meshPhysicalMaterial clearcoat={1} roughness={0} metalness={0.5} clearcoatRoughness={0} color="black" />
    </mesh>
  )
}

export default React.memo(Sphere)

useTexture.preload(PRICE_TAG_IMAGES)