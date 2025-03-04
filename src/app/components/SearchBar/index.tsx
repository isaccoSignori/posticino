import { useState } from "react";

export const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex items-center border rounded-lg overflow-hidden">
      <input
        type="text"
        placeholder="Cerca..."
        className="flex-1 p-2 outline-none"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="bg-green-500 text-white px-4 py-2">Search</button>
    </div>
  );
};
