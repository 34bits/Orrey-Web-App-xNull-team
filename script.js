import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { TextureLoader } from "three";
import GUI from "lil-gui";
import { Raycaster } from "three";
import { gsap } from "gsap/gsap-core";


/**
 *  
 */


/**
 *  Scene Creation
 */

const gui = new GUI();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  25,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
  pixelRatio: Math.min(window.devicePixelRatio, 2),
};

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(sizes.pixelRatio);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.update();
controls.enableDamping = true;

/**
 *  Texture Loader
 */

const textureLoader = new THREE.TextureLoader();

/**
 *  Stars
 */

const starCount = 100000;
const vertices = [];

for (let i = 0; i < starCount; i++) {
  const x = THREE.MathUtils.randFloatSpread(2000);
  const y = THREE.MathUtils.randFloatSpread(2000);
  const z = THREE.MathUtils.randFloatSpread(2000);

  vertices.push(x, y, z);
}

const starGeometry = new THREE.BufferGeometry();
starGeometry.setAttribute(
  "position",
  new THREE.Float32BufferAttribute(vertices, 3)
);
const starMaterial = new THREE.PointsMaterial({ color: 0x888888 });
const star = new THREE.Points(starGeometry, starMaterial);
scene.add(star);

/**
 *  Textures for planets and phas
 */

const earthDayTexture = textureLoader.load("public/earth/day.jpg");
earthDayTexture.colorSpace = THREE.SRGBColorSpace;
earthDayTexture.anisotropy = 8;

const earthNightTexture = textureLoader.load("public/earth/night.jpg");
earthNightTexture.colorSpace = THREE.SRGBColorSpace;
earthNightTexture.anisotropy = 8;

const earthSpecularCloudsTexture = textureLoader.load(
  "public/earth/clouds.jpg"
);
earthSpecularCloudsTexture.colorSpace = THREE.SRGBColorSpace;
earthSpecularCloudsTexture.anisotropy = 8;

const venusTexture = textureLoader.load("/public/venus/venus_surface.jpg");
venusTexture.colorSpace = THREE.SRGBColorSpace;
venusTexture.anisotropy = 8;

const neptuneTexture = textureLoader.load("/public/neptune/neptune.jpg");
neptuneTexture.colorSpace = THREE.SRGBColorSpace;
neptuneTexture.anisotropy = 8;

const uranusTexture = textureLoader.load("/public/uranus/uranus.jpg");
uranusTexture.colorSpace = THREE.SRGBColorSpace;
uranusTexture.anisotropy = 8;

const sunTexture = textureLoader.load("/public/sun/sun.jpg");
sunTexture.colorSpace = THREE.SRGBColorSpace;
sunTexture.anisotropy = 8;

const mercuryTexture = textureLoader.load("/public/mercury/mercury.jpg");
mercuryTexture.colorSpace = THREE.SRGBColorSpace;
mercuryTexture.anisotropy = 8;

const marsTexture = textureLoader.load("/public/mars/mars.jpg");
marsTexture.colorSpace = THREE.SRGBColorSpace;
marsTexture.anisotropy = 8;

const jupiterTexture = textureLoader.load("/public/jupiter/jupiter.jpg");
jupiterTexture.colorSpace = THREE.SRGBColorSpace;
jupiterTexture.anisotropy = 8;

const moonTexture = textureLoader.load("/public/moon/moon.jpg");
moonTexture.colorSpace = THREE.SRGBColorSpace;
moonTexture.anisotropy = 8;

const saturnTexture = textureLoader.load("/public/saturn/saturn.jpg");
saturnTexture.colorSpace = THREE.SRGBColorSpace;
saturnTexture.anisotropy = 8;

/**
 *  End of Textures
 */

/**
 *  Planet Creation
 */

// Earth

const earthGeometry = new THREE.SphereGeometry(1, 64, 32);
const earthMaterial = new THREE.MeshBasicMaterial({ map: earthDayTexture });
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earth);

// Sun

const sunGeometry = new THREE.SphereGeometry(2, 64, 32);
const sunMaterial = new THREE.MeshBasicMaterial({ map: sunTexture });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);

