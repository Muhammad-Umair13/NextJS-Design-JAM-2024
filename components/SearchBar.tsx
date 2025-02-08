"use client"
// components/SearchBar.tsx
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex items-center gap-2 bg-white p-2 rounded-md shadow-md">
      <input
        type="text"
        placeholder="Search Cars here"
        className="w-[492px] border-2 max-md:w-[300px] rounded-[70px] pl-10 pr-4 h-11 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}
