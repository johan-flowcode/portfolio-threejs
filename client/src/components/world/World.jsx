import React, { useEffect, Suspense } from 'react';
import { TextureLoader, DoubleSide } from 'three';
import { useLoader, useThree } from '@react-three/fiber';
import { MeshReflectorMaterial, Float } from '@react-three/drei';
import { isMobile } from 'react-device-detect'
import { Vignette, EffectComposer, Noise, Bloom } from '@react-three/postprocessing'

import * as THREE from 'three';





const World = () => {

  return (
    <>
      <group position={[0, -0.5, 0]}>
        <Suspense fallback={null}>
          <CustomBackground />
        </Suspense>
        <mesh position={[0, -0.9, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[7, 20]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={15}
            roughness={0.99}
            depthScale={1.9}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.1}
            color="#0A2239"
            metalness={0.8}
          />
        </mesh>
      </group>
      <EffectComposer>
        <Vignette offset={0.5} darkness={0.6} premultiply />
        <Noise premultiply />
        <Bloom mipmapBlur intensity={0.6} luminanceThreshold={0.9} />
      </EffectComposer>
     
    </>
  );
};

function CustomBackground() {
  const texture = useLoader(THREE.TextureLoader, '/img/imagen5.png')
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping
  texture.offset.set(0, 0)
  texture.repeat.set(1, 1)

  return (
    <group>
      <Float
        speed={1} // Animation speed, defaults to 1
        rotationIntensity={0.1} // XYZ rotation intensity, defaults to 1
        floatIntensity={0.3} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[0.1, -0.3]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        <mesh scale={[1, 1.3, 1]} position={[0, 8.5, 0]}>
          <cylinderGeometry args={[20, 20, isMobile ? 28 : 20, 15, 6, true, 2.1, Math.PI / 1.5]} />
          <meshBasicMaterial side={DoubleSide} map={texture} color="#A3D1F7" toneMapped={false} />
        </mesh>
      </Float>
      <mesh scale={[1, 1.3, 1]} position={[0, 7.5, -6]}>
        <cylinderGeometry args={[18, 18, 20, 15, 6, true, 0, Math.PI * 2]} />
        <meshBasicMaterial side={DoubleSide} map={texture} color="#A3D1F7" toneMapped={true} />
      </mesh>
    </group>
  );
};

export default World;

