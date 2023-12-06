import React, { Suspense, useState, useEffect } from "react";
import { Canvas, extend } from "@react-three/fiber";
import { Sky, OrbitControls, Text3D, Center, MeshReflectorMaterial, MeshTransmissionMaterial } from "@react-three/drei";
import Grass from "./Grass";
import { Bunny } from "./Bunny";
import { Bunny2 } from "./Bunny2";
import { Bunny3 } from "./Bunny3";
import { Bunny4 } from "./Bunny4";
import { Bunny5 } from "./Bunny5";


export default function App() {
  return (
    <Canvas camera={{ position: [50, 10, 0], zoom: window.innerWidth < 700 ? 0.6 : 1 }}  style={{ position: "absolute", width: "100%", height: "100vh" }}>
      <Sky azimuth={1} inclination={0.6} distance={1000} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Center rotation={[0, Math.PI / 2, 0]} position={[0, 8, 0]}>
          <Text3D font="./Charm_Bold.json" scale={14}>
            London
            <meshStandardMaterial color="#fff" metalness={0.3} roughness={0.5} envMapIntensity={2} />
          </Text3D>
        </Center>
        <Bunny />
        <Bunny2 position={[10, 0, 10]} />
        <Bunny3 position={[-10, 0, -10]} />
        <Bunny4 position={[10, 0, -10]} />
        <Bunny5 position={[-10, 0, 10]} />
        <Grass />
      </Suspense>
      <OrbitControls
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 2.5}
        enableZoom={false}
      />
    </Canvas>
  );
}