// Mars

const marsGeometry = new THREE.SphereGeometry(1.5, 64, 32);
const marsMaterial = new THREE.MeshBasicMaterial({
  map: marsTexture,
});
const mars = new THREE.Mesh(marsGeometry, marsMaterial);

scene.add(mars);

mars.position.z = 4;

// Venus

const venusGeometry = new THREE.SphereGeometry(1, 64, 32);
const venusMaterial = new THREE.MeshBasicMaterial({
  map: venusTexture,
});
const venus = new THREE.Mesh(venusGeometry, venusMaterial);

scene.add(venus);

venus.position.z = 8;

// Mercury

const mercuryGeometry = new THREE.SphereGeometry(1, 64, 32);
const mercuryMaterial = new THREE.MeshBasicMaterial({
  map: mercuryTexture,
});
const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);

scene.add(mercury);

mercury.position.z = 12;

// Jupiter

const jupiterGeometry = new THREE.SphereGeometry(1, 64, 32);
const jupiterMaterial = new THREE.MeshBasicMaterial({ map: jupiterTexture });
const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);

scene.add(jupiter);

jupiter.position.z = 16;

// Moon

const moonGeometry = new THREE.SphereGeometry(1, 64, 32);
const moonMaterial = new THREE.MeshBasicMaterial({ map: moonTexture });
const moon = new THREE.Mesh(moonGeometry, moonMaterial);

moon.position.z = 20;

// Uranus

const uranusGeometry = new THREE.SphereGeometry(1, 64, 32);
const uranusMaterial = new THREE.MeshBasicMaterial({ map: uranusTexture });
const uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);

scene.add(uranus);

// Neptune

const neptuneGeometry = new THREE.SphereGeometry(1, 64, 32);
const neptuneMaterial = new THREE.MeshBasicMaterial({ map: neptuneTexture });
const neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);

scene.add(neptune);

// saturn

const saturnGeometry = new THREE.SphereGeometry(1, 64, 32);
const saturnMaterial = new THREE.MeshBasicMaterial({ map: saturnTexture });
const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);

scene.add(saturn);

/**
 *  Orbits
 */

// Mercury

const mercuryOrbitRadius = 8;
const mercuryOrbitSpeed = 0.47;

const mercuryOrbit = () => {
  if (params.pauseOrbits) return;
  const elapsedTime = clock.getElapsedTime();
  const marsSpherical = new THREE.Spherical(
    mercuryOrbitRadius,
    Math.PI * 0.5,
    elapsedTime * mercuryOrbitSpeed
  );
  const mercuryDirection = new THREE.Vector3().setFromSpherical(marsSpherical);
  mercury.position.copy(mercuryDirection);
};

// Venus

const venusOrbitRadius = 12;
const venusOrbitSpeed = 0.35;

const venusOrbit = () => {
  if (params.pauseOrbits) return;
  const elapsedTime = clock.getElapsedTime();
  const venusSpherical = new THREE.Spherical(
    venusOrbitRadius,
    Math.PI * 0.5,
    elapsedTime * venusOrbitSpeed
  );
  const venusDirection = new THREE.Vector3().setFromSpherical(venusSpherical);
  venus.position.copy(venusDirection);
};

// Earth

const earthOrbitRadius = 16;
const earthOrbitSpeed = 0.30;

const earthOrbit = () => {
  if (params.pauseOrbits) return;
  const elapsedTime = clock.getElapsedTime();
  const earthSpherical = new THREE.Spherical(
    earthOrbitRadius,
    Math.PI * 0.5,
    elapsedTime * earthOrbitSpeed
  );
  const earthDirection = new THREE.Vector3().setFromSpherical(earthSpherical);
  earth.position.copy(earthDirection);
};

// Mars

const marsOrbitRadius = 20;
const marsOrbitSpeed = 0.24;

