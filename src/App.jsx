import React, {Suspense} from "react"
import {Canvas} from '@react-three/fiber'
import {Environment, OrbitControls} from '@react-three/drei'
import {Perf} from 'r3f-perf'
import Stickers from './Stickers'

const App = () => (
  <Suspense>
    <Canvas shadows camera={{position: [2, 2, 9], fov: 16}}>
      <color attach="background" args={['#cc0b09']} />
      <Perf position="top-right" showGraph={false} />
        <Stickers />
      <Environment preset="city" />
      <OrbitControls makeDefault />
    </Canvas>
  </Suspense>
)

export default App