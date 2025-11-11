import React from "react";
import "./App.css"; // Ensure this import exists for component styles
import Terra from "./components/Terra.tsx";

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
    <>
      <div
        className="star-container"
        style={{
          position: "relative",
          minHeight: "100vh",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Terra />
        {stars}
      </div>
    </>
  );
}

export default App;
