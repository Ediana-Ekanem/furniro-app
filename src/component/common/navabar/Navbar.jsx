import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "/assets/icons/nav-icons/logo.svg";
import profile from "/assets/icons/nav-icons/profile-icon.svg";
import search from "/assets/icons/nav-icons/search-icon.svg";
import like from "/assets/icons/nav-icons/love-icon.svg";
import cart from "/assets/icons/nav-icons/cart-icon.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import Container from "../../container/Container";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <>
      <div className="bg-white fixed top-0 left-0 w-full z-50">
        <Container>
          <nav className="flex items-center justify-between py-5 ">
            {/* Logo */}

            <Link to="/">
              <div className="flex items-center gap-2">
                <img src={Logo} alt="Logo" className="h-10 w-10" />
                <h2 className="font-bold text-2xl font-montserrat">Funiro</h2>
              </div>
            </Link>

            {/* NavLinks */}
            <ul className="hidden md:flex  text-black space-x-10 font-semibold font-poppins">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>

            {/* Icons */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/#">
                <img src={profile} alt="profile-icon" className="w-7 h-7" />
              </Link>
              <Link to="/#">
                <img src={search} alt="search-icon" className="w-5 h-5" />
              </Link>
              <Link to="/#">
                <img src={like} alt="like-icon" className="w-6 h-6" />
              </Link>
              <Link to="/cart">
                <img src={cart} alt="cart-icon" className="w-7 h-7" />
              </Link>
            </div>
            {/* Conditionally render nav icon  */}
            <div className=" md:hidden z-10" onClick={handleClick}>
              {nav ? <FaTimes size={26} /> : <RxHamburgerMenu size={30} />}
            </div>

            {/* Mobile Menu  */}
            <ul
              className={` ${
                nav
                  ? "text-white opacity-100 transform translate-x-0 z-50 "
                  : "opacity-0 transform translate-y-full"
              } transition-transform absolute top-0 left-0 w-full h-44 bg-zinc-800/80  flex flex-col justify-center items-center text-xl mt-20 md:hidden `}
              onClick={() => setNav(false)}
            >
              <li className="p-2 hover:text-black hover:bg-white z-50  w-full text-center border-b border-white">
                <Link to="/">Home</Link>
              </li>
              <li className="p-2 hover:text-black hover:bg-white z-50 w-full text-center border-b border-white">
                <Link to="/shop">Shop</Link>
              </li>
              <li className="p-2 hover:text-black hover:bg-white z-50 w-full text-center border-b border-white">
                <Link to="/about">About</Link>
              </li>
              <li className="p-2 hover:text-black hover:bg-white z-50 w-full text-center ">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
