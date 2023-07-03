import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import {
  OrbitControls,
  PerformanceMonitor,
  Preload,
  usePerformanceMonitor,
} from "@react-three/drei";
import Loader from "../Loader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import useMediaMatches from "@/app/hooks/useMediaMatches";
const Computers = () => {
  // const computer2 = useGLTF("./static/desktop_pc/scene.gltf");
  const computer = useLoader(GLTFLoader, "./static/desktop_pc/scene.gltf");
  const { isMatch } = useMediaMatches({ breakpoint: 500 });

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor={"black"} />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMatch ? 0.55 : 0.75}
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.02, -0.01]}
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
// export default function test() {
//   return <img src="./static/logo.svg" alt="" />;
// }
