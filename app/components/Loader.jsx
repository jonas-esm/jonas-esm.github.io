import { Html, useProgress } from "@react-three/drei";
import React from "react";

const Loader = () => {
  const progress = useProgress();

  return (
    <Html>
      <span className="canvas-load"></span>
      <p style={{ font: 14, color: "#f1f1f1", fontWeight: 800, marginTop: 40 }}>
        {progress.progress.toFixed(2)}
      </p>
    </Html>
  );
};

export default Loader;