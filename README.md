# React 40k Starfield with Planets

This project renders a react application displaying a starfield of the major planets involved in the Horus Heresy, which takes place 10,000 years before the events of Warhammer 40k.

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) and npm (Node Package Manager) installed on your system.

### Installation

**Clone the Repository:**

```
git clone https://github.com/AjwadIbnSwalehin/wh40k-interactive-map.git
cd wh40k-interactive-map
```

Install Dependencies:

Navigate into your project directory and run:

```
npm install
```

Running the Application
To start the development server and view your app in the browser, run:

```
npm start
```

This will start the React development server. Open http://localhost:3000 in your browser to view the result.

### Project Files

- App.tsx: Main application file which generates the stars and planets.
- Planet.tsx: Styles the planets
- usePlanets.ts: Contains list of all planets
- useStars.tsx: Randomises generation of stars
- App.css: Styles the background and containers for the stars and planets.

### Customization

Adjust the sprite image settings (width, height, background-position) in SpriteImage.css.
The starfield is generated in App.tsx through a function that creates star divs with random positioning.
