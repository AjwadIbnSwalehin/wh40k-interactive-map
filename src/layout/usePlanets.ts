import terraImg from "../assets/Terra.png";
import marsImg from "../assets/Mars.png";
import isstvaniiiImg from "../assets/Isstvan_III.png";
import isstvanvImg from "../assets/isstvan_V.png";
import davinImg from "../assets/Davin.png";


const usePlanets = () => {
  const planets = [
  { name: "Terra", image: terraImg, x: 750, y: 350 },
  { name: "Mars", image: marsImg, x: 750, y: 250 },
  { name: "Isstvan III", image: isstvaniiiImg, x: 1400, y: 100 },
  { name: "Isstvan V", image: isstvanvImg, x: 1300, y: 100 },
  { name: "Davin", image: davinImg, x: 1000, y: 350 },
];

  return planets;
};

export default usePlanets;
