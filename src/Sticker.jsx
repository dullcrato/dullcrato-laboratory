import React from 'react'
import {Decal} from '@react-three/drei'

const Sticker = (props) => {

  return (
    <Decal {...props} >
      <meshPhysicalMaterial
        map={props.texture}
        roughness={0.6}
        clearcoat={0.5}
        metalness={0.8}
        polygonOffsetFactor={-10}
        transparent={true}
        polygonOffset={true}
        map-flipY={false}
        depthWrite={false}
        toneMapped={false}
      />
    </Decal>
  )
}

export default React.memo(Sticker)