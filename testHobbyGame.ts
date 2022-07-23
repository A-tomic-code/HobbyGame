import { HobbyGame } from "./HobbyGame";
import { Person } from "./Person";
import { Platform } from "./Platform";
import { Profesion } from "./Profesion";
import { StorageType } from "./StorageType";
import { Videogame } from "./Videogame";

let yo = new Person("Daniel", "esp", Profesion.developer, 1);
let otro_dev = new Person("otro_dev", "uk", Profesion.developer, 1);
let dire = new Person("dddd", "eeuu", Profesion.director, 15);
let GameBoy = new Platform(
  "GameBoy",
  1986,
  "Nintendo",
  16,
  1,
  false,
  0,
  false,
  StorageType.cartucho,
  "amarillo"
);let SEGA = new Platform(
  "SEGA",
  1980,
  "NSE",
  16,
  1,
  false,
  0,
  false,
  StorageType.cartucho,
  "azul"
);

let marioBros = new Videogame(
  [yo],
  dire,
  "Mario Bros",
  1990,
  "usa",
  ["es", "en"],
  [GameBoy],
  50,
  7
);
let pacman = new Videogame(
  [yo, otro_dev],
  dire,
  "SONIC",
  1975,
  "usa",
  ["es", "en"],
  [SEGA],
  50,
  7
);

let hg = new HobbyGame([marioBros, pacman])

console.log('-------- BY DEVELOPER -------');
console.log(hg.getByDeveloper(yo));
console.log('-------- GOOD RATED -------');
console.log(hg.getGoodRated());
console.log("-------- BY PLATFORM AND LANGUAGE -------");
console.log(hg.getByPlatformAndLanguage(SEGA, 'en'));
console.log("-------- TOTAL PRICE -------");
console.log(hg.getTotalPrice());
