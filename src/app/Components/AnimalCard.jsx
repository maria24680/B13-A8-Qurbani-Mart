import Image from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";

export default function AnimalCard({ animal }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">

      {/* IMAGE */}
      <div className="relative">
        <Image
          src={animal.image}
          alt={animal.name}
          width={500}
          height={300}
          className="h-48 w-full object-cover"
        />

        {/* TYPE BADGE */}
        <div className="absolute top-2 left-2 bg-green-700 text-white text-xs px-2 py-1 rounded">
          {animal.type}
        </div>

        {/* HEART ICON */}
        <div className="absolute top-2 right-2 bg-white p-2 rounded-full shadow">
          <FaRegHeart />
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <h3 className="font-bold text-lg">{animal.name}</h3>
        <p className="text-gray-500 text-sm">{animal.location}</p>

        <p className="text-green-700 font-bold mt-2 text-lg">
          ৳ {animal.price}
        </p>

        <Link
          href={`/details/${animal.id}`}
          className="block mt-3 text-center bg-green-700 text-white py-2 rounded hover:bg-green-900"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}