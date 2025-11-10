import PlanetsGroup from "./components/PlanetsGroup";

function TemplateMain() {
  return (
    <div className="w-full flex">
      <div className="bg-blue-500">template</div>
    </div>
  );
}

function App() {
  let planets = [
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
      <div>
        <PlanetsGroup planets={planets} heading="Planets"></PlanetsGroup>
      </div>
    </>
  );
}

export default App;
