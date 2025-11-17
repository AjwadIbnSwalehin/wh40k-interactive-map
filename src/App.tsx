import React from "react";
import "./App.css";
import Planet from "./components/Planet";
import useStars from "./layout/useStars";
import usePlanets from "./layout/usePlanets";

function App() {
  const stars = useStars(150);
  const planets = usePlanets();

  return (
    <div className="relative min-h-screen overflow-hidden">
      {stars}
      {planets.map((planet) => (
        <Planet key={planet.name} {...planet} />
      ))}
    </div>
  );
}

export default App;
