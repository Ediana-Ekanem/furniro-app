import React from "react";

const Button = ({ text }) => {
  return (
    <button
      className={`text-white px-12 py-4 bg-[#b88e2f]  mt-10 font-semibold`}
    >
      {text}
    </button>
  );
};

export default Button;
