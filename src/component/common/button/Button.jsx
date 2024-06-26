import React from "react";

const Button = ({ backgroundColor, textColor, padding, children, onClick }) => {
  return (
    <button
      className=" mt-10 font-bold text-[16px] leading-[24px]  "
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        padding: padding,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
