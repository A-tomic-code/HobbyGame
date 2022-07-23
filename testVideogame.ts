import { Person } from "./Person";
import { Platform } from "./Platform";
import { Profesion } from "./Profesion";
import { StorageType } from "./StorageType";
import { Videogame } from "./Videogame";

let yo = new Person("Daniel", "esp", Profesion.developer, 1);
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
);

let game = new Videogame(
  [yo],
  dire,
  "Nario Bros",
  1990,
  "usa",
  ["es", "en"],
  [GameBoy],
  50,
  7
);

console.log(game.toString());
console.log("\n\n");
game.print();
