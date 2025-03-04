"use client";

import { Header } from "./components/Header";
import { Cards } from "./components/Cards";
import { Searchbar } from "./components/SearchBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-green-700">
      <Header />
      <main className="p-4">
        <Searchbar />
        <Cards />
      </main>
    </div>
  );
}
