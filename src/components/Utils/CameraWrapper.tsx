"use client";

import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

interface Props {
  children: React.ReactNode;
  orbitControls?: boolean;
  preset?:
    | "apartment"
    | "city"
    | "dawn"
    | "forest"
    | "lobby"
    | "night"
    | "park"
    | "studio"
    | "sunset"
    | "warehouse"
    | undefined;
}

const CameraWrapper = ({ children, orbitControls = true, preset }: Props) => {
  return (
    <div className="w-screen h-screen">
      <Canvas
        orthographic
        camera={{
          fov: 75,
          near: 0.1,
          far: 1000,
          position: [0, 0, 5],
          zoom: 100,
        }}
      >
        {orbitControls && <OrbitControls />}
        {preset && <Environment preset={preset} />}
        {children}
      </Canvas>
    </div>
  );
};

export default CameraWrapper;
