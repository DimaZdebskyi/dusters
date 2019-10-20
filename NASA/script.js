let planetsInfo = [
  {
    img: 'img/earth.png',
    name: 'Earth',
    radius: 6371,
    surface: '510072000',
    mass: '5.97237×10^24',
    gravity: '9.80665',
    description: `Earth—our home planet—is the only place we know of so far that’s inhabited by living things. It's also the only planet in our solar system with liquid water on the surface.`
  },
  {
    img: 'img/jupiter.png',
    name: 'Jupiter',
    radius: 69911,
    surface: '6.1419×10^10',
    mass: '1.8982×10^27',
    gravity: '24.79',
    description: `Jupiter is more than twice as massive than the other planets of our solar system combined. The giant planet's Great Red spot is a centuries-old storm bigger than Earth.`
  },
  {
    img: 'img/mars.png',
    name: 'Mars',
    radius: 3389.5,
    surface: '144798500',
    mass: '6.4171×10^23',
    gravity: '3.72076',
    description: `Mars is a dusty, cold, desert world with a very thin atmosphere. There is strong evidence Mars was—billions of years ago—wetter and warmer, with a thicker atmosphere.`
  },
  {
    img: 'img/mercury.png',
    name: 'Mercury',
    radius: 2439.7,
    surface: '7.48×10^7',
    mass: '3.3011×10^23',
    gravity: '3.7',
    description: `Mercury—the smallest planet in our solar system and closest to the Sun—is only slightly larger than Earth's Moon. Mercury is the fastest planet, zipping around the Sun every 88 Earth days.`
  },
  {
    img: 'img/saturn.png',
    name: 'Saturn',
    radius: 58232,
    surface: '4.27×10^10',
    mass: '5.6834×10^26',
    gravity: '10.44',
    description: `Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system. The other giant planets have rings, but none are as spectacular as Saturn's.`
  },
  {
    img: 'img/uranus.png',
    name: 'Uranus',
    radius: 25362,
    surface: '8.1156×10^9',
    mass: '(8.6810±0.0013)×10^25',
    gravity: '8.69',
    description: `Uranus—seventh planet from the Sun—rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side.`
  },
  {
    img: 'img/venus.png',
    name: 'Venus',
    radius: 6051.8 ,
    surface: '4.6023×10^8',
    mass: '4.8675×10^24',
    gravity: '8.87',
    description: `Venus spins slowly in the opposite direction from most planets. A thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system.`
  },
  {
    img: 'img/neptune.png',
    name: 'Neptune',
    radius: 24622,
    surface: '7.6183×10^9',
    mass: '1.02413×10^26',
    gravity: '11.15',
    description: `Neptune—the eighth and most distant major planet orbiting our Sun—is dark, cold and whipped by supersonic winds. It was the first planet located through mathematical calculations.`
  }
];
let starsInfo = [
  {
    img: 'img/sun.jpg',
    name: 'Sun',
    radius: 695700,
    temperature: '10000',
    mass: '1.9891e30',
    description: `The sun is a star, a hot ball of glowing gases at the heart of our solar system.
    Its influence extends far beyond the orbits of distant Neptune and Pluto.
    If the sun were as tall as a typical front door, the Earth would be the size of a U.S. nickel.`
  },
  {
    img: 'img/ProcsimaCentauri.jpg',
    name: 'Procsima CentauriSun',
    radius: 0.1542,
    temperature: '3042',
    mass: '2.486375e29',
    description: `The closest star, Proxima Centauri, is the nearest member of the Alpha Centauri star system.
    Light takes only 4.24 years to reach us from Proxima Centauri.
    This small red star, captured in the center of the featured image by the Hubble Space Telescope,
    is so faint that it was only discovered in 1915.`
  },
  {
    img: 'img/AlphaCentauriA.jpg',
    name: 'Alpha Centauri A',
    radius: 1.2234,
    temperature: '5790',
    mass: '2.188e30',
    description: `Alpha Centauri A, also known as Rigil Kentaurus, is the principal member, or primary, of the binary system.
    It is a solar-like main-sequence star with a similar yellowish colour, whose stellar classification is spectral type G2 V; it is slightly larger and more luminous than the Sun.
    Alpha Centauri A is about 10 percent more massive than the Sun, with a radius about 22 percent larger.`
  },
  {
    img: 'img/AlphaCentauriB.jpg',
    name: 'Alpha Centauri B',
    radius: 0.8632,
    temperature: '5260',
    mass: '1.804e30',
    description: `Alpha Centauri B, also known as Toliman, is the secondary star of the binary system.
    It is a main-sequence star of spectral type K1 V, making it more an orange colour than Alpha Centauri A; it has around 90 percent the mass of the Sun and a 14 percent smaller diameter.
    Although it has a lower luminosity than A, Alpha Centauri B emits more energy in the X-ray band.
    Its light curve varies on a short time scale, and there has been at least one observed flare.`
  },
];
let planetSave = '';
let starSave = '';
const G = Math.pow(6.67, -11);
function planetGrawityExit() {
  document.getElementById('setR').style.display = 'none';
  let main = document.getElementById('result');
  main.style.display = 'flex';
  main.innerHTML += `
  <div class="resultDescription">
    <h3>Your planet is too far from the star</h3>
    <p>
    Conversely, a shift in the orbit moving Earth farther from the sun would cool and potentially freeze the planet. Oceans would be covered in ice, causing them to release less carbon dioxide and vapor. It would also make years longer; the farther the planet is from the sun, the longer it takes to complete its annual orbit
    hat's not to mention the effect that a shift in Earth's orbit would have on the rest of the solar system. Even a minor change in its path around the sun could cause planets to collide. It also could throw off Earth's delicate positioning with Jupiter. The largest of the eight planets acts as a shield of sorts, deflecting harmful gases and asteroids that might otherwise be bound for Earth
    That's not to mention</p>
    <img src="img/frozen.gif" alt="err">
    </div>
`;
}
function planetCrash() {
  document.getElementById('setR').style.display = 'none';
  let main = document.getElementById('result');
  main.style.display = 'flex';
  main.innerHTML += `
  <div class="resultDescription">
    <h3>Your planet is too close to the star</h3>
    <p>
    Without any orbit, <span class="mark">planet would likely go crashing directly into the star.</span>
    A less dramatic shift in Planets's orbit would primarily affect the planet's temperature. The closer you are to the star, the hotter the climate. Even a small move closer to the star could have a <span class="mark">huge impact.</span> That's because warming would cause glaciers to melt, raising sea levels and flooding most of the planet. Without land to absorb some of the star's heat, temperatures on planet would continue to rise. Temperatures also would see a boost from rising levels of the carbon dioxide and vapors that <span class="mark">the oceans released into the air</span></p>
    <img src="img/BqDd.gif" alt="err">
    </div>
`;
}
function normalR() {
  document.getElementById('setR').style.display = 'none';
  let main = document.getElementById('result');
  main.style.display = 'flex';
  main.innerHTML += `
  <div class="resultDescription">
    <h3>Well done! Your planet survived</h3>
    <img src="img/survived.gif" alt="err">
    </div>
`;
}
function createPlanetCard() {
  let main = document.getElementById('mainElem');
  for (let i = 0; i < planetsInfo.length; i++)
  main.innerHTML += `
    <div class="card">
      <img src="${planetsInfo[i].img}" alt="Error" class="planet">
      <p class="name">${planetsInfo[i].name}</p>
      <p class="radius">Mean radius: <span>${planetsInfo[i].radius}</span> km</p>
      <p class="surface">Surface area: <span>${planetsInfo[i].surface}</span> km2</p>
      <p class="mass">Mass: <span>${planetsInfo[i].mass}</span> kg</p>
      <p class="gravity">Surface gravity: <span class="gravValue">${planetsInfo[i].gravity}</span> m/s2</p>
      <p class="description">${planetsInfo[i].description}</p>
    </div>
  `;
}
createPlanetCard();

