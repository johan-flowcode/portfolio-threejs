// Navigation.jsx
import React, { useRef, useEffect, useState } from 'react';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useLocation } from 'wouter';






const Navigation = ({ BtnList }) => {
  const ref = useRef();
  const textures = useLoader(THREE.TextureLoader, BtnList.map(btn => btn.icon));
  const { camera } = useThree();
  const [, setLocation] = useLocation();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    ref.current.children.forEach(mesh => {
      mesh.lookAt(new THREE.Vector3(camera.position.x, mesh.position.y, camera.position.z));
      mesh.rotation.x = 0; // Mantiene los íconos horizontalmente alineados
      mesh.rotation.z = 0; // Previene la inclinación sobre el eje Z
    });
  }, [camera.position]);

  const handleIconClick = (btn) => {
    if (btn.newTab && btn.link.startsWith('http')) {
      window.open(btn.link, '_blank');
    } else {
      setLocation(btn.link);
    }
  };

  const calculatePosition = (index, total) => {
    const angleStart = Math.PI / 10;  // Inicia el ángulo desde aquí
    const angleEnd = Math.PI * 6.5 / 6;  // Termina el ángulo aquí
    const angle = angleStart + (index / (total - 1)) * (angleEnd - angleStart);
    const radius = 4.5;  // Ajusta el radio según la escena
    const yPosition = 0.6;  // Ajusta la altura vertical de los íconos
    return [
      Math.cos(angle) * radius * -1, // Invierte la dirección en x
      yPosition,
      Math.sin(angle) * radius * -1  // Invierte la dirección en z
    ];

  };

  return (
    <group ref={ref}>
      {textures.map((texture, index) => (
        <mesh key={index} position={calculatePosition(index, BtnList.length)}
          onClick={() => handleIconClick(BtnList[index])}
          onPointerOver={() => setHoveredIndex(index)}
          onPointerOut={() => setHoveredIndex(null)}>
          <planeGeometry args={[1, 1]} />
          <meshPhongMaterial
            attach="material"
            map={texture}
            side={THREE.DoubleSide}
            transparent={true}
            opacity={0.9}
            emissive={hoveredIndex === index ? 0xffff00 : 0xffffff}
            emissiveIntensity={hoveredIndex === index ? 0.9 : 1.2} />
        </mesh>
      ))}
    </group>
  );
};

export default Navigation;
