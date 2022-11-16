import { MeshDistortMaterial, MeshReflectorMaterial, MeshWobbleMaterial, Plane, RoundedBox, Sphere } from '@react-three/drei';
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Objects() {

    const sphere = useRef()

    const MIN_DISTORT = 0.5
    const MAX_DISTORT = 1

    const [ distort, setDistort ] = useState( MIN_DISTORT );

    const incrementDistort = () => {
        distort == MIN_DISTORT ? setDistort( MAX_DISTORT ) : setDistort( MIN_DISTORT );
    }

    // useEffect( () => {
    //     console.log( distort )
    // }, [ distort ] )

    useFrame( ( state, delta ) => {
        console.log( delta )
    } )


    return (
        <>
            <Sphere ref={sphere} args={ [ 1, 50, 100 ] } scale={ 1 } onClick={ incrementDistort }>
                <MeshDistortMaterial
                    wireframe={ false }
                    color="#8352FD"
                    attach="material"
                    distort={ distort }
                    speed={ 4 }
                    roughness={ 0 } />
            </Sphere>

            <RoundedBox args={ [ 1, 1, 1 ] } position={ [ 2, 0, 0 ] }>
                <MeshWobbleMaterial
                    color="#f752fd"
                    factor={ 1 }
                    speed={ 1 } />
            </RoundedBox>


            <RoundedBox args={ [ 1, 1, 1 ] } position={ [ -2, 0, 0 ] }>
                <MeshWobbleMaterial
                    color="#f752fd"
                    factor={ 1 }
                    speed={ 1 } />
            </RoundedBox>
        </>
    )
}
