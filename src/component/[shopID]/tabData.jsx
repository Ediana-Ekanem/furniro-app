import React, { useState } from "react";
import DescriptionContent from "./content/description-content";

const TabData = () => {
  const [activeTab, setActiveTab] = useState("description");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="screen-max-width  px-2 md:px-0 py-10">
      <div className="flex text-black justify-center">
        <p
          className={`cursor-pointer ${
            activeTab === "description"
              ? "font-bold text-black"
              : "text-gray-400"
          }`}
          onClick={() => handleTabClick("description")}
        >
          Description
        </p>
        <p
          className={`cursor-pointer ml-4 ${
            activeTab === "additional"
              ? "font-bold text-black"
              : "text-gray-400"
          }`}
          onClick={() => handleTabClick("additional")}
        >
          Additional Information
        </p>
        <p
          className={`cursor-pointer ml-4 ${
            activeTab === "reviews" ? "font-bold text-black" : "text-gray-400"
          }`}
          onClick={() => handleTabClick("reviews")}
        >
          Reviews[5]
        </p>
      </div>
      <div className="mt-4">
        {activeTab === "description" && <DescriptionContent />}
        {activeTab === "additional" && (
          <div>
            <p>Additional Information content goes here...</p>
          </div>
        )}
        {activeTab === "reviews" && (
          <div>
            <p>Reviews content goes here...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabData;
