import React, { Suspense, useMemo } from "react";
import TopSection from "../../component/reusables/top-into-header";
import Services from "../../component/common/services/Services";
import { useCart } from "../../hooks/cart-context";
import { cloudName } from "../../cloudImages/Cloud";

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

const Checkout = () => {
  const { cart: cartObject, addToCart, removeFromCart } = useCart(); // Destructure addToCart from useCart

  const LazyImage = useMemo(
    () =>
      React.lazy(() =>
        import("cloudinary-react").then((module) => ({ default: module.Image }))
      ),
    []
  );

  const subtotal = cartObject.reduce((acc, item) => {
    // Ensure item.amount and item.quantity are numeric
    const amount = parseFloat(item.amount) || 0;
    const quantity = parseInt(item.quantity, 10) || 0;
    return acc + amount * quantity;
  }, 0);

  return (
    <div className="pt-10">
      <TopSection theme="Checkout" main="Home" route="Checkout" />
      <div className="screen-max-width flex flex-col   mt-8">
        <div className="flex flex-col lg:flex-row  gap-12 mt-5 px-2">
          <div className="lg:w-1/2 flex items-start justify-center ">
            <form className="grid grid-cols-2 gap-4 lg:w-[450px]">
              <h3 className="text-black text-xl font-semibold col-span-2">
                Billing Details
              </h3>

              <InputField id="firstName" label="First Name" col="1" />
              <InputField id="lastName" label="Last Name" col="1" />
              <InputField
                id="companyName"
                label="Company Name (optional)"
                col="2"
              />
              <InputField id="country" label="Country / Region" col="2" />
              <InputField id="street" label="Street address" col="2" />
              <InputField id="town" label="Town / City" col="2" />
              <InputField id="province" label="Province" col="2" />
              <InputField id="zipCode" label="ZIP code" col="2" />
              <InputField id="phone" label="Phone" col="2" />
              <InputField id="emailAddress" label="Email address" col="2" />
              <InputField
                id="additionalInformation"
                placeholder="Additional Information"
                col="2"
              />
            </form>
          </div>
          <div className="w-full lg:w-1/2 h-fit  flex justify-center">
            <div className="w-[400px] h-full py-8 pb-12 px-3">
              <div className="flex justify-between font-semibold">
                <p>Product</p>
                <p>Subtotal</p>
              </div>
              <div className="mt-1">
                {cartObject.map((object, index) => (
                  <div className=" w-full py-2">
                    <div className="flex justify-between items-center text-sm">
                      <p>
                        <span className="text-tertiary">{object.title}</span> x{" "}
                        {object.quantity}
                      </p>
                      <p>{object?.quantity * object?.amount}</p>
                    </div>
                  </div>
                ))}
                <div className="flex justify-between mt-5 text-sm">
                  <p>Subtotal</p>
                  <p>{subtotal}</p>
                </div>

                <div className="flex justify-between mt-2 border-b pb-3 text-sm">
                  <p>Total</p>
                  <p className="text-primary font-semibold text-2xl">
                    {subtotal}
                  </p>
                </div>
                <div>
                  <div>
                    <div className="flex gap-3 mt-3">
                      <input
                        type="radio"
                        className="w-3"
                        name="placeOrder"
                        id="dbt"
                      />
                      <label htmlFor="dbt" className="text-sm">
                        Direct Bank Transfer
                      </label>
                    </div>
                    <p className="text-xs text-tertiary mt-1">
                      Make your payment directly into our bank account. Please
                      use your Order ID as the payment reference. Your order
                      will not be shipped until the funds have cleared in our
                      account.
                    </p>
                    <div className="flex gap-3 mt-3">
                      <input
                        type="radio"
                        className="w-3 "
                        name="placeOrder"
                        id="cod"
                      />
                      <label htmlFor="cod" className="text-sm">
                        Cash on Delivery
                      </label>
                    </div>
                    <p className="text-xs mt-2">
                      Your personal data will be used to support your experience
                      throughout this website, to manage access to your account,
                      and for other purposes described in our{" "}
                      <span className="font-semibold">privacy policy</span>.
                    </p>
                    <div className="flex justify-center mt-6 w-full ">
                      <button className="px-10 py-1 rounded-md border text-black outline-none border-black">
                        Place order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Services />
    </div>
  );
};

export default Checkout;
