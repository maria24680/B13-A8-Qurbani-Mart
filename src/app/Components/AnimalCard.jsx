// components/AnimalCard.jsx
import Link from "next/link";

export default function AnimalCard({ animal }) {
  return (
    <div className="bg-white rounded shadow overflow-hidden">
      <img src={animal.image} className="h-48 w-full object-cover" />

      <div className="p-4">
        <h2 className="font-bold">{animal.name}</h2>
        <p className="text-gray-500">{animal.breed}</p>
        <p className="text-green-600 font-bold">৳ {animal.price}</p>

        <Link href={`/details/${animal.id}`}>
          <button className="mt-2 w-full bg-green-500 text-white py-2 rounded">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}