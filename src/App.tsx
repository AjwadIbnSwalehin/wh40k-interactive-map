import React from "react";
import "./App.css";
import Planet from "./components/Planet";
import terraImg from "./assets/Terra.png";
import marsImg from "./assets/Mars.png";
import isstvaniiiImg from "./assets/Isstvan_III.png";
import isstvanvImg from "./assets/isstvan_V.png";

const planets = [
  { name: "Terra", image: terraImg, x: 750, y: 350 },
  { name: "Mars", image: marsImg, x: 750, y: 250 },
  { name: "Isstvan III", image: isstvaniiiImg, x: 1400, y: 100 },
  { name: "Isstvan V", image: isstvanvImg, x: 1300, y: 100 },
];

const generateStars = (numStars: number) => {
  const stars = [];
  for (let i = 0; i < numStars; i++) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    stars.push(
      <div
        key={i}
        className="star"
        style={{ left: `${x}px`, top: `${y}px`, position: "absolute" }}
      />
    );
  }
  return stars;
};

function App() {
  const stars = generateStars(150);

  return (
    <div
      className="star-container"
      style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}
    >
      {stars}
      {planets.map((planet) => (
        <Planet
          key={planet.name}
          name={planet.name}
          image={planet.image}
          x={planet.x}
          y={planet.y}
        />
      ))}
    </div>
  );
}

export default App;
