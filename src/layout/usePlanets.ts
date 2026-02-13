import terraImg from "../assets/Terra.png";
import marsImg from "../assets/Mars.png";
import isstvaniiiImg from "../assets/Isstvan_III.png";
import isstvanvImg from "../assets/isstvan_V.png";
import davinImg from "../assets/Davin.png";
import olympiaImg from "../assets/Olympia.png";
import prosperoImg from "../assets/Prospero.png";


const usePlanets = () => {
  const planets = [
  { name: "Terra", image: terraImg, x: 750, y: 350, description: "The final battle of the Heresy, where the Emperor made his stand against Horus Lupercal. He teleported to the Vengeful Spirit, the traitors' flagship, where Sanguinius had already been felled, and erased him." },
  { name: "Mars", image: marsImg, x: 750, y: 250, description: "The Schism of Mars between 005-006.M31, during the early days of the Heresy. This led to the creation of the Dark Mechanicum." },
  { name: "Isstvan III", image: isstvaniiiImg, x: 1400, y: 100, description: "Site of the Isstvan III atrocity, where Horus Lupercal killed his own Astartes troops who he knew would be loyal to the Imperium. The virus bombs used left the planet desolate and it is now classified as a Dead World." },
  { name: "Isstvan V", image: isstvanvImg, x: 1300, y: 100, description: "Under the authority of the Emperor, Imperial Fists Primarch Rogal Dorn ordered seven loyalist legions of the Space Marines to attack Horus on Isstvan V. However, four of those legions, the Alpha Legion, Night Lords, Word Bearers and the Iron Warriors had already betrayed the Imperium, and when the Loyalists of the first wave retreated back to what they believed were friendly lines, the hidden Traitors attacked, massacring the Loyalists." },
  { name: "Davin", image: davinImg, x: 900, y: 350, description: "The planet on which Horus made his traitorous pact with the Ruinous Powers of Chaos." },
  { name: "Olympia", image: olympiaImg, x: 1050, y: 350, description: "Due to Imperial changes, the people of the homeworld of the Iron Warriors rebelled. In humuliation, Perturabo, the Primarch of the Astartes Chapter killed 5 million Olympians as they refused to back down in their rebellion. Believing that his father would never forgive him for his act, he joined Horus' treachery against the Imperium." },
  { name: "Prospero", image: prosperoImg, x: 400, y: 200, description: "The Emperor had ordered Magnus The Red, the Primarch of the Thousand Sons to be captured after his violation of the edicts against psychic powers and sorcery made at the Council of Nikea. Horus Lupercal intercepted the message meant for the Space Wolves' Primarch, Leman Russ, and convinced him that he was supposed to destroy the planet instead. This led to the Burning of Prospero." },
];

  return planets;
};

export default usePlanets;
