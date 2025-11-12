import React from "react";
import "./App.css";
import Planet from "./components/Planet";
import terraImg from "./assets/Terra.png";
import marsImg from "./assets/Mars.png";

const planets = [
  { name: "Terra", image: terraImg, x: 500, y: 300 },
  { name: "Mars", image: marsImg, x: 800, y: 150 },
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
