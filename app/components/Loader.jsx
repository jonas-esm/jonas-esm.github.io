import { Html, useProgress } from "@react-three/drei";
import React from "react";

const Loader = () => {
  const progress = useProgress();

  return (
    <Html>
      {/* <span className="canvas-load"></span> */}
      {/* <p style={{ font: 14, color: "#f1f1f1", fontWeight: 800, marginTop: 40 }}>
        {progress.progress.toFixed(2)}
      </p> */}
      <div class="w-[200px]  h-4 bg-gray-200 rounded-full dark:bg-gray-700 translate-x-[-50%]">
        <div
          class="bg-[#915eff]  h-4 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
          style={{ width: `${progress.progress.toFixed(0)}%` }}
        >
          {progress.progress.toFixed(0) > 10
            ? `${progress.progress.toFixed(0)}%`
            : null}
        </div>
      </div>
    </Html>
  );
};

export default Loader;