const marsOrbit = () => {
  if (params.pauseOrbits) return;
  const elapsedTime = clock.getElapsedTime();
  const marsSpherical = new THREE.Spherical(
    marsOrbitRadius,
    Math.PI * 0.5,
    elapsedTime * marsOrbitSpeed
  );
  const marsDirection = new THREE.Vector3().setFromSpherical(marsSpherical);
  mars.position.copy(marsDirection);
};

// Jupiter

const jupiterOrbitRadius = 24;
const jupiterOrbitSpeed = 0.13;

const jupiterOrbit = () => {
  if (params.pauseOrbits) return;
  const elapsedTime = clock.getElapsedTime();
  const jupiterSpherical = new THREE.Spherical(
    jupiterOrbitRadius,
    Math.PI * 0.5,
    elapsedTime * jupiterOrbitSpeed
  );
  const jupiterDirection = new THREE.Vector3().setFromSpherical(
    jupiterSpherical
  );
  jupiter.position.copy(jupiterDirection);
};

// Saturn

const saturnOrbitRadius = 28;
const saturnOrbitSpeed = 0.10;

const saturnOrbit = () => {
  if (params.pauseOrbits) return;
  const elapsedTime = clock.getElapsedTime();
  const saturnSpherical = new THREE.Spherical(
    saturnOrbitRadius,
    Math.PI * 0.5,
    elapsedTime * saturnOrbitSpeed
  );
  const saturnDirection = new THREE.Vector3().setFromSpherical(saturnSpherical);
  saturn.position.copy(saturnDirection);
};

// Uranus

const uranusOrbitRadius = 32;
const uranusOrbitSpeed = 0.03;

const uranusOrbit = () => {
  if (params.pauseOrbits) return;
  const elapsedTime = clock.getElapsedTime();
  const uranusSpherical = new THREE.Spherical(
    uranusOrbitRadius,
    Math.PI * 0.5,
    elapsedTime * uranusOrbitSpeed
  );
  const uranusDirection = new THREE.Vector3().setFromSpherical(uranusSpherical);
  uranus.position.copy(uranusDirection);
};

// Neptune

const neptuneOrbitRadius = 39;
const neptuneOrbitSpeed = 0.02;

const neptuneOrbit = () => {
  if (params.pauseOrbits) return;
  const elapsedTime = clock.getElapsedTime();
  const neptuneSpherical = new THREE.Spherical(
    neptuneOrbitRadius,
    Math.PI * 0.5,
    elapsedTime * neptuneOrbitSpeed
  );
  const uranusDirection = new THREE.Vector3().setFromSpherical(
    neptuneSpherical
  );
  neptune.position.copy(uranusDirection);
};

/**
 * Orbit Lines
 */
const createOrbitLine = (radius) => {
  const curve = new THREE.EllipseCurve(
    0,
    0,
    radius,
    radius,
    0,
    2 * Math.PI,
    false,
    0
  );
  const points = curve.getPoints(1000);
  const orbitGeometry = new THREE.BufferGeometry().setFromPoints(points);
  const orbitMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
  const orbitLine = new THREE.Line(orbitGeometry, orbitMaterial);
  orbitLine.rotation.x = Math.PI / 2;
  return orbitLine;
};

const planetOrbitLines = [];

const mercuryOrbitLine = createOrbitLine(mercuryOrbitRadius);
mercuryOrbitLine.material.color.set("grey");
planetOrbitLines.push(mercuryOrbitLine);
scene.add(mercuryOrbitLine);

const venusOrbitLine = createOrbitLine(venusOrbitRadius);
venusOrbitLine.material.color.set("orange");
planetOrbitLines.push(venusOrbitLine);
scene.add(venusOrbitLine);

const earthOrbitLine = createOrbitLine(earthOrbitRadius);
earthOrbitLine.material.color.set("white");
planetOrbitLines.push(earthOrbitLine);
scene.add(earthOrbitLine);

const marsOrbitLine = createOrbitLine(marsOrbitRadius);
marsOrbitLine.material.color.set("red");
planetOrbitLines.push(marsOrbitLine);
scene.add(marsOrbitLine);

const jupiterOrbitLine = createOrbitLine(jupiterOrbitRadius);
jupiterOrbitLine.material.color.set("brown");
planetOrbitLines.push(jupiterOrbitLine);
scene.add(jupiterOrbitLine);

