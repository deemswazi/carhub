import Image from "next/image";
import { fetchCars } from "@utils";
import { HomeProps } from "@types";
import { fuels, yearsOfProduction } from "@constants";
import { CustomFilter, Hero, SearchBar, ShowMore, CarCard } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the Cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />

          <div className="home__filer-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>
      </div>
    </main>
  );
}
