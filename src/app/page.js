import Hero from "./Components/Hero";
import FeaturedAnimals from "./Components/FeaturedAnimals";
import FeaturesBar from "./Components/FeaturesBar";

export default async function Home() {
  const res = await fetch("http://localhost:3000/data/animals.json", {
    cache: "no-store",
  });

  const animals = await res.json();

  return (
    <>
      {/* HERO SECTION */}
      <Hero />

      {/* FEATURES BAR (Healthy / Safe / Price / Support) */}
      <FeaturesBar />

      {/* FEATURED ANIMALS */}
      <FeaturedAnimals animals={animals} />
    </>
  );
}