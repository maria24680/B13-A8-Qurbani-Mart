import AnimalCard from "./AnimalCard";

export default function FeaturedAnimals({ animals }) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Featured Animals</h2>

        <button className="border border-green-900 text-green-900 px-4 py-2 rounded hover:bg-green-900 hover:text-white transition">
          View All Animals
        </button>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-4 gap-6">
        {animals.slice(0, 4).map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </section>
  );
}