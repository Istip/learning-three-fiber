"use client";

import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Mesh } from "three";

interface Props {
  position: [number, number, number];
}

const Box = ({ position }: Props) => {
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  const ref = useRef<Mesh>(null);

  useFrame((_, delta) => {
    ref.current!.rotation.x += delta;
  });

  return (
    <mesh
      position={position}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={() => setClicked(!clicked)}
      onPointerOut={() => setHovered(false)}
      onPointerOver={(event) => {
        event.stopPropagation();
        setHovered(true);
      }}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
};

export default Box;
