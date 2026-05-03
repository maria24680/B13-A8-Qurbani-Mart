"use client";

import { useEffect, useState } from "react";
import Hero from "./Components/Hero";
import FeaturedAnimals from "./Components/FeaturedAnimals";
import FeaturesBar from "./Components/FeaturesBar";
import QurbaniInfo from "./Components/QurbaniInfo";

export default function Home() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    fetch("/data/animals.json")
      .then((res) => res.json())
      .then((data) => {
        
        setAnimals(data);
      });
  }, []);

  return (
    <>
      <Hero></Hero>

      <FeaturesBar></FeaturesBar>

      {animals.length === 0 ? (
        <p className="text-center mt-10">Loading...</p>
      ) : (
        <FeaturedAnimals animals={animals}></FeaturedAnimals>
      )}

      <QurbaniInfo></QurbaniInfo>
    </>
  );
}