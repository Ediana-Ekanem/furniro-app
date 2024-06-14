import React from "react";

const Container = ({ children }) => {
  return (
    <div className="w-full max-w-sm mx-auto md:max-w-7xl px-5 md:px-0">
      {children}
    </div>
  );
};

export default Container;
