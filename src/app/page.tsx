import CameraWrapper from "@/components/Utils/CameraWrapper";

export default function Home() {
  return (
    <>
      <div>
        <CameraWrapper preset="city">
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="hotpink" />
          </mesh>
        </CameraWrapper>
      </div>
    </>
  );
}
