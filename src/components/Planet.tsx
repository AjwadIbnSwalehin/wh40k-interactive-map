import React, { useState } from "react";

type PlanetProps = {
  name: string;
  image: string;
  x: number;
  y: number;
};

const Planet = ({ name, image, x, y }: PlanetProps) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <img
        src={image}
        className="planet"
        style={{
          position: "absolute",
          left: `${x}px`,
          top: `${y}px`,
          transform: "translate(-50%, -50%)",
          width: "60px",
          zIndex: 10,
          cursor: "pointer",
        }}
        onClick={() => setShowInfo(!showInfo)}
        alt={name}
      />
      {showInfo && (
        <div
          style={{
            position: "absolute",
            left: `${x + 70}px`,
            top: `${y}px`,
            background: "rgba(0,0,0,0.8)",
            color: "white",
            padding: "8px",
            borderRadius: "4px",
            zIndex: 20,
          }}
        >
          <strong>{name}</strong>
          <p>Details about {name} go here...</p>
        </div>
      )}
    </>
  );
};

export default Planet;
