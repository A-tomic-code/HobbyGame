import { Person } from "./Person";
import { Platform } from "./Platform";
import { Videogame } from "./Videogame";

export class HobbyGame {
  private games: Videogame[];

  constructor(games: Videogame[]) {
    this.games = games;
  }

  //////////////////////////////////////////
  //            METODOS DE CLASE          //
  ////////////// ////////////////////////////

  public getGoodRated(): Videogame[] {
    let result: Videogame[] = [];

    for (let i = 0; i < this.games.length; i++) {
      if (this.games[i].getScore() >= 5) {
        result.push(this.games[i]);
      }
    }

    return result;
  }

  public getByPlatformAndLanguage(platf: Platform, lang: string): Videogame[] {
    let result: Videogame[] = [];

    for (let i = 0; i < this.games.length; i++) {
      if (
        this.games[i].getPlatforms().includes(platf) &&
        this.games[i].getLanguages().includes(lang)
      ) {
        result.push(this.games[i]);
      }
    }

    return result;
  }

  public getByDeveloper(dev: Person): Videogame[] {
    let result: Videogame[] = [];

    for (let i = 0; i < this.games.length; i++) {
      if (this.games[i].getDevelopers().includes(dev)) {
        result.push(this.games[i]);
      }
    }

    return result;
  }

  public getByLanguage(lang: string): Videogame[] {
    let result: Videogame[] = [];

    for (let i = 0; i < this.games.length; i++) {
      if (this.games[i].getLanguages().includes(lang)) {
        result.push(this.games[i]);
      }
    }

    return result;
  }

  public getTotalPrice(): number {
    let total = 0;

    for (let i = 0; i < this.games.length; i++) {
      total += this.games[i].getPrice();
    }

    return total;
  }

  //////////////////////////////////////////
  //            GETTER Y SETTER           //
  //////////////////////////////////////////

  public getGames(): Videogame[] {
    return this.games;
  }

  public setGames(games: Videogame[]): void {
    this.games = games;
  }
}
