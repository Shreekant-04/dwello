import React from "react";
import house1 from "../../assets/house1.jpg";
import house2 from "../../assets/house2.jpg";
import house3 from "../../assets/house3.jpg";

// Sample data
const residences = [
  {
    image: house1,
    name: "Skyline Villas",
    description: "Elegant 4BHK villa with a rooftop pool and garden views.",
    price: "₹2.5 Cr",
  },
  {
    image: house2,
    name: "Urban Heights",
    description: "Modern 3BHK apartment located in the heart of the city.",
    price: "₹1.2 Cr",
  },
  {
    image: house3,
    name: "Palm Residency",
    description: "Spacious bungalow with private lawn and parking space.",
    price: "₹3.1 Cr",
  },
];

const Section4 = () => {
  return (
    <section className="bg-[#FEF7F2] dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-4">
      <div className="text-center px-4 md:px-12 lg:px-20 max-w-4xl mx-auto text-[#2B1B12] dark:text-gray-300">
        <h3 className="text-3xl sm:text-4xl font-bold mb-4">
          Our Popular Residences
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-12 lg:px-24 py-12">
        {residences.map((residence, index) => (
          <Card key={index} data={residence} />
        ))}
      </div>
    </section>
  );
};

const Card = ({ data }) => {
  return (
    <div className="bg-[#DDC7BB] dark:bg-gray-700 rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
      <img
        src={data.image}
        alt={data.name}
        className="w-full h-52 object-cover  "
      />
      <div className="p-4 flex flex-col gap-2 text-[#2B1B12] dark:text-gray-200 ">
        <h4 className="text-xl font-semibold  mb-1">{data.name}</h4>
        <p className="mb-2">{data.description}</p>
        <div className="flex justify-between items-center mt-auto">
          <p className="text-lg font-bold  ">{data.price}</p>
          <a href="#" className="">
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default Section4;