$('#mainElem').on('click', '.card', function(){
  document.getElementById('mainElem').style.display = 'none';
  planetSave = this.innerHTML;
  function createStarCard() {
    let main = document.getElementById('starElem');
    main.style.display = 'flex';
    for (let i = 0; i < starsInfo.length; i++)
    main.innerHTML += `
      <div class="card">
        <img src="${starsInfo[i].img}" alt="Error" class="planet">
        <p class="name">${starsInfo[i].name}</p>
        <p class="radius">Mean radius: <span>${starsInfo[i].radius}</span> km</p>
        <p class="surface">Temperature: <span>${starsInfo[i].temperature}</span> degrees Fahrenheit</p>
        <p class="mass">Mass: <span class="massValue">${starsInfo[i].mass}</span> kg</p>
        <p class="description">${planetsInfo[i].description}</p>
      </div>
    `;
  };
  createStarCard();
});
$('#starElem').on('click', '.card', function(){
  document.getElementById('starElem').style.display = 'none';
  starSave = this.innerHTML;
  let main = document.getElementById('setR');
  main.style.display = 'flex';
  main.innerHTML += `
    <div class="card">
      ${this.innerHTML}
    </div>
    <div class="setDistance">
    <p class="howTo">You can calculate distance from the the planet to the Sun by Newton's law of universal gravitation and Newton's Second Law</p>
    <p class="howTo"><span class="mark">(G * m(planet) * M(star)) / R^2 = m(planet) * a </span></p>
    <input type="text" id="dist" placeholder="put it hear in meters..">
    <button id="checkDistance">Check</button>
    </div>
    <div class="card">
      ${planetSave}
    </div>
  `;
});
$(document).on('click', '#checkDistance', function(){
  let m = +$('.card .massValue:visible').first().text();
  let a = +$('.card .gravValue:visible').first().text();
  let defR = Math.sqrt((G * m)/a, 2);
  let userR = document.getElementById('dist').value;
  if(userR > defR) {
    planetGrawityExit()
  } else if(userR < defR) {
    planetCrash()
  } else {
    normalR()
  }

});