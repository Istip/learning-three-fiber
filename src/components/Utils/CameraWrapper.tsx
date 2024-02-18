"use client";

import {
  Environment,
  Float,
  Image,
  Line,
  MeshDistortMaterial,
  OrbitControls,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useRef } from "react";

interface Props {
  children?: React.ReactNode;
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
  const mesh = useRef(null as any);
  const stuff = useThree((state) => state.viewport);

  console.log("✅  stuff:", stuff);

  return (
    <>
      {orbitControls && <OrbitControls />}
      {preset && <Environment preset={preset} />}
      {children}
      <Float>
        <mesh scale={stuff.width / 8} position={[-3, 0, -3]} rotation-x={-10}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="yellow" />
        </mesh>
      </Float>
      <Float>
        <mesh>
          <sphereGeometry args={[1, 64, 64]} />
          <MeshDistortMaterial roughness={0.5} color="#1fb2f5" />
        </mesh>
      </Float>
      <Float>
        <mesh scale={stuff.width / 9} position={[3, 2, -5]} rotation-x={-9}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="tomato" />
        </mesh>
      </Float>
      <Float>
        <mesh>
          {/* eslint-disable-next-line */}
          <Image
            scale={stuff.width * 4}
            position={[0, 0, -10]}
            url="/images/abstract.jpg"
          />
        </mesh>
      </Float>
    </>
  );
};

export default CameraWrapper;
