import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

import logoDark from "../assets/logo_dark.png";
import logoLight from "../assets/logo_white.png";

const Footer = ({ isDark }) => {
  return (
    <footer className="bg-[#DDC7BB] dark:bg-gray-900 text-gray-700 dark:text-gray-200 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1   md:grid-cols-3 lg:grid-cols-5 gap-8   text-center">
        <div className="flex flex-col items-center justify-center col-span-1 md:col-span-3 lg:col-span-1 ">
          <img
            src={isDark ? logoLight : logoDark}
            alt="Dwello"
            className="w-24"
          />

          <p className="mt-4 text-sm">
            Dwello is your trusted partner in finding the perfect home.
          </p>
        </div>

        <QuickLinks
          title="Quick Links"
          items={["Home", "Carrer", "Our Team ", "Resources"]}
        />
        <QuickLinks
          title={"Support"}
          items={["FAQ", "Contact", "Help Center", "Terms of services"]}
        />
        <QuickLinks
          title={"Find Us"}
          items={["Events", "Locations", "Newsletters"]}
        />

        <div className="col-span-1 md:col-span-3 lg:col-span-1">
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p>Email: info@dwello.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: Delhi, India</p>

          <div className="mt-4">
            <div className="flex space-x-4 text-xl items-center justify-center">
              <a href="#">
                <FaFacebookF className="hover:text-blue-600" />
              </a>
              <a href="#">
                <FaInstagram className="hover:text-pink-500" />
              </a>
              <a href="#">
                <FaTwitter className="hover:text-blue-400" />
              </a>
              <a href="#">
                <FaLinkedinIn className="hover:text-blue-700" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-300 dark:border-gray-700 mt-10 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Dwello. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

const QuickLinks = ({ items, title }) => {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-4">{title}</h4>
      <ul className="space-y-2 ">
        {items?.map((item) => (
          <li key={item}>
            <a
              href={`#`}
              className="hover:text-[#2B1B12] dark:hover:text-[#4e4e4e] hover:font-semibold transition-all duration-150"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
