const stars = [
    {
        name: 'Sun',
        type: 'G-type main-sequence star',
        mass: 'Approximately 1.989 x 10^30 kg',
        diameter: 'Approximately 1,391,000 km',
        distanceFromEarth: 'Approximately 149.6 million km (1 AU)',
        temperature: 'Surface temperature: Approximately 5,500°C (9,932°F)',
        composition: 'Primarily hydrogen and helium',
        atmosphere: 'Outer layers composed of plasma and magnetic fields',
        fusion: 'Undergoes nuclear fusion to produce energy',
        planet: '8'
    },
];

const solarSystemPlanets = [
    {
        name: 'Mercury',
        type: 'Terrestrial',
        mass: 'Approximately 3.301 x 10^23 kg',
        diameter: '4,879 km',
        distanceFromSun: '57.9 million km (0.39 AU)',
        distanceFromEarth: 'Minimum: 77 million km, Maximum: 222 million km',
        orbitalPeriod: '88 Earth days',
        dayLength: '58.6 Earth days (rotation period)',
        composition: 'Primarily composed of iron and nickel',
        atmosphere: 'Minimal atmosphere',
        temperature: 'Day: 430°C, Night: -180°C',
        moons: 'None'
    },
    {
        name: 'Venus',
        type: 'Terrestrial',
        mass: 'Approximately 4.867 x 10^24 kg',
        diameter: '12,104 km',
        distanceFromSun: '108.2 million km (0.72 AU)',
        distanceFromEarth: 'Minimum: 38 million km, Maximum: 261 million km',
        orbitalPeriod: '225 Earth days',
        dayLength: '116 Earth days (rotation period)',
        composition: 'Rocky with a thick atmosphere of carbon dioxide',
        atmosphere: 'Thick atmosphere with clouds of sulfuric acid',
        temperature: 'Around 465°C',
        moons: 'None'
    },
    {
        name: 'Earth',
        type: 'Terrestrial',
        mass: 'Approximately 5.972 x 10^24 kg',
        diameter: '12,742 km',
        distanceFromSun: '149.6 million km (1 AU)',
        distanceFromEarth: 'N/A',
        orbitalPeriod: '365.25 days',
        dayLength: '24 hours (rotation period)',
        composition: 'Rocky with a diverse environment',
        atmosphere: 'Nitrogen, oxygen, trace gases',
        temperature: 'Day: 15°C to 25°C, Night: -15°C to 5°C',
        moons: '1 (The Moon)'
    },
    {
        name: 'Mars',
        type: 'Terrestrial',
        mass: 'Approximately 6.39 x 10^23 kg',
        diameter: '6,779 km',
        distanceFromSun: '227.9 million km (1.52 AU)',
        distanceFromEarth: 'Minimum: 54.6 million km, Maximum: 401 million km',
        orbitalPeriod: '687 Earth days',
        dayLength: '24.6 hours (rotation period)',
        composition: 'Rocky with iron-rich soil',
        atmosphere: 'Thin atmosphere with traces of carbon dioxide',
        temperature: 'Day: -5°C to -20°C, Night: -80°C',
        moons: '2 (Phobos and Deimos)'
    },
    {
        name: 'Jupiter',
        type: 'Gas Giant',
        mass: 'Approximately 1.898 x 10^27 kg (318 times the mass of Earth)',
        diameter: '139,822 km (11 times the diameter of Earth)',
        distanceFromSun: '778.5 million km (5.2 AU)',
        distanceFromEarth: 'Minimum: 588 million km, Maximum: 968 million km',
        orbitalPeriod: '11.86 Earth years',
        dayLength: '9.93 Earth hours (rotation period)',
        composition: 'Mostly hydrogen and helium with traces of other elements',
        atmosphere: 'Bands of clouds made up of ammonia and methane, along with storms such as the famous Great Red Spot',
        temperature: 'Approximately -145°C',
        moons: 'At least 79 known moons, including the four largest known as the Galilean moons: Io, Europa, Ganymede, and Callisto.'
    },
    {
        name: 'Saturn',
        type: 'Gas Giant',
        mass: 'Approximately 5.683 x 10^26 kg (95 times the mass of Earth)',
        diameter: '116,464 km (9 times the diameter of Earth)',
        distanceFromSun: '1.433 billion km (9.58 AU)',
        orbitalPeriod: '29.46 Earth years',
        dayLength: 'Approximately 10.7 Earth hours (rotation period)',
        composition: 'Mostly hydrogen and helium with traces of other elements',
        atmosphere: 'Bands of clouds and a prominent ring system',
        temperature: 'Approximately -178°C',
        moons: '83 known moons'
    },
    {
        name: 'Uranus',
        type: 'Ice Giant',
        mass: 'Approximately 8.681 x 10^25 kg (14.5 times the mass of Earth)',
        diameter: '50,724 km (4 times the diameter of Earth)',
        distanceFromSun: '2,872.5 million km (19.22 AU)',
        orbitalPeriod: '84.01 Earth years',
        dayLength: 'Approximately 17.2 Earth hours (retrograde rotation)',
        composition: 'Mostly hydrogen and helium with ices like water, ammonia, and methane',
        atmosphere: 'Bands of clouds and a unique rotational tilt',
        temperature: 'Approximately -224°C',
        moons: '27 known moons'
    },
    {
        name: 'Neptune',
        type: 'Ice Giant',
        mass: 'Approximately 1.024 x 10^26 kg (17 times the mass of Earth)',
        diameter: '49,244 km (3.9 times the diameter of Earth)',
        distanceFromSun: '4,495.1 million km (30.05 AU)',
        orbitalPeriod: '164.8 Earth years',
        dayLength: 'Approximately 16.1 Earth hours (retrograde rotation)',
        composition: 'Similar to Uranus, mostly hydrogen and helium with ices',
        atmosphere: 'Dark storms and a dynamic system',
        temperature: 'Approximately -218°C',
        moons: '14 known moons'
    },
];

export {stars, solarSystemPlanets}