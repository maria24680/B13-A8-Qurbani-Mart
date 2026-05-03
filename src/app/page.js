import Hero from "./Components/Hero";
import FeaturedAnimals from "./Components/FeaturedAnimals";
import FeaturesBar from "./Components/FeaturesBar";
import QurbaniInfo from "./Components/QurbaniInfo";

export default async function Home() {
  fetch("http://localhost:3000/data/animals.json", {
  cache: "no-store",

  });

  

  return (
    <>
      {/* HERO SECTION */}
      <Hero></Hero>

      {/* FEATURES BAR (Healthy / Safe / Price / Support) */}
      <FeaturesBar></FeaturesBar>

      {/* FEATURED ANIMALS */}
      <FeaturedAnimals></FeaturedAnimals>
      <QurbaniInfo></QurbaniInfo>
    </>
  );
}