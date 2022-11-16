import { MeshDistortMaterial, MeshReflectorMaterial, Plane, RoundedBox, Sphere } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber'

const palettes = [`#FFAE1C
#BB160F
#23D7F3
#00461D
#FF6FFF
#0059AB`.split("\n")]

export default function Objects() {

    useFrame((state, delta) => {
        console.log(delta)
    })

    useThree(({camera, scene}) => {
        camera.position.set( -5, 5, 5 ); // all components equal
        camera.lookAt( scene.position );
      });
      

    return (
        <>
        {
        palettes.map(palette => palette.map((color, i) => {
            return <RoundedBox args={[1, 1, 1]} position={[1.25*i-3.25, 0, 0]}>
                <meshStandardMaterial color={color} />
            </RoundedBox>
        }))
        }
        </>
    )
}
