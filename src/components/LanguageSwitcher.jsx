// components/LanguageSwitcher.js
import React, { useEffect } from "react";

const LanguageSwitcher = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      const select = document.querySelector(".goog-te-combo");
      if (select) clearInterval(interval);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event("change"));
    }
  };

  const languages = {
    "🌍 International": [
      { label: "English", value: "en" },
      { label: "French", value: "fr" },
      { label: "Spanish", value: "es" },
      { label: "German", value: "de" },
      { label: "Russian", value: "ru" },
    ],
    "🇮🇳 Indian Languages": [
      { label: "Hindi", value: "hi" },
      { label: "Bengali", value: "bn" },
      { label: "Telugu", value: "te" },
      { label: "Marathi", value: "mr" },
      { label: "Tamil", value: "ta" },
      { label: "Urdu", value: "ur" },
      { label: "Gujarati", value: "gu" },
      { label: "Kannada", value: "kn" },
      { label: "Malayalam", value: "ml" },
      { label: "Punjabi", value: "pa" },
      { label: "Odia", value: "or" },
      { label: "Assamese", value: "as" },
      { label: "Nepali", value: "ne" },
      { label: "Maithili", value: "mai" },
      { label: "Sanskrit", value: "sa" },
      { label: "Dogri", value: "doi" },
      { label: "Sindhi", value: "sd" },
      { label: "Santali", value: "sat" },
    ],
  };
  return (
    <section className="absolute top-0 right-0 px-4 py-2">
      <div id="google_translate_element" style={{ display: "none" }}></div>
      <select
        onChange={handleLanguageChange}
        defaultValue="en"
        className="bg-[#DDC7BB] dark:bg-gray-800 text-gray-800 dark:text-gray-100   px-4 py-2 rounded-lg  transition duration-300 focus:outline-none"
      >
        {Object.entries(languages).map(([groupLabel, options]) => (
          <optgroup label={groupLabel} key={groupLabel}>
            {options.map(({ label, value }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </section>
  );
};
export default LanguageSwitcher;
