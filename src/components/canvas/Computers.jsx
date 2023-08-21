/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ dMode }) => {
  const computer = useGLTF("./macbook_pro/scene.gltf");
  const yPos = dMode == "mobile" ? -2.9 : dMode == "tablet" ? -3 : -3.75;

  return (
    <mesh>
      <pointLight intensity={20} position={[-8, -2, -5]} />
      <pointLight intensity={20} position={[4, -1, 2]} />
      <spotLight intensity={35} position={[1, 3, 0]} />
      <spotLight intensity={35} position={[1, 2, -5]} />
      <spotLight intensity={35} position={[1, 2, 5]} />
      <primitive
        object={computer.scene}
        scale={dMode == "mobile" ? 8.5 : dMode == "tablet" ? 12.5 : 16.5}
        position={[0, yPos, 0]}
        rotation={[0, 2, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [displayMode, setDisplayMode] = useState("desktop");

  useEffect(() => {
    const mobileMediaQuery = window.matchMedia("(max-width: 500px)");
    const tabletMediaQuery = window.matchMedia(
      "(min-width: 501px) and (max-width: 1024px)"
    );

    setDisplayMode(
      mobileMediaQuery.matches
        ? "mobile"
        : tabletMediaQuery.matches
        ? "tablet"
        : "desktop"
    );

    const handleMobileMediaQueryChange = (event) =>
      setDisplayMode((prevState) => (event.matches ? "mobile" : prevState));
    mobileMediaQuery.addEventListener("change", handleMobileMediaQueryChange);

    const handleTabletMediaQueryChange = (event) =>
      setDisplayMode((prevState) => (event.matches ? "tablet" : prevState));
    tabletMediaQuery.addEventListener("change", handleTabletMediaQueryChange);

    return () => {
      mobileMediaQuery.removeEventListener(
        "change",
        handleMobileMediaQueryChange
      );
      tabletMediaQuery.removeEventListener(
        "change",
        handleTabletMediaQueryChange
      );
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
        />
        {/* <Computers isMobile={isMobile} /> */}
        <Computers dMode={displayMode} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