const uranusOrbitLine = createOrbitLine(uranusOrbitRadius);
planetOrbitLines.push(uranusOrbitLine);
scene.add(uranusOrbitLine);

const saturnOrbitLine = createOrbitLine(saturnOrbitRadius);
planetOrbitLines.push(saturnOrbitLine);
scene.add(saturnOrbitLine);

const neptuneOrbitLine = createOrbitLine(neptuneOrbitRadius);
planetOrbitLines.push(neptuneOrbitLine);
neptuneOrbitLine.material.color.set("cyan");
scene.add(neptuneOrbitLine);

/**
 *  Changing the camera position
 */
camera.position.set(60, 20, 60);
scene.add(camera);

/**
 *  Resizing Window
 */

window.addEventListener("resize", () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  sizes.pixelRatio = Math.min(window.devicePixelRatio, 2);

  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(sizes.pixelRatio);
});

/**
 *  End of resizing window
 */

/**
 *  Labels
 */

/**
 * Labels for planets
 */

const mercuryLabel = document.createElement("div");
mercuryLabel.className = "planet-label";
mercuryLabel.innerHTML = "Mercury";
document.body.appendChild(mercuryLabel);

const marsLabel = document.createElement("div");
marsLabel.className = "planet-label";
marsLabel.innerHTML = "Mars";
document.body.appendChild(marsLabel);

const earthLabel = document.createElement("div");
earthLabel.className = "planet-label";
earthLabel.innerHTML = "Earth";
document.body.appendChild(earthLabel);

const jupiterLabel = document.createElement("div");
jupiterLabel.className = "planet-label";
jupiterLabel.innerHTML = "Jupiter";
document.body.appendChild(jupiterLabel);

const neptuneLabel = document.createElement("div");
neptuneLabel.className = "planet-label";
neptuneLabel.innerHTML = "Neptune";
document.body.appendChild(neptuneLabel);

const saturnLabel = document.createElement("div");
saturnLabel.className = "planet-label";
saturnLabel.innerHTML = "Saturn";
document.body.appendChild(saturnLabel);

const uranusLabel = document.createElement("div");
uranusLabel.className = "planet-label";
uranusLabel.innerHTML = "Uranus";
document.body.appendChild(uranusLabel);

const venusLabel = document.createElement("div");
venusLabel.className = "planet-label";
venusLabel.innerHTML = "Venus";
document.body.appendChild(venusLabel);

const updateLabels = () => {
  const neptunePosition = neptune.position.clone();
  neptunePosition.project(camera);
  const xNeptune = (neptunePosition.x * 0.5 + 0.5) * sizes.width;
  const yNeptune = -(neptunePosition.y * 0.5 + 0.5) * sizes.height;
  neptuneLabel.style.transform = `translate(${xNeptune}px, ${yNeptune}px)`;

  const jupiterPosition = jupiter.position.clone();
  jupiterPosition.project(camera);
  const xJupiter = (jupiterPosition.x * 0.5 + 0.5) * sizes.width;
  const yJupiter = -(jupiterPosition.y * 0.5 + 0.5) * sizes.height;
  jupiterLabel.style.transform = `translate(${xJupiter}px, ${yJupiter}px)`;

  const saturnPosition = saturn.position.clone();
  saturnPosition.project(camera);
  const xSaturn = (saturnPosition.x * 0.5 + 0.5) * sizes.width;
  const ySaturn = -(saturnPosition.y * 0.5 + 0.5) * sizes.height;
  saturnLabel.style.transform = `translate(${xSaturn}px, ${ySaturn}px)`;

  const earthPosition = earth.position.clone();
  earthPosition.project(camera);
  const xEarth = (earthPosition.x * 0.5 + 0.5) * sizes.width;
  const yEarth = -(earthPosition.y * 0.5 + 0.5) * sizes.height;
  earthLabel.style.transform = `translate(${xEarth}px, ${yEarth}px)`;

  const marsPosition = mars.position.clone();
  marsPosition.project(camera);
  const xMars = (marsPosition.x * 0.5 + 0.5) * sizes.width;
  const yMars = -(marsPosition.y * 0.5 + 0.5) * sizes.height;
  marsLabel.style.transform = `translate(${xMars}px, ${yMars}px)`;

  const mercuryPosition = mercury.position.clone();
  mercuryPosition.project(camera);
  const xMercury = (mercuryPosition.x * 0.5 + 0.5) * sizes.width;
  const yMercury = -(mercuryPosition.y * 0.5 + 0.5) * sizes.height;
  mercuryLabel.style.transform = `translate(${xMercury}px, ${yMercury}px)`;

  const uranusPosition = uranus.position.clone();
  uranusPosition.project(camera);
  const xUranus = (uranusPosition.x * 0.5 + 0.5) * sizes.width;
  const yUranus = -(uranusPosition.y * 0.5 + 0.5) * sizes.height;
  uranusLabel.style.transform = `translate(${xUranus}px, ${yUranus}px)`;

  const venusPosition = venus.position.clone();
  venusPosition.project(camera);
  const xVenus = (venusPosition.x * 0.5 + 0.5) * sizes.width;
  const yVenus = -(venusPosition.y * 0.5 + 0.5) * sizes.height;
  venusLabel.style.transform = `translate(${xVenus}px, ${yVenus}px)`;
};

