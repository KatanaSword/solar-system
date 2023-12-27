import readlineSync from "readline-sync";
import chalk from "chalk";
import {stars, solarSystemPlanets} from "./database.js";
const log = console.log;

let userInput;

function greeting() {
    log("💮💮💮💮💮💮💮💮💮💮💮💮💮💮💮💮💮💮💮💮");
    log(chalk.magenta.bold.italic("Welcome to the world of stars and planets"));
    log("💮💮💮💮💮💮💮💮💮💮💮💮💮💮💮💮💮💮💮💮");
    userName()
};
greeting();

function userName() {
    userInput = readlineSync.question(chalk.cyan.bold("Please enter your name: "));
    if(!userInput || !isNaN(userInput)) {
        log(chalk.red.bold("Ooops! error occured, Please enter your name"));
        userName()
    } else {
        log("🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻")
        log(`${chalk.green.bold.italic(userInput)} ${chalk.green.bold("Welcome to the solar system")}`);
        log("🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻")
        exitOrContinueFunc()
    };
};

function solarSystem() {
    const starsAndPlanets = readlineSync.question(chalk.blue.bold("Please enter the name of star and planet: "));
    let found = false;

    for(let i = 0; i < solarSystemPlanets.length; i++) {
        if(starsAndPlanets === solarSystemPlanets[i].name || starsAndPlanets === solarSystemPlanets[i].name.toLowerCase()) {
            fetchPlanetInformation(solarSystemPlanets[i])
            found = true;
            break;
        };
    };    

    if(!found) {
        for(let i = 0; i < stars.length; i++) {
            if(starsAndPlanets === stars[i].name || starsAndPlanets === stars[i].name.toLowerCase()) {
                fetchStarInformation(stars[i])
                found = true;
                break;
            };
        };
    };

    if(!found) {
        log(chalk.red.bold("Ooops! error occured, Please enter the name of star and planet"));
        solarSystem()
    };
    exitOrContinueFunc()
};

function fetchPlanetInformation(planet) {
    log(`${chalk.cyan.bold.underline("Planet Information")}${chalk.cyan.bold(":")}`);
    log(`${chalk.cyan.bold("Name:")} ${chalk.white.bold(planet.name)}`);
    log(`${chalk.cyan.bold("Type:")} ${chalk.white.bold(planet.type)}`);
    log(`${chalk.cyan.bold("Mass:")} ${chalk.white.bold(planet.mass)}`);
    log(`${chalk.cyan.bold("Diameter:")} ${chalk.white.bold(planet.diameter)}`);
    log(`${chalk.cyan.bold("Distance from sun:")} ${chalk.white.bold(planet.distanceFromSun)}`);
    log(`${chalk.cyan.bold("Distance from earth:")} ${chalk.white.bold(planet.distanceFromEarth)}`);
    log(`${chalk.cyan.bold("Orbital period:")} ${chalk.white.bold(planet.orbitalPeriod)}`);
    log(`${chalk.cyan.bold("Day length:")} ${chalk.white.bold(planet.dayLength)}`);
    log(`${chalk.cyan.bold("Composition:")} ${chalk.white.bold(planet.composition)}`);
    log(`${chalk.cyan.bold("Atmosphere:")} ${chalk.white.bold(planet.atmosphere)}`);
    log(`${chalk.cyan.bold("Temperature:")} ${chalk.white.bold(planet.temperature)}`);
    log(`${chalk.cyan.bold("Moons:")} ${chalk.white.bold(planet.moons)}`);
};

function fetchStarInformation(star) {
    log(`${chalk.cyan.bold.underline("Star Information")}${chalk.cyan.bold(":")}`);
    log(`${chalk.cyan.bold("Name:")} ${chalk.white.bold(star.name)}`);
    log(`${chalk.cyan.bold("Type:")} ${chalk.white.bold(star.type)}`);
    log(`${chalk.cyan.bold("Mass:")} ${chalk.white.bold(star.mass)}`);
    log(`${chalk.cyan.bold("Diameter:")} ${chalk.white.bold(star.diameter)}`);
    log(`${chalk.cyan.bold("Distance from earth:")} ${chalk.white.bold(star.distanceFromEarth)}`);
    log(`${chalk.cyan.bold("Temperature:")} ${chalk.white.bold(star.temperature)}`);
    log(`${chalk.cyan.bold("Composition:")} ${chalk.white.bold(star.composition)}`);
    log(`${chalk.cyan.bold("Atmosphere:")} ${chalk.white.bold(star.atmosphere)}`);
    log(`${chalk.cyan.bold("Fusion:")} ${chalk.white.bold(star.fusion)}`);
    log(`${chalk.cyan.bold("planet:")} ${chalk.white.bold(star.planet)}`);
};

function exitOrContinueFunc() {
    const exitOrContinue = readlineSync.question(`${chalk.yellow.bold.underline("Do you want to know about our solar system [y/n]")}${chalk.yellow.bold(":")} `);
    if(exitOrContinue === "y") {
        solarSystem()
    } else if(exitOrContinue === "n") {
        exit()
    } else {
        log(chalk.red.bold("Ooop! error occured, Please enter [y/n] to continue"));
        exitOrContinueFunc()
    };
};

function exit() {
    log("🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸");
    log(chalk.magenta.bold.italic(`Thanks for giving your time ${userInput}, Feel free to reach out at any time! GoodBye!`));
    log("🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸");
};