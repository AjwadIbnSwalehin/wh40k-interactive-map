import React, { useCallback } from "react";

type PlanetProps = {
  name: string;
  image: string;
  x: number;
  y: number;
  showInfo: boolean;
  onClick: () => void;
  description: string;
};

const Planet = ({
  name,
  image,
  x,
  y,
  showInfo,
  onClick,
  description,
}: PlanetProps) => {
  const infoBoxStyle = useCallback((): React.CSSProperties => {
    const infoBoxWidth = 200;
    const infoBoxHeight = 80;
    const offset = 70;
    let left = x + offset;
    let top = y;

    if (left + infoBoxWidth > window.innerWidth) {
      left = window.innerWidth - infoBoxWidth;
    }
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
        onClick={onClick}
        alt={name}
      />
      {showInfo && (
        <div style={infoBoxStyle()}>
          <strong>{name}</strong>
          <p>{description}</p>
        </div>
      )}
    </>
  );
};

export default Planet;
