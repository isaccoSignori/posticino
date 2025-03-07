"use client";

import { useState } from "react";
import { FiMenu, FiUser, FiSearch } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Home() {
  const [search, setSearch] = useState("");
  const tabs = ["Scopri", "Località", "Ristoranti"];
  const locations = [
    { name: "Caldana", desc: "Arte e cultura medioevale", thumbsUp: 150, img: "https://placehold.co/150" },
    { name: "Bivio di Ravi", desc: "Il cuore della Maremma", thumbsUp: 120, img: "https://placehold.co/150" },
  ];
  const restaurants = [
    { name: "Enoristorante Boccaccio", desc: "Sapori autentici della regione", thumbsUp: 120, img: "https://placehold.co/150" },
    { name: "Osteria lo zozzone", desc: "Costi bassi e cucina autentica", thumbsUp: 95, img: "https://placehold.co/150" },
  ];

  return (
    <div className="bg-white min-h-screen text-[#2C3E50]">
      {/* Topbar */}
      <header className="flex justify-between items-center p-4 bg-[#1E6091] text-white">
        <FiMenu size={24} />
        <h1 className="text-xl font-bold">Toscana Explorer</h1>
        <FiUser size={24} />
      </header>

      {/* Tabs */}
      <nav className="flex justify-around bg-[#168AAD] py-2">
        {tabs.map((tab) => (
          <button key={tab} className="text-white font-medium">{tab}</button>
        ))}
      </nav>

      {/* Searchbar */}
      <div className="p-4">
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
          <input
            type="text"
            className="w-full pl-10 pr-20 py-2 rounded-full border border-gray-400 focus:outline-none"
            placeholder="Cerca una località o un ristorante..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#1E6091] text-white px-4 py-1 rounded-full">
            Cerca
          </button>
        </div>
      </div>

      {/* Carosello Località */}
      <section className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">Località</h2>
          <button className="text-[#1E6091] font-medium">Vedi tutto</button>
        </div>
        <Swiper spaceBetween={10} slidesPerView={1.5} className="overflow-x-auto">
          {locations.map((loc) => (
            <SwiperSlide key={loc.name} className="relative rounded-lg overflow-hidden shadow-md">
              <img src={loc.img} alt={loc.name} className="w-full h-40 object-cover" />
              <div className="absolute bottom-0 w-full bg-white bg-opacity-70 text-gray-900 p-2">
                <h3 className="font-bold">{loc.name}</h3>
                <p className="text-sm">{loc.desc}</p>
                <div className="flex items-center mt-1">
                  <span className="text-lg">👌</span>
                  <span className="ml-1 text-sm">{loc.thumbsUp}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Carosello Ristoranti */}
      <section className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">Ristoranti Consigliati</h2>
          <button className="text-[#1E6091] font-medium">Vedi tutto</button>
        </div>
        <Swiper spaceBetween={10} slidesPerView={1.5} className="overflow-x-auto">
          {restaurants.map((rest) => (
            <SwiperSlide key={rest.name} className="relative rounded-lg overflow-hidden shadow-md">
              <img src={rest.img} alt={rest.name} className="w-full h-40 object-cover" />
              <div className="absolute bottom-0 w-full bg-white bg-opacity-70 text-gray-900 p-2">
                <h3 className="font-bold">{rest.name}</h3>
                <p className="text-sm">{rest.desc}</p>
                <div className="flex items-center mt-1">
                  <span className="text-lg">👌</span>
                  <span className="ml-1 text-sm">{rest.thumbsUp}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}
