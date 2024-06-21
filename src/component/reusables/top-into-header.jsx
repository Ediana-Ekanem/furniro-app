import React, { useMemo } from "react";
import { cloudName } from "../../cloudImages/Cloud";
import Logo from "/assets/icons/nav-icons/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";

const TopSection = ({ route, main , theme}) => {
  const imageUrl = `https://res.cloudinary.com/${cloudName}/image/upload/ddonfbzwowcltx4xuy0v`;

  return (
    <div className="relative  left-0 right-0  h-[270px] mt-10">
      <div
        className="absolute inset-0 w-full bg-cover bg-center flex flex-col items-center gap-4 justify-center"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundColor: "rgba(255, 255, 255, 0.4)",
          backgroundBlendMode: "overlay",
        }}
      >
        <NavLink to="/">
          <div className="flex items-center gap-2">
            <img src={Logo} alt="Logo" className="h-10 w-10" />
          </div>
        </NavLink>
        <h2 className="text-4xl">{theme}</h2>
        <nav className="flex items-center text-[#000000] text-sm">
          <Link to="/" className=" text-[#000000]">
            {main}
          </Link>
          <span className="mx-2">
            <RiArrowRightSLine />
          </span>
          <Link to="/shop" className="">
            {route}
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default TopSection;
