import * as THREE from 'three';
import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, PresentationControls, Environment, ContactShadows, } from '@react-three/drei';
import World from '../components/world/World';
import Navigation from '../components/navigation/Navigation'
import { BtnList } from '@/data';



const Home = () => {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 2, 15], fov: 70 }}>
        <World />
        <PerspectiveCamera makeDefault fov={70} position={[0, 0, 5]} focusDistance={[0, 0]} />
        <ambientLight color="#ff0a65" intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={[512, 512]} castShadow />
        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
          rotation={[0, 0.3, 0]}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 6, Math.PI / 6]}>
          <Navigation BtnList={BtnList} />
        </PresentationControls>
        <ContactShadows position={[0, -1.4, 0]} opacity={0.35} scale={10} blur={2.5} far={4} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};



export default Home;