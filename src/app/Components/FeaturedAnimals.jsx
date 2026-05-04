import Link from "next/link";
import AnimalCard from "./AnimalCard";

export default function FeaturedAnimals({ animals }) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-6">
        <h2 className="text-2xl font-bold">Featured Animals</h2>

        <Link  href="/animals" className="border border-green-900 text-green-900 px-4 py-2 rounded hover:bg-green-900 hover:text-white transition">
          View All Animals
        </Link>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {animals?.slice(0, 4).map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </section>
  );
}