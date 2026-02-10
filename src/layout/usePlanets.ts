import terraImg from "../assets/Terra.png";
import marsImg from "../assets/Mars.png";
import isstvaniiiImg from "../assets/Isstvan_III.png";
import isstvanvImg from "../assets/isstvan_V.png";
import davinImg from "../assets/Davin.png";
import olympiaImg from "../assets/Olympia.png";
import prosperoImg from "../assets/Prospero.png";


const usePlanets = () => {
  const planets = [
  { name: "Terra", image: terraImg, x: 750, y: 350 },
  { name: "Mars", image: marsImg, x: 750, y: 250 },
  { name: "Isstvan III", image: isstvaniiiImg, x: 1400, y: 100 },
  { name: "Isstvan V", image: isstvanvImg, x: 1300, y: 100 },
  { name: "Davin", image: davinImg, x: 900, y: 350 },
  { name: "Olympia", image: olympiaImg, x: 1050, y: 350 },
  { name: "Prospero", image: prosperoImg, x: 400, y: 200 },
];

  return planets;
};

export default usePlanets;
