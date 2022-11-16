import { useState, useEffect } from "react";
import { Suspense } from "react";

import { Canvas, useFrame, useThree } from "@react-three/fiber";

import { Html, MeshDistortMaterial, MeshReflectorMaterial, Plane,  } from '@react-three/drei';
import { OrbitControls } from "@react-three/drei";

import Helpers from "./components/helpers";
import Objects from "./components/objects";

const Loading = <Html><div>LOADING...</div></Html>;

const aspect = window.innerWidth / window.innerHeight;
const d = 20;

export default function App() {
  return (
    <Canvas camera={{left: -d * aspect, right: d * aspect, top: d, bottom: -d, near:1,far:1000}}>
      
      <Suspense fallback={ Loading }>

        <Helpers />
        <OrbitControls />

        <Objects />

        <Plane args={ [ 100, 100 ] }
          position={ [ 0, -1, 0 ] }
          rotation={ [ -1.57, 0, 0 ] }>
          <meshStandardMaterial color="#282c37" />
        </Plane>

        <ambientLight args={ [ 0xffffff ] } intensity={ 0.5 } />
        <directionalLight position={ [ 1, 2, 1 ] } intensity={ 1 } />

      </Suspense>
    </Canvas>
  );
}

