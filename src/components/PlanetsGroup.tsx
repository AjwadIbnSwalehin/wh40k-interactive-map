function PlanetsGroup() {
  const planets = [
    "Isstvan III",
    "Davin",
    "Olympia",
    "Segmentum Ultima",
    "Tarsus",
    "Arigatta",
    "Prospero",
    "Mars",
    "Isstvan V",
    "Tallarn",
    "Belt of Iron",
    "Pluto",
    "Terra",
  ];

  return (
    <>
      <h1>Planets</h1>
      <ul className="list-group">
        {planets.map((planet) => (
          <li key={planet}>{planet}</li>
        ))}
      </ul>
    </>
  );
}

export default PlanetsGroup;
