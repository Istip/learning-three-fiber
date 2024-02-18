"use client";

import CameraWrapper from "@/components/Utils/CameraWrapper";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-stone-900">
      <Canvas>
        <CameraWrapper preset="sunset" />
      </Canvas>
    </div>
  );
}
