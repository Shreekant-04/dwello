import React from "react";
import { MdEmail } from "react-icons/md";
import { FaHeadset, FaQuestionCircle } from "react-icons/fa";

const Section6 = () => {
  return (
    <section className="bg-[#FEF7F2] dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6 py-16">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h3 className="text-3xl md:text-4xl font-bold">
          Do You Have Any Questions? <br /> Get Help From Us
        </h3>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-lg font-medium text-gray-700 dark:text-gray-200">
          <div className="flex items-center gap-2 hover:text-blue-600 cursor-pointer transition">
            <FaHeadset className="text-xl" />
            <p>Chat live with our support team</p>
          </div>
          <div className="flex items-center gap-2 hover:text-blue-600 cursor-pointer transition">
            <FaQuestionCircle className="text-xl" />
            <p>Browse our FAQ</p>
          </div>
        </div>

        <form className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <label className="relative w-full sm:w-[300px] ">
            <MdEmail className="absolute top-1/2 left-3 transform -translate-y-1/2  text-lg text-[#2B1B12] dark:text-gray-400" />
            <input
              type="email"
              placeholder="Enter your email"
              readOnly
              className="w-full py-3 pl-10 pr-4 rounded-lg shadow-md bg-white dark:bg-gray-800 text-[#2B1B12] dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none "
            />
          </label>
          <button
          type="button"
            className="bg-[#2B1B12] dark:bg-gray-400 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition shadow-md"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Section6;
