import React, { useState, useCallback } from "react";

type PlanetProps = {
  name: string;
  image: string;
  x: number;
  y: number;
};

const Planet = ({ name, image, x, y }: PlanetProps) => {
  const [showInfo, setShowInfo] = useState(false);

  const infoBoxStyle = useCallback((): React.CSSProperties => {
    const infoBoxWidth = 200; // Approximate width of the info box
    const infoBoxHeight = 80; // Approximate height of the info box
    const offset = 70;
    let left = x + offset;
    let top = y;

    // Check if the info box would overflow the right edge of the window
    if (left + infoBoxWidth > window.innerWidth) {
      left = window.innerWidth - infoBoxWidth;
    }

    // Check if the info box would overflow the bottom edge of the window
    if (top + infoBoxHeight > window.innerHeight) {
      top = window.innerHeight - infoBoxHeight;
    }

    return {
      position: "absolute",
      left: `${left}px`,
      top: `${top}px`,
      background: "rgba(0,0,0,0.8)",
      color: "white",
      padding: "8px",
      borderRadius: "4px",
      zIndex: 20,
    };
  }, [x, y]);

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
        <div style={infoBoxStyle()}>
          <strong>{name}</strong>
          <p>Details about {name} go here...</p>
        </div>
      )}
    </>
  );
};

export default Planet;
