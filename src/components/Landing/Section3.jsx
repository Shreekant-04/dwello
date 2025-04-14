import React from "react";
import { FaUserTie, FaShieldAlt, FaHandsHelping } from "react-icons/fa";

const Section3 = () => {
  return (
    <section className="bg-[#FEF7F2] dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-4">
      {/* Section Header */}
      <div className="text-center px-4 md:px-12 lg:px-20 max-w-4xl mx-auto">
        <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-[#2B1B12] dark:text-gray-300">
          Why Choose Us
        </h3>
        <p className="text-base sm:text-lg text-[#4F3527] dark:text-gray-300">
          Elevating Your Home Buying Experience with Expertise, Integrity, and
          Unmatched Personalized Service.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-12 lg:px-20 py-12">
        <Card
          title="Expertise"
          description="Our team of experienced professionals is dedicated to guiding you through every step of the home buying process."
          icon={
            <FaUserTie className="text-5xl text-[#2B1B12] dark:text-gray-200 " />
          }
        />
        <Card
          title="Integrity"
          description="We prioritize transparency and honesty, ensuring you have all the information you need to make informed decisions."
          icon={
            <FaShieldAlt className="text-5xl text-[#2B1B12] dark:text-gray-200" />
          }
        />
        <Card
          title="Personalized Service"
          description="We take the time to understand your unique needs and preferences, tailoring our services to match your vision."
          icon={
            <FaHandsHelping className="text-5xl text-[#2B1B12] dark:text-gray-200" />
          }
        />
      </div>
    </section>
  );
};

const Card = ({ title, description, icon }) => {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center ">
      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 flex flex-col gap-2 items-center justify-center ">
        {icon} {title}
      </h4>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

export default Section3;
