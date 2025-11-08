import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface Props {
  planets: string[];
  heading: string;
}

function PlanetsGroup({ planets, heading }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {planets.length === 0 && <p>No planets found.</p>}
      <ul className="list-group">
        {planets.map((planet, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={planet}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {planet}
          </li>
        ))}
      </ul>
    </>
  );
}

export default PlanetsGroup;
