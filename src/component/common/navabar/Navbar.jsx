import React, { Suspense, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "/assets/icons/nav-icons/logo.svg";
import profile from "/assets/icons/nav-icons/profile-icon.svg";
import search from "/assets/icons/nav-icons/search-icon.svg";
import like from "/assets/icons/nav-icons/love-icon.svg";
import cart from "/assets/icons/nav-icons/cart-icon.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import Container from "../../container/Container";
import { MdCancel } from "react-icons/md";
import { useCart } from "../../../hooks/cart-context";
import { cloudName } from "../../../cloudImages/Cloud";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cart: cartObject, addToCart, removeFromCart } = useCart(); // Destructure addToCart from useCart
  const handleClick = () => setNav(!nav);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const navLinkClasses = ({ isActive }) =>
    isActive ? "text-primary" : "text-black";

  const LazyImage = useMemo(
    () =>
      React.lazy(() =>
        import("cloudinary-react").then((module) => ({ default: module.Image }))
      ),
    []
  );

  const cartButtons = ["Cart", "Checkout", "Comparison"];

  const subtotal = cartObject.reduce(
    (acc, item) => {
      // Ensure item.amount and item.quantity are numeric
      const amount = parseFloat(item.amount) || 0;
      const quantity = parseInt(item.quantity, 10) || 0;
      return acc + amount * quantity;
    },
    0
  );

  const total = subtotal;

  return (
    <>
      <div className="bg-white fixed top-0 left-0 w-full z-50">
        <Container>
          <nav className="flex items-center justify-between py-5 ">
            {/* Logo */}
            <NavLink to="/">
              <div className="flex items-center gap-2">
                <img src={Logo} alt="Logo" className="h-10 w-10" />
                <h2 className="font-bold text-2xl font-montserrat">Funiro</h2>
              </div>
            </NavLink>

            {/* NavLinks */}
            <ul className="hidden md:flex text-black space-x-10 font-semibold font-poppins">
              <li>
                <NavLink to="/" className={navLinkClasses}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/shop" className={navLinkClasses}>
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={navLinkClasses}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={navLinkClasses}>
                  Contact
                </NavLink>
              </li>
            </ul>

            {/* Icons */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink to="/#">
                <img src={profile} alt="profile-icon" className="w-7 h-7" />
              </NavLink>
              <NavLink to="/#">
                <img src={search} alt="search-icon" className="w-5 h-5" />
              </NavLink>
              <NavLink to="/#">
                <img src={like} alt="like-icon" className="w-6 h-6" />
              </NavLink>
              <div onClick={openModal} className="cursor-pointer">
                <img src={cart} alt="cart-icon" className="w-7 h-7" />
              </div>
            </div>
            {/* Conditionally render nav icon  */}
            <div className="md:hidden z-10 " onClick={handleClick}>
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
              <li className="p-2 hover:text-black hover:bg-white z-50 w-full text-center border-b border-white">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-primary" : "text-white"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="p-2 hover:text-black hover:bg-white z-50 w-full text-center border-b border-white">
                <NavLink
                  to="/shop"
                  className={({ isActive }) =>
                    isActive ? "text-primary" : "text-white"
                  }
                >
                  Shop
                </NavLink>
              </li>
              <li className="p-2 hover:text-black hover:bg-white z-50 w-full text-center border-b border-white">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "text-primary" : "text-white"
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="p-2 hover:text-black hover:bg-white z-50 w-full text-center">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "text-primary" : "text-white"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </Container>
      </div>

      {/* Modal Component */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="w-full h-full relative">
            <div
              className="bg-white p-4 shadow-lg w-[400px] h-fit absolute right-0 transform transition-transform"
              style={{
                transform: isModalOpen ? "translateX(0)" : "translateX(100%)",
              }}
            >
              <div className="flex items-center justify-between ">
                <h2 className="text-md font-semibold">Shopping Cart</h2>
                {/* Place your cart content here */}
                <button
                  className="text-primary text-xl rounded"
                  onClick={closeModal}
                >
                  <MdCancel />
                </button>
              </div>
              {cartObject.length > 0 ? (
                <section className="mt-3 flex flex-col justify-between">
                  {cartObject.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center mb-2"
                    >
                      <div className="flex gap-3 items-center">
                        <Suspense fallback={<div>Loading...</div>}>
                          <LazyImage
                            cloudName={cloudName}
                            publicId={item?.id}
                            alt={item?.id}
                            className="w-12 h-12 rounded object-cover"
                          />
                        </Suspense>{" "}
                        <div>
                          <p>{item.title}</p>
                          <p>
                            {item.quantity} x Rs. {item.amount}
                          </p>
                        </div>
                      </div>

                      <div
                        onClick={() => removeFromCart(item.id)}
                        className="cursor-pointer"
                      >
                        <MdCancel className="text-lg text-tertiary" />
                      </div>
                    </div>
                  ))}
                  <div className="mt-5 border-b pb-3">
                    <div className="flex justify-between">
                      <p>Subtotal:</p>
                      <p className="text-primary"> {total}</p>
                    </div>
                  </div>
                  <div className="flex justify-between mt-4">
                    {cartButtons.map((button, index) => (
                      <button
                        key={index}
                        className="w-fit bg-white px-6 rounded-[50px] py-1 text-primary-dark border border-[#000] text-sm outline-none"
                        onClick={closeModal}
                      >
                        {button}
                      </button>
                    ))}
                  </div>
                </section>
              ) : (
                <p>Your cart is empty</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
