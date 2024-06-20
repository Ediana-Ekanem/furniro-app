import React from "react";
import Container from "../../container/Container";
import trophy from "/assets/icons/shop-icon/trophy-icon.svg";
import shipping from "/assets/icons/shop-icon/shipping-icon.svg";
import support from "/assets/icons/shop-icon/customer-support.svg";
import guarantee from "/assets/icons/shop-icon/guarantee-icon.svg";

const Services = () => {
  const serviceData = [
    {
      id: 1,
      img: trophy,
      title: "High Quality",
      subTitle: "Crafted from top materials",
    },
    {
      id: 2,
      img: guarantee,
      title: "Warranty Protection",
      subTitle: "Over 2 years",
    },
    {
      id: 3,
      img: shipping,
      title: "Free Shipping",
      subTitle: "Order over 150 $",
    },
    {
      id: 4,
      img: support,
      title: "Free Shipping",
      subTitle: "Dedicated support",
    },
  ];

  return (
    <div className="bg-[#faf3ea] w-full py-14 mt-36">
      <Container>
        <div className=" md:flex  justify-center md:justify-between ">
          {serviceData.map((item) => {
            return (
              <div
                key={item.id}
                className="flex items-center space-x-2 space-y-2 mb-4"
              >
                <div className=" w-10 md:w-14  md:10 md:h-14">
                  <img src={item.img} alt={item.title} className="title" />
                </div>
                <div className="flex flex-col items-start">
                  <h3 className="md:text-[25px] leading-[37px] font-[600]">
                    {item.title}
                  </h3>
                  <p className="text-[#898989] font-[500] text-[20px] leading-[30px]">
                    {item.subTitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Services;
