
import { Stats } from "@react-three/drei";

export default function Helpers() {

  return (
    <>
      {/* <gridHelper args={[10, 10]} position={[0, -2, 0]} /> */}
      <axesHelper args={[2]} />
      <Stats/>
    </>
  );
}
