import React from "react";

const ComparisonTable = ({ handleAddToCart, productOne , productTwo }) => {
  return (
    <table class="w-[700px]   text-sm text-left rtl:text-right   text-black">
      <thead class="text-xs text-[#000000] uppercase 0">
        <tr>
          <th scope="col" class="px-6 py-1 border-r border-gray-200">
            General
          </th>
          <th scope="col" class="px-6 py-1 border-r border-gray-200"></th>{" "}
          <th scope="col" class="px-6 py-1 "></th>{" "}
        </tr>
      </thead>
      <tbody className="">
        <tr class="bg-white text-black">
          <th
            scope="row"
            class="px-6 py-2 border-r border-gray-200 font-medium  whitespace-nowrap"
          >
            Sales package
          </th>
          <td class="px-6 py-2  border-r border-gray-200">1 sectional sofa</td>
          <td class="px-6 py-2  "> 1 Three Seater, 2 Single Seater</td>
        </tr>
        <tr class="bg-white ">
          <th
            scope="row"
            class="px-6 py-2 border-r border-gray-200 font-medium whitespace-nowrap text-black"
          >
            Model Number
          </th>
          <td class="px-6 py-2 border-r border-gray-200  text-black">
            {" "}
            TFCBLIGRBL6SRHS
          </td>
          <td class="px-6 py-2 "> DTUBLIGRBL568</td>
        </tr>
        <tr class="bg-white ">
          <th
            scope="row"
            class="px-6 py-2 border-r border-gray-200 font-medium whitespace-nowrap text-black"
          >
            Secondary Material
          </th>
          <td class="px-6 py-2 border-r border-gray-200"> Solid Wood</td>
          <td class="px-6 py-2 "> Solid Wood</td>
        </tr>
        <tr class="bg-white ">
          <th
            scope="row"
            class="px-6 py-2 border-r border-gray-200 font-medium whitespace-nowrap text-black"
          >
            Configuration
          </th>
          <td class="px-6 py-2 border-r border-gray-200"> L-shaped </td>
          <td class="px-6 py-2 "> L-shaped</td>
        </tr>
        <tr class="bg-white ">
          <th
            scope="row"
            class="px-6 py-2 border-r border-gray-200 font-medium whitespace-nowrap text-black"
          >
            Upholstery Material
          </th>
          <td class="px-6 py-2 border-r border-gray-200"> Fabric + Cotton</td>
          <td class="px-6 py-2 ">Fabric + Cotton</td>
        </tr>
        <tr class="bg-white ">
          <th
            scope="row"
            class="px-6 py-2 border-r border-gray-200 font-medium whitespace-nowrap text-black"
          >
            Upholstery Color
          </th>
          <td class="px-6 py-2 border-r border-gray-200">
            {" "}
            Bright Grey & Lion
          </td>
          <td class="px-6 py-2 "> Bright Grey & Lion</td>
        </tr>
      </tbody>
      <thead class="text-xs text-[#000000] uppercase 0">
        <tr>
          <th scope="col" class="px-6 pt-4 border-r border-gray-200">
            Products
          </th>
          <th scope="col" class="px-6 py-1 border-r border-gray-200"></th>{" "}
          <th scope="col" class="px-6 py-1 "></th>{" "}
        </tr>
      </thead>
      <tbody className="">
        <tr class="bg-white text-black">
          <th
            scope="row"
            class="px-6 py-2 border-r border-gray-200 font-medium  whitespace-nowrap"
          >
            Filling Material
          </th>
          <td class="px-6 py-2  border-r border-gray-200">Foam </td>
          <td class="px-6 py-2  ">Matte</td>
        </tr>
        <tr class="bg-white ">
          <th
            scope="row"
            class="px-6 py-2  border-r border-gray-200 font-medium whitespace-nowrap text-black"
          >
            Finish Type
          </th>
          <td class="px-6 py-2 border-r border-gray-200  text-black">
            {" "}
            Bright Grey & Lion
          </td>
          <td class="px-6 py-2"> Bright Grey & Lion</td>
        </tr>
        <tr class="bg-white ">
          <th
            scope="row"
            class="px-6 py-2 border-r border-gray-200 font-medium whitespace-nowrap text-black"
          >
            Adjustable Headrest
          </th>
          <td class="px-6 py-2 border-r border-gray-200"> No</td>
          <td class="px-6 py-2 "> Yes</td>
        </tr>
        <tr class="bg-white ">
          <th
            scope="row"
            class="px-6 py-2 border-r border-gray-200 font-medium whitespace-nowrap text-black"
          >
            Maximum Load Capacity
          </th>
          <td class="px-6 py-2 border-r border-gray-200"> 280KG </td>
          <td class="px-6 py-2 "> 350KG</td>
        </tr>
        <tr class="bg-white ">
          <th
            scope="row"
            class="px-6 py-2 border-r border-gray-200 font-medium whitespace-nowrap text-black"
          >
            Upholstery Material
          </th>
          <td class="px-6 py-2 border-r border-gray-200"> Fabric + Cotton</td>
          <td class="px-6 py-2 ">Fabric + Cotton</td>
        </tr>
        <tr class="bg-white ">
          <th
            scope="row"
            class="px-6 py-2 border-r border-gray-200 font-medium whitespace-nowrap text-black"
          >
            Origin of Manufacture
          </th>
          <td class="px-6 py-2 border-r border-gray-200"> India</td>
          <td class="px-6 py-2 "> India</td>
        </tr>
      </tbody>
      <thead class="text-xs text-[#000000] uppercase 0">
        <tr>
          <th scope="col" class="px-6 pt-4 border-r border-gray-200">
            Dimensions
          </th>
          <th scope="col" class="px-6 py-1 border-r border-gray-200"></th>{" "}
          <th scope="col" class="px-6 py-1 "></th>{" "}
        </tr>
      </thead>
      <tbody className="">
        <tr class="bg-white text-black">
          <th
            scope="row"
            class="px-6 py-2 border-r border-gray-200 font-medium  whitespace-nowrap"
          >
            Width
          </th>
          <td class="px-6 py-2  border-r border-gray-200">265.32 cm</td>
          <td class="px-6 py-2  ">265.32 cm</td>
        </tr>
        <tr class="bg-white ">
          <th
            scope="row"
            class="px-6 py-2  border-r border-gray-200 font-medium whitespace-nowrap text-black"
          >
            Height
          </th>
          <td class="px-6 py-2 border-r border-gray-200  text-black"> 76 cm</td>
          <td class="px-6 py-2 "> 76 cm</td>
        </tr>
        <tr class="bg-white ">
          <th
            scope="row"
            class="px-6 py-2 border-r border-gray-200 font-medium whitespace-nowrap text-black"
          >
            Depth
          </th>
          <td class="px-6 py-2 border-r border-gray-200"> 167.76 cm</td>
          <td class="px-6 py-2 "> 167.76 cm</td>
        </tr>
        <tr class="bg-white ">
          <th
            scope="row"
            class="px-6 py-2 border-r border-gray-200 font-medium whitespace-nowrap text-black"
          >
            Weight
          </th>
          <td class="px-6 py-2 border-r border-gray-200"> 45 KG </td>
          <td class="px-6 py-2 "> 45 KG</td>
        </tr>
        <tr class="bg-white ">
          <th
            scope="row"
            class="px-6 py-2 border-r border-gray-200 font-medium whitespace-nowrap text-black"
          >
            Seal Height
          </th>
          <td class="px-6 py-2 border-r border-gray-200"> 41.52 cm</td>
          <td class="px-6 py-2 ">41.52 cm</td>
        </tr>
        <tr class="bg-white ">
          <th
            scope="row"
            class="px-6 py-2 border-r border-gray-200 font-medium whitespace-nowrap text-black"
          >
            Leg Height
          </th>
          <td class="px-6 py-2 border-r border-gray-200">5.46 cm</td>
          <td class="px-6 py-2 ">5.46 cm</td>
        </tr>
      </tbody>
      <thead class="text-xs text-[#000000] uppercase 0">
        <tr>
          <th scope="col" class="px-6 pt-4 border-r border-gray-200">
            Warranty
          </th>
          <th scope="col" class="px-6 py-1 border-r border-gray-200"></th>{" "}
          <th scope="col" class="px-6 py-1 "></th>{" "}
        </tr>
      </thead>
      <tbody className="">
        <tr class="bg-white text-black">
          <th
            scope="row"
            class="px-6 py-2 border-r border-gray-200 font-medium  whitespace-nowrap align-top"
          >
            Warranty Summary
          </th>
          <td class="px-6 py-2  border-r border-gray-200 align-top">
            1 Year Manufacturing Warranty
          </td>
          <td class="px-6 py-2  align-top"> 1 Year Manufacturing Warranty</td>
        </tr>
        <tr class="bg-white ">
          <th
            scope="row"
            class="px-6 py-2   border-r border-gray-200 font-medium whitespace-nowrap text-black align-top"
          >
            Warranty Service Type
          </th>
          <td class="px-6 py-2 border-r border-gray-200  text-black  align-top">
            {" "}
            For Warranty Claims or Any Product Related Issues Please Email at
            operations@trevifurniture.com
          </td>
          <td class="px-6 py-2   align-top">
            {" "}
            For Warranty Claims or Any Product Related Issues Please Email at
            support@xyz.com{" "}
          </td>
        </tr>
        <tr class="bg-white  ">
          <th
            scope="row"
            class="px-6 py-2 border-r border-gray-200 align-top font-medium whitespace-nowrap text-black"
          >
            Not Covered in Warranty
          </th>
          <td class="px-6 py-2 border-r   border-gray-200  align-top">
            The Warranty Does Not Cover Damages Due To Usage Of The Product
            Beyond Its Intended Use And Wear & Tear In The Natural Course Of
            Product Usage.
          </td>
          <td class="px-6 py-2   align-top">
            {" "}
            The Warranty Does Not Cover Damages Due To Usage Of The Product
            Beyond Its Intended Use And Wear & Tear In The Natural Course Of
            Product Usage.
          </td>
        </tr>
        <tr class="bg-white ">
          <th
            scope="row"
            class="px-6 py-2 border-r border-gray-200 font-medium whitespace-nowrap align-top text-black"
          >
            Domestic Warranty
          </th>
          <td class="px-6 py-2 border-r border-gray-200 align-top"> 1 Year </td>
          <td class="px-6 py-2  align-top"> 3 months</td>
        </tr>
      </tbody>
      <tbody class="text-xs  text-[#000000] uppercase 0">
        <tr className="">
          <th
            scope="row"
            class="px-6 py-2   border-r border-gray-200 font-medium whitespace-nowrap text-black align-top"
          />
          <td scope="col" class="px-6 py-4  border-r border-gray-200 ">
            <button
              onClick={() => handleAddToCart(productOne)}
              className="bg-primary h-10 w-48 text-white text-[16px]"
            >
              Add to Cart
            </button>
          </td>
          <td scope="col" class="px-6 py-4  ">
            <button
              onClick={() => handleAddToCart(productTwo)}
              className="bg-primary h-10 w-48 text-white text-[16px]"
            >
              Add to Cart
            </button>
          </td>{" "}
        </tr>
      </tbody>
    </table>
  );
};

export default ComparisonTable;
