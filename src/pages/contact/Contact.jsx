import React from "react";
import TopSection from "../../component/reusables/top-into-header";
import Services from "../../component/common/services/Services";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";

const InputField = ({
  id,
  label,
  type = "text",
  placeholder = "",
  required = false,
  col,
}) => {
  return (
    <div className={`flex flex-col gap-2  col-span-${col}`}>
      <label className="text-sm" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        required={required}
        className={`border px-4 py-4 outline-none rounded-md `}
      />
    </div>
  );
};

const Contact = () => {
  return (
    <div className="pt-10">
      <TopSection theme="Contact" main="Home" route="Contact" />
      <div className="screen-max-width flex flex-col items-center  mt-12">
        <div className="text-center flex flex-col items-center justify-center">
          <h2 className="font-semibold text-lg">Get In Touch With Us</h2>
          <p className=" md:w-3/4  text-tertiary">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>

        <div className=" h-fit mt-16">
          <div className="w-full  flex justify-center flex-col md:flex-row md:gap-10 lg:gap-20">
            <div className="md:w-[25%]">
              <div className="flex gap-2">
                <p className="mt-1">
                  <IoLocationSharp className="text-lg" />
                </p>
                <div>
                  <h2 className="text-md font-semibold">Address</h2>
                  <p className="text-sm">
                    236 5th SE Avenue, New York NY10000, United States
                  </p>
                </div>
              </div>
              <div className="flex gap-2 mt-3">
                <p className="mt-1">
                  <FaPhoneAlt className="text-lg" />
                </p>
                <div>
                  <h2 className="text-md font-semibold">Phone</h2>
                  <p className="text-sm">
                    236 5th SE Avenue, New York NY10000, United States
                  </p>
                </div>
              </div>
              <div className="flex gap-2 mt-3">
                <p className="mt-1">
                  <MdAccessTimeFilled className="text-lg" />
                </p>
                <div>
                  <h2 className="text-md font-semibold">Working Time</h2>
                  <p className="text-sm">
                    236 5th SE Avenue, New York NY10000, United States
                  </p>
                </div>
              </div>
            </div>
            <div className="   mt-12 md:mt-0 justify-center flex">
              {" "}
              <form className="grid grid-cols-2 gap-4 lg:w-[480px]">
                <InputField
                  id="yourName"
                  label="Your Name"
                  col="2"
                  placeholder="abc"
                />
                <InputField
                  id="emailAddress"
                  label="Email address "
                  col="2"
                  placeholder="abc@gmail.com"
                />
                <InputField
                  id="subject"
                  label="Subject "
                  col="2"
                  placeholder="This is optional"
                />
                <InputField
                  id="message"
                  label="Message"
                  col="2"
                  placeholder="Hi! i’d like to ask about"
                />
                <div className="flex  justify-start  mt-6 w-full ">
                  <button
                    type="submit"
                    className="px-12 py-2 rounded-md border-none text-white outline-none bg-primary"
                  >
                    Place order
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Services />
    </div>
  );
};

export default Contact;
