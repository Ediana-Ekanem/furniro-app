import React, { useMemo } from "react";
import Container from "../../container/Container";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = useMemo(
    () => [
      { label: "Home", to: "/" },
      { label: "Shop", to: "/shop" },
      { label: "Blog", to: "/blog" },
      { label: "Contact", to: "/contact" },
    ],
    []
  );

  return (
    <footer className="border-t-2 border-[#efefef] py-10">
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

          <div className="flex-col space-y-9 font-poppins text-[16px]">
            <p className="text-[#9F9F9F]">Links</p>
            {footerLinks.map((link, index) => (
              <li key={index} className="list-none">
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </div>

          <div className="hidden mt-10 md:mt-0 md:flex flex-col space-y-9 font-poppins text-[16px]">
            <p className="text-[#9F9F9F] text-[16px]">Help</p>
            <p>Payment Options</p>
            <p>Returns</p>
            <p>Privacy Policies</p>
          </div>
          <div className="flex flex-col space-y-9 font-poppins  text-[16px]">
            <p className="text-[#9F9F9F]">Newsletter</p>

            <div className="flex justify-center md:justify-start  space-x-3 md:space-x-5 text-[12px] md:text-[16px]">
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Your Email Address"
                aria-label="Enter Your Email Address"
                className="border-b-2 border-black outline-none"
              />
              <button type="submit" className="border-b-2 border-black">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-[#efefef] my-5 "></div>
        <p className="text-center md:text-start font-semibold">
          2023 Furniro. All rights reserved
        </p>
      </Container>
    </footer>
  );
};

export default React.memo(Footer);
