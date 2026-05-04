"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AllAnimalsPage() {
  const [animals, setAnimals] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [sortType, setSortType] = useState("default");

  useEffect(() => {
    fetch("/data/animals.json")
      .then((res) => res.json())
      .then((data) => {
        setAnimals(data);
        setFiltered(data);
      });
  }, []);

  // FILTER by type
  const handleFilter = (type) => {
    let result;

    if (type === "All") {
      result = animals;
    } else {
      result = animals.filter((a) => a.type === type);
    }

    setFiltered(result);
  };

  // SORT + FILTER together
  const sortedAnimals = [...filtered].sort((a, b) => {
    if (sortType === "low") return a.price - b.price;
    if (sortType === "high") return b.price - a.price;
   
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto p-6">

      {/* HEADER */}
      <h1 className="text-3xl font-bold text-center mb-6">
        All Animals
      </h1>

      {/* FILTER BUTTONS */}
      <div className="justify-between">
      <div className="flex gap-3 mb-6 flex-wrap">

        <button
          onClick={() => handleFilter("All")}
          className="px-4 py-2 bg-green-700 rounded hover:bg-green-900 text-white cursor-pointer"
        >
          All
        </button>

        <button
          onClick={() => handleFilter("Cow")}
          className="px-4 py-2 bg-green-700 rounded hover:bg-green-900 text-white cursor-pointer"
        >
          Cow
        </button>

        <button
          onClick={() => handleFilter("Goat")}
          className="px-4 py-2 bg-green-700 rounded hover:bg-green-900 text-white cursor-pointer"
        >
          Goat
        </button>

      </div>

      {/* SORT DROPDOWN */}
      <div className="flex mb-8">
        <select
          className="border p-2 rounded"
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value="default">Sort by price</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </div>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-6">

        {sortedAnimals.map((animal) => (
          <div
            key={animal.id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={animal.image}
              className="h-52 w-full object-cover"
              alt={animal.name}
            />

            <div className="p-4">

              <h2 className="text-xl font-bold">{animal.name}</h2>

              <p className="text-gray-500">
                {animal.type} - {animal.breed}
              </p>

              <p className="text-green-700 font-bold mt-2">
                ৳ {animal.price}
              </p>

              <p className="text-sm text-gray-500 mt-1">
                Location: {animal.location}
              </p>

              <Link href={`/animals/${animal.id}`}>
                <button className="mt-4 w-full bg-green-700 text-white py-2 rounded hover:bg-green-900">
                  View Details
                </button>
              </Link>

            </div>
          </div>
        ))}

      </div>

    </div>
  );
}