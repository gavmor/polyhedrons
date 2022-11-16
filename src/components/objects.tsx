import { RoundedBox, Tetrahedron } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { useRef } from "react";

const palettes = [
  `#FFAE1C
#BB160F
#23D7F3
#00461D
#FF6FFF
#0059AB`.split("\n"),
];

const shapes = [d4, d6];

export default function Objects(props: any) {
  //   const ref = useRef();

  // const { angleX, angleY, angleZ } = useControls({
  //   angleX: -0.6,
  //   angleY: 0.7,
  //   angleZ: 0.79,
  // });

  useThree(({ camera, scene }) => {
    camera.position.set(-5, 5, 5); // all components equal
    camera.lookAt(scene.position);
  });

  return (
    <>
      {palettes.map((palette, z) =>
        palette.map((color, x) => {
          return shapes[x % 2](x, color);
        })
      )}
    </>
  );
}
function d4(x: number, color: string): JSX.Element {
  return (
    <Tetrahedron
      args={[0.7, 0]}
      rotation={[-0.6, 0, 0.79]}
      position={[1.5 * x - 3.25, -0.25, 0]}
      key={color}
    >
      <meshStandardMaterial color={color} />
    </Tetrahedron>
  );
}

function d6(x: number, color: string): JSX.Element {
  return (
    <RoundedBox args={[1, 1, 1]} position={[1.5 * x - 3.25, 0, 0]} key={color}>
      <meshStandardMaterial color={color} />
    </RoundedBox>
  );
}
