import React, { Suspense, useMemo } from "react";
import TopSection from "../../component/reusables/top-into-header";
import Services from "../../component/common/services/Services";
import { useCart } from "../../hooks/cart-context";
import { cloudName } from "../../cloudImages/Cloud";
import { MdOutlineDeleteOutline } from "react-icons/md";

const Cart = () => {
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

  const total = subtotal;
  return (
    <div className="pt-10">
      <TopSection theme="Cart" main="Home" route="Cart" />
      <div className=" flex flex-col justify-center gap-12 md:items-center lg:items-start lg:flex-row mt-8">
        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left rtl:text-right ">
            <thead class="text-xs text-black bg-secondary">
              <tr>
                <th scope="col" class="px-6 py-3"></th>
                <th scope="col" class="px-6 py-3">
                  Product
                </th>
                <th scope="col" class="px-6 py-3">
                  Price
                </th>
                <th scope="col" class="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" class="px-6 py-3">
                  Subtotal
                </th>
                <th scope="col" class="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {cartObject.length > 0 ? (
                <>
                  {cartObject.map((object, idx) => (
                    <tr key={idx} class="bg-white border-b ">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium whitespace-nowrap"
                      >
                        <Suspense fallback={<div>Loading...</div>}>
                          <LazyImage
                            cloudName={cloudName}
                            publicId={object?.id}
                            alt={object?.id}
                            className="w-16 h-16 rounded object-cover"
                          />
                        </Suspense>{" "}
                      </th>
                      <td class="px-6 py-4">{object?.title}</td>
                      <td class="px-6 py-4">${object?.amount}</td>
                      <td class="px-6 py-4">
                        <div className="w-full  flex items-center justify-center">
                          <div className="border text-center w-8 h-8 flex items-center justify-center rounded-md">
                            {object?.quantity}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        {" "}
                        {(parseFloat(object?.amount) || 0) *
                          (parseInt(object?.quantity, 10) || 0)}
                      </td>
                      <td
                        className="px-6 py-4 cursor-pointer "
                        onClick={() => removeFromCart(object.id)}
                      >
                        <MdOutlineDeleteOutline className="text-xl text-primary" />
                      </td>
                    </tr>
                  ))}
                </>
              ) : (
                <tr className="border">
                  <td
                    colSpan={6}
                    style={{
                      textAlign: "center",
                      padding: "20px",
                      verticalAlign: "middle",
                    }}
                  >
                    Your cart is empty
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="h-56 rounded-md w-[325px] bg-secondary p-4 self-center">
          <p className="text-center font-semibold text-lg">Cart Totals</p>
          <div className="mt-8 px-8">
            <div className="flex justify-between items-center">
              <p className="text-sm">Subtotal</p>
              <p className="text-tertiary text-sm">Rs. {total}</p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-sm">Total</p>
              <p className="text-primary text-sm">Rs. {total}</p>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center">
            <button className="px-6 py-2 border border-black rounded-md">
              Check out
            </button>
          </div>
        </div>
      </div>
      <Services />
    </div>
  );
};

export default Cart;