/**
 *  Camera Control and Zoom Functionality
 */
/**
 * Raycaster and Pointer Logic
 */
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

const planetData = {
  earth: {
    name: "Earth",
    mass: "5.972 × 10^24 kg",
    diameter: "12,742 km",
    gravity: "9.807 m/s²",
    orbitPeriod: "365.25 days",
    atmosphere: "Nitrogen, Oxygen, Argon, Carbon Dioxide",
    image: "public/earth/data/earth.jpg",
    description:
      "Earth is the third planet from the Sun and the only astronomical object known to harbor life. Earth is the only planet known to have liquid water on its surface and life. It is slightly larger than Venus and is the largest of the four terrestrial planets, which are made of rock and metal.",
    fact: "Earth is the only planet known to have liquid water on its surface and life.",
  },
  mars: {
    name: "Mars",
    mass: "6.39 × 10^23 kg",
    diameter: "6,779 km",
    gravity: "3.721 m/s²",
    orbitPeriod: "687 days",
    atmosphere: "Carbon Dioxide, Nitrogen, Argon",
    image: "public/mars/data/mars.jpeg",
    description:
      "Mars is the fourth planet from the Sun and is often referred to as the 'Red Planet' due to its reddish appearance.",
    fact: "Mars has the largest volcano in the solar system, Olympus Mons.",
  },
  jupiter: {
    name: "Jupiter",
    mass: "1.898 × 10^27 kg",
    diameter: "139,820 km",
    gravity: "24.79 m/s²",
    orbitPeriod: "11.86 years",
    atmosphere: "Hydrogen, Helium, Methane, Ammonia, Water Vapor",
    image: "public/jupiter/data/jupiter.jpg",
    description:
      "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It has a prominent Great Red Spot, which is a giant storm.",
    fact: "Jupiter has 79 known moons, including the four largest known as the Galilean moons.",
  },
  neptune: {
    name: "Neptune",
    mass: "1.024 × 10^26 kg",
    diameter: "49,244 km",
    gravity: "11.15 m/s²",
    orbitPeriod: "165 years",
    atmosphere: "Hydrogen, Helium, Methane",
    image: "public/neptune/neptune.jpg",
    description:
      "Neptune is the eighth and farthest planet from the Sun in the Solar System. It is known for its deep blue color and strong winds.",
    fact: "Neptune has the fastest winds in the solar system, reaching up to 2,100 km/h.",
  },
  venus: {
    name: "Venus",
    mass: "4.867 × 10^24 kg",
    diameter: "12,104 km",
    gravity: "8.87 m/s²",
    orbitPeriod: "225 days",
    atmosphere: "Carbon Dioxide, Nitrogen",
    image: "public/venus/data/venus.jpg",
    description:
      "Venus is the second planet from the Sun and is often referred to as Earth's 'sister planet' due to their similar size and composition. However, Venus has a thick atmosphere that traps heat, making it the hottest planet in our solar system.",
    fact: "Venus rotates very slowly on its axis, taking about 243 Earth days to complete one rotation.",
  },
  mercury: {
    name: "Mercury",
    mass: "3.285 × 10^23 kg",
    diameter: "4,880 km",
    gravity: "3.7 m/s²",
    orbitPeriod: "88 days",
    atmosphere: "Oxygen, Sodium, Hydrogen, Helium, Potassium",
    image: "public/mercury/data/mercury.jpg",
    description:
      "Mercury is the closest planet to the Sun and has the shortest orbit period of all the planets. It has a thin atmosphere and extreme temperature fluctuations.",
    fact: "Mercury has no moons and no rings.",
  },
  saturn: {
    name: "Saturn",
    mass: "5.683 × 10^26 kg",
    diameter: "116,460 km",
    gravity: "10.44 m/s²",
    orbitPeriod: "29.46 years",
    atmosphere: "Hydrogen, Helium, Methane, Ammonia",
    image: "public/saturn/data/saturn.jpg",
    description:
      "Saturn is the sixth planet from the Sun and is known for its stunning rings, which are made of ice and rock particles. It is the second-largest planet in the solar system.",
    fact: "Saturn could float in water because it is mostly made of gas and is less dense than water.",
  },
  uranus: {
    name: "Uranus",
    mass: "8.681 × 10^25 kg",
    diameter: "50,724 km",
    gravity: "8.69 m/s²",
    orbitPeriod: "84 years",
    atmosphere: "Hydrogen, Helium, Methane",
    image: "uranus/data/uranus.jpg",
    description: "Uranus is the seventh planet from the Sun and has the third-largest diameter in the solar system. It is a cold, windy world with a unique sideways rotation, making it one of the most unusual planets in the solar system.",
    fact: "Uranus has 27 known moons, and its axis of rotation is tilted at an angle of 98 degrees.",
  },
};


