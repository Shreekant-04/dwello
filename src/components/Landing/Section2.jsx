import React from "react";
import image1 from "../../assets/image_2.png";

const Section2 = () => {
  return (
    <section className="bg-[#FEF7F2] dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-16 ">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full px-4 md:px-12 lg:px-20 gap-10 items-center py-8 ">
        <div >
          <img
            src={image1}
            alt="Dream Property"
            className="w-full h-auto rounded-2xl shadow-lg object-cover"
          />
        </div>

        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            We Help You To Find Your Dream Home
          </h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
            From cozy cottages to luxurious estates, our dedicated team guides
            you through every step of the journey, ensuring your dream home
            becomes a reality.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card title="Luxury Apartments" figure="200+" />
            <Card title="Luxury Villas" figure="150+" />
            <Card title="Luxury Bungalows" figure="100+" />
            <Card title="Luxury Farmhouses" figure="50+" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Card = ({ title, figure }) => {
  return (
    <div className=" p-3 rounded-xl  hover:shadow-md transition duration-300 text-center ">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
        {figure}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{title}</p>
    </div>
  );
};

export default Section2;
