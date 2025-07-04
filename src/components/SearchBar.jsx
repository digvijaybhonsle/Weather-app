import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city.trim()) return;
    onSearch(city.trim());
    setCity("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center gap-2 w-full mt-6 px-4"
    >
      <input
        type="text"
        placeholder="Search City..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="w-[250px] sm:w-[300px] px-4 py-2 rounded-2xl shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
      />
      <button
        type="submit"
        aria-label="Search"
        className="p-3 bg-blue-900 text-white rounded-3xl hover:bg-blue-700 transition duration-300"
      >
        <FaSearch className="text-white text-sm" />
      </button>
    </form>
  );
};

export default SearchBar;