function onPointerMove(event) {
  pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
}
window.addEventListener("pointermove", onPointerMove);

const planets = [
  mercury,
  venus,
  earth,
  mars,
  jupiter,
  saturn,
  uranus,
  neptune,
];

// Index to track the currently displayed planet
let currentPlanetIndex = -1; // Start with no planet selected

function onClick(event) {
  raycaster.setFromCamera(pointer, camera);

  const intersects = raycaster.intersectObjects(planets);

  if (intersects.length > 0) {
    const planet = intersects[0].object; // The clicked planet
    currentPlanetIndex = planets.indexOf(planet); // Update the current planet index

    displayPlanetInfo(planet);
    speakPlanetInfo();
  }
}

function displayPlanetInfo(planet) {
  const planetName =

       planet === mercury
      ? "mercury"
      : planet === venus
      ? "venus"
      : planet === earth
      ? "earth"
      : planet === mars
      ? "mars"
      : planet === jupiter
      ? "jupiter"
      : planet === saturn
      ? "saturn"
      : planet === uranus
      ? "uranus"
      : planet === neptune
      ? "neptune"
      : null;

  if (planetName) {
    const planetInfo = planetData[planetName]; // Fetch the planet data
    if (planetInfo) {
      // Update the info div with planet data
      const infoDiv = document.getElementById("planet-info");
      infoDiv.style.display = "block";
      infoDiv.innerHTML = `
        <p class="sr">Info about ${planetInfo.name}</p>
        <h2 style="margin: 1rem 0" >${planetInfo.name}</h2>
        <p><strong>Mass:</strong> ${planetInfo.mass}</p>
        <p><strong>Diameter:</strong> ${planetInfo.diameter}</p>
        <p><strong>Gravity:</strong> ${planetInfo.gravity}</p>
        <p><strong>Orbit Period:</strong> ${planetInfo.orbitPeriod}</p>
        <p><strong>Atmosphere:</strong> ${planetInfo.atmosphere}</p>
        <h2 style="margin: 1rem 0">Description</h2>
        <p>${planetInfo.description}</p>
        <img src="${planetInfo.image}" style="width: 100px; height: 100px;" alt="A detailed image of ${planetInfo.name}.">
        <h2 style="margin: 1rem 0">Fact</h2>
        <p>${planetInfo.fact}</p>
        
      `;
    }
  }
}

