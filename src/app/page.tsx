import Box from "@/components/Box/Box";
import CameraWrapper from "@/components/Utils/CameraWrapper";

export default function Home() {
  return (
    <>
      <CameraWrapper preset="apartment">
        <Box position={[1, 0, 0]} />
        <Box position={[-1, 0, 0]} />
      </CameraWrapper>
    </>
  );
}
