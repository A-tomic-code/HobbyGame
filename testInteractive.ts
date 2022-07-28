import { Person } from "./Person";
import { Videogame } from "./Videogame";
import { Profesion } from "./Profesion";
import { Platform } from "./Platform";
import { HobbyGame } from "./HobbyGame";
import * as fs from "fs";
import * as rl from "readline-sync";

let game: Videogame;

//////////////////////////////////
//             MAIN             //
//////////////////////////////////

createRegister();

//////////////////////////////////
//   DECLARACION DE FUNCIONES   //
//////////////////////////////////

function createRegister() {
  let prompt = " --> ";

  console.log("Create new Videogame");
  console.log("--------------------");

  game = Videogame.createInteractive();
  console.log(game);

  let commit = rl.question("\nEs correcto? Y/n" + prompt);

  if (commit.toLowerCase() != "n") {
    editarDB();
  }
}

function editarDB() {
  let tmp: HobbyGame;

  if (fs.existsSync(HobbyGame.DB_NAME)) {
    tmp = HobbyGame.getInstance(HobbyGame.DB_NAME);
    tmp.getGames().push(game);

    HobbyGame.writeOnJSONFile(HobbyGame.DB_NAME, tmp);
  } else {
    tmp = new HobbyGame([game]);
    HobbyGame.writeOnJSONFile(HobbyGame.DB_NAME, tmp);
  }
}
