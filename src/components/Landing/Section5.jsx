import React from "react";
import { FaStar } from "react-icons/fa";
import profile1 from "../../assets/profile1.jpg";
import profile2 from "../../assets/profile2.jpg";
import profile3 from "../../assets/profile3.jpg";
import feedback1 from "../../assets/feedback1.jpg";
import feedback2 from "../../assets/feedback2.jpg";
import feedback3 from "../../assets/feedback3.jpg";

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    houseImage: feedback1,
    profileImage: profile1,
    name: "Rahul Sharma",
    city: "Mumbai",
    rating: 5,
    review:
      "Dwello helped me find the perfect home! The service was top-notch and truly personalized.",
  },
  {
    id: 2,
    houseImage: feedback2,
    profileImage: profile2,
    name: "Anjali Mehra",
    city: "Delhi",
    rating: 4,
    review:
      "A smooth experience from start to finish. Great properties and professional agents.",
  },
  {
    id: 3,
    houseImage: feedback3,
    profileImage: profile3,
    name: "Simran Verma",
    city: "Bangalore",
    rating: 5,
    review:
      "I couldn’t be happier with the home I found through Dwello. Highly recommend!",
  },
];

const Section5 = () => {
  return (
    <section className="bg-[#FEF7F2] dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-4 ">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2B1B12] dark:text-gray-300">
          What People Say About Dwello
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-xl mx-auto">
          Hear from our happy clients who found their dream homes through
          Dwello.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-12">
        {testimonials.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
    </section>
  );
};

const Card = ({ data }) => {
  const stars = Array(data.rating).fill(0);

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden transition hover:shadow-xl">
      <img
        src={data.houseImage}
        alt="house"
        className="w-full h-40 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center gap-4">
          <img
            src={data.profileImage}
            alt={data.name}
            className="w-14 h-14 rounded-full object-cover border-2 border-gray-300"
          />
          <div className="w-full">
            <h2 className="text-lg font-semibold text-[#2B1B12] dark:text-gray-300">{data.name}</h2>
            <div className="flex justify-between items-center   ">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {data.city}
              </p>
              <div className="flex  text-yellow-500 ml-auto">
                {stars.map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm">
          "{data.review}"
        </p>
      </div>
    </div>
  );
};

export default Section5;