function speakPlanetInfo() {
  const infoDiv = document.getElementById("planet-info");

  window.speechSynthesis.cancel();

  const utternace = new SpeechSynthesisUtterance(infoDiv.innerText);
  utternace.pitch = 1;
  utternace.rate = 1;
  utternace.volume = 1;

  window.speechSynthesis.speak(utternace);
}

document.getElementById('speakButton').addEventListener('click', function(){
  speakPlanetInfo();
})



function onKeyDown(event) {
  // Check if a number key is pressed (1 to 9)
  const key = event.key;
  const index = parseInt(key) - 1; // Convert key to index (0 for 1, 1 for 2, etc.)

  // Ensure index is valid (0-8 for the 9 planets)
  if (index >= 0 && index < planets.length) {
    currentPlanetIndex = index; // Update the current planet index
    displayPlanetInfo(planets[currentPlanetIndex]); // Display the info of the selected planet
  }
}

window.addEventListener("click", onClick);
window.addEventListener("keydown", onKeyDown);

/**
 *  GUI PARAMETERS
 */
const params = {
  showLabels: true,
  showOrbits: true,
  pauseOrbits: false,
};

gui
  .add(params, "showLabels")
  .name("Show Labels")
  .onChange((value) => {
    document.querySelectorAll(".planet-label").forEach((label) => {
      label.style.display = value ? "block" : "none";
    });
  });

gui
  .add(params, "showOrbits")
  .name("Show Orbits")
  .onChange((value) => {
    planetOrbitLines.forEach((orbitLine) => {
      orbitLine.visible = value;
    });
  });

gui
  .add(params, "pauseOrbits")
  .name("Pause Orbits")
  .onChange((value) => {
    params.pauseOrbits = value;
  });

/**
 * Page Translation
 */

window.addEventListener("DOMContentLoaded", function () {
  const languageSelect = document.getElementById("language");
  const currentPage = window.location.pathname;

  if (currentPage.includes("app-gr.html")) {
    languageSelect.value = "greek";
  } else {
    languageSelect.value = "english"; 
  }

  // Redirect on language change
  languageSelect.addEventListener("change", function () {
    const selectedLanguage = languageSelect.value;

    if (selectedLanguage === "english") {
      window.location.href = "app.html";
    } else if (selectedLanguage === "greek") {
      window.location.href = "app-gr.html";
    }
  });
});

window.addEventListener("DOMContentLoaded", function () {
  const languageIsGreek = document.documentElement.lang === "el";

  const translations = {
    mercury: "Ερμής",
    venus: "Αφροδίτη",
    earth: "Γή",
    mars: "Άρης",
    jupiter: "Δίας",
    saturn: "Κρόνος",
    uranus: "Ουρανός",
    neptune: "Ποσειδώνας",
  };

  

  if (languageIsGreek) {
    mercuryLabel.innerHTML = translations.mercury;
    venusLabel.innerHTML = translations.venus;
    marsLabel.innerHTML = translations.mars;
    earthLabel.innerHTML = translations.earth;
    jupiterLabel.innerHTML = translations.jupiter;
    saturnLabel.innerHTML = translations.saturn;
    uranusLabel.innerHTML = translations.uranus;
    neptuneLabel.innerHTML = translations.neptune;
  }
});

/**
 *  Animate Scene
 */

const clock = new THREE.Clock();

function animate() {
  sun.rotation.y += 0.001;

  controls.update();

  renderer.render(scene, camera);

  earthOrbit();
  mercuryOrbit();
  venusOrbit();
  marsOrbit();
  jupiterOrbit();
  uranusOrbit();
  neptuneOrbit();
  saturnOrbit();

  updateLabels();
}
