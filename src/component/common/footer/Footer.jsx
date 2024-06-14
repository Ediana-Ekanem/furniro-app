import React from "react";
import Container from "../../container/Container";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="border-t-2 border-[#efefef] py-10">
      <Container>
        <div className="text-center space-y-10 md:space-y-0 md:text-start md:flex justify-between">
          <div className="flex flex-col space-y-7 font-poppins">
            <h3 className="font-bold text-[18px] md:text-[24px]">Furniro.</h3>
            <p className="text-[#9F9F9F] text-[14px] md:text-[16px] w-[300px]">
              400 University Drive Suite 200 Coral Gables,
              <br />
              <span className="text-[#9F9F9F] text-[16px] mt-0 ">
                FL 33134 USA
              </span>
            </p>
          </div>

          <div className=" flex-col space-y-9 font-poppins text-[16px]">
            <p className="text-[#9F9F9F]">Links</p>
            <li className=" list-none ">
              <Link to="/">Home</Link>
            </li>
            <li className=" list-none ">
              <Link to="/shop">Shop</Link>
            </li>

            <li className=" list-none ">
              <Link to="/about">About</Link>
            </li>
            <li className=" list-none ">
              <Link to="/contact">Contact</Link>
            </li>
          </div>

          <div className="mt-10 md:mt-0 flex flex-col space-y-9 font-poppins text-[16px]">
            <p className="text-[#9F9F9F] text-[16px]">Help</p>
            <p>Payment Options</p>
            <p>Returns</p>
            <p>Privacy Policies</p>
          </div>
          <div className="flex flex-col space-y-9 font-poppins  text-[16px]">
            <p className="text-[#9F9F9F]">Newsletter</p>

            <div className=" hidden md:flex space-x-5">
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Your Email Address"
                className="border-b-2 border-black  outline-none"
              />
              <p className=" border-b-2 border-black"> SUBSCRIBE</p>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-[#efefef] my-5 "></div>
        <p className=" text-center md:text-start font-semibold">
          2023 furino. All rights reverved
        </p>
      </Container>
    </div>
  );
};

export default Footer;
