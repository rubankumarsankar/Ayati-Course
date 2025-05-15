import React from "react";
import "../index.css";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999]">
      <img
        src="/loader_iocn.svg"
        alt="Loading..."
        className="w-16 h-16 animate-spin"
      />
    </div>
  );
};

export default Loader;
