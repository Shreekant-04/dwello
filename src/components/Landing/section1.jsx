import React from "react";
import heroImage from "../../assets/hero-image.png";
import { FaHome, FaRupeeSign } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Section1 = () => {
  return (
    <section className="h-screen bg-[#FEF7F2] dark:bg-gray-900 text-gray-800 dark:text-gray-100 relative flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full px-4 md:px-12 lg:px-20 py-10 gap-10">
        <div className="flex flex-col justify-center space-y-6 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold">
            Find Your Dream Home
          </h1>
          <p className="text-base sm:text-lg md:w-3/4 mx-auto md:mx-0">
            Explore our curated selection of exquisite properties meticulously
            tailored to your unique dream home vision.
          </p>
        </div>

        <div>
          <img
            src={heroImage}
            alt="Dream Home"
            className="w-full h-full object-cover rounded-xl md:scale-120"
          />
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4">
        <div className="bg-[#DDC7BB] dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg flex flex-col md:flex-row justify-center items-center gap-4">
          <label className="relative w-full md:w-56">
            <input
              type="text"
              placeholder="Location"
              readOnly
              className="bg-white dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-300 px-4 py-2 pr-10 rounded-lg shadow w-full focus:outline-none"
            />
            <FaLocationDot className="absolute top-1/2 -translate-y-1/2 right-3 text-gray-500 dark:text-gray-300" />
          </label>

          <label className="relative w-full md:w-56">
            <input
              type="text"
              placeholder="Property Type"
              readOnly
              className="bg-white dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-300 px-4 py-2 pr-10 rounded-lg shadow w-full focus:outline-none"
            />
            <FaHome className="absolute top-1/2 -translate-y-1/2 right-3 text-gray-500 dark:text-gray-300" />
          </label>

          <label className="relative w-full md:w-56">
            <input
              type="text"
              placeholder="Budget"
              readOnly
              className="bg-white dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-300 px-4 py-2 pr-10 rounded-lg shadow w-full focus:outline-none"
            />
            <FaRupeeSign className="absolute top-1/2 -translate-y-1/2 right-3 text-gray-500 dark:text-gray-300" />
          </label>

          <button className="bg-gray-800 dark:bg-white text-white dark:text-gray-900 px-6 py-2 rounded-lg hover:opacity-90 transition">
            Find
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section1;
