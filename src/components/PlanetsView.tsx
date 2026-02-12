import { useState } from "react";
import Planet from "./Planet";
import useStars from "../layout/useStars";
import usePlanets from "../layout/usePlanets";

const PlanetsView = () => {
  const stars = useStars(150);
  const planets = usePlanets();
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null);

  const handlePlanetClick = (name: string) => {
    setSelectedPlanet((prev) => (prev === name ? null : name));
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {stars}
      {planets.map((planet) => (
        <Planet
          key={planet.name}
          {...planet}
          showInfo={selectedPlanet === planet.name}
          onClick={() => handlePlanetClick(planet.name)}
        />
      ))}
    </div>
  );
};

export default PlanetsView;
