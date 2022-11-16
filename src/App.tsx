import { useState, useEffect } from "react";
import { Suspense } from "react";

import { Canvas, useFrame } from "@react-three/fiber";

import { Html, MeshDistortMaterial, MeshReflectorMaterial, Plane,  } from '@react-three/drei';
import { OrbitControls } from "@react-three/drei";

import Helpers from "./components/helpers";
import Objects from "./components/objects";

const Loading = <Html><div>LOADING...</div></Html>;

export default function App() {

  return (
    <Canvas>
      <Suspense fallback={ Loading }>

        <Helpers />
        <OrbitControls />

        <Objects />

        <Plane args={ [ 10, 10 ] }
          position={ [ 0, -2, 0 ] }
          rotation={ [ -1.57, 0, 0 ] }>
          <MeshReflectorMaterial mirror={ 0.75 } />
        </Plane>

        <ambientLight args={ [ 0xffffff ] } intensity={ 0.1 } />
        <directionalLight position={ [ 1, 2, 5 ] } intensity={ 1 } />

      </Suspense>
    </Canvas>
  );
}

