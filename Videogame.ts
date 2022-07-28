import { Person } from "./Person";
import { Platform } from "./Platform";
import * as rl from "readline-sync";

export class Videogame {
  private director: Person;
  private developers: Person[];
  private title: string;
  private releaseYear: number;
  private nacionality: string;
  private languages: string[];
  private platforms: Platform[];
  private score: number;
  private price: number;

  constructor(
    developers: Person[],
    director: Person,
    title: string,
    releaseYear: number,
    nacionality: string,
    languages: string[],
    platforms: Platform[],
    price: number,
    score: number
  ) {
    this.developers = developers;
    this.director = director;
    this.title = title;
    this.releaseYear = releaseYear;
    this.nacionality = nacionality;
    this.languages = languages;
    this.platforms = platforms;
    this.price = price;
    this.score = score;
  }

  //////////////////////////////////////////
  //            METODOS DE CLASE          //
  //////////////////////////////////////////

  public static createInteractive(): Videogame {
    let developers: Person[] = [];
    let director: Person;
    let title: string;
    let releaseYear: number;
    let nacionality: string;
    let languages: string[] = [];
    let platforms: Platform[] = [];
    let price: number = 0;
    let score: number = 0;

    let prompt = " --> ";

    let game: Videogame;

    let developers_num = rl.question(
      "How many develpers has the Videgame ?" + prompt
    );

    for (let i = 0; i < developers_num; i++) {
      console.log("\ndeveloper " + (i + 1));
      console.log("--------------------\n");

      let tmp: Person = Person.createInteractive();
      developers.push(tmp);
    }

    console.log("");
    console.log("\nLet`s Introduce the data of the director");
    console.log("--------------------\n");

    director = Person.createInteractive();

    console.log("\n------game's data--------");

    title = rl.question("Title" + prompt);
    releaseYear = rl.question("Realease Year" + prompt);
    nacionality = rl.question("Nacionality" + prompt);

    let languages_str = rl.question("languages (separate by comma)" + prompt);
    languages = languages_str.split(",");

    // AQUI ESTA PEGADITO A ARRIBA
    let platforms_num = rl.question(
      "For how many platforms has the Videgame available ?" + prompt
    );

    for (let i = 0; i < platforms_num; i++) {
      console.log("\nplatform " + (i + 1));
      console.log("--------------------\n");

      let tmp: Platform = Platform.createInteractive();
      platforms.push(tmp);
    }

    price = rl.question("Game price" + prompt);
    score = rl.question("Game score" + prompt);

    game = new Videogame(
      developers,
      director,
      title,
      releaseYear,
      nacionality,
      languages,
      platforms,
      price,
      score
    );

    return game
  }

  public print(): void {
    console.log("\n-------------- VIDEOGAME --------------\n\n");
    for (let prop in this) {
      switch (prop) {
        case "director":
          console.log("------- DIRECTOR -------\n");
          console.log(this.getDirector().toString());
          console.log("------------------------\n\n");
          break;
        case "developers":
          console.log("------- DEVELOPERS -------\n");
          console.log(this.getDevelopers().toString());
          console.log("------------------------\n\n");
          break;
        case "title":
        case "releaseYear":
        case "nacionality":
        case "languages":
        case "platforms":
        case "price":
        case "score":
          console.log(`${prop}: ${eval("this." + prop)}`);
          break;
      }
    }
    console.log("------------------------------------------");
  }

  public toString(): string {
    let salida: string = "\n-------------- VIDEOGAME --------------\n\n";

    for (let prop in this) {
      switch (prop) {
        case "director":
          salida += "------- DIRECTOR -------\n";
          salida += this.getDirector().toString();
          salida += "------------------------\n";
          break;
        case "developers":
          salida += "------- DEVELOPERS -------\n";
          salida += this.getDevelopers().toString();
          salida += "------------------------\n";
          break;
        case "title":
        case "releaseYear":
        case "nacionality":
        case "languages":
        case "platforms":
        case "price":
        case "score":
          salida += `${prop}: ${eval("this." + prop)}\n`;
          break;
      }
    }

    salida += "\n\n ------------------------------------------";
    return salida;
  }

  public isMultiLanguage(): boolean {
    return this.getLanguages().length > 1;
  }

  public developedByDeveloper(): boolean {
    return this.getDevelopers().length < 1;
  }

  public platformDedicated(): boolean {
    return this.getPlatforms().length < 1;
  }

  //////////////////////////////////////////
  //            GETTER Y SETTER           //
  //////////////////////////////////////////

  public getTitle(): string {
    return this.title;
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  public getReleaseYear(): number {
    return this.releaseYear;
  }

  public setReleaseYear(releaseYear: number): void {
    this.releaseYear = releaseYear;
  }

  public getDevelopers(): Person[] {
    return this.developers;
  }

  public setDevelopers(developers: Person[]): void {
    this.developers = developers;
  }

  public getNacionality(): string {
    return this.nacionality;
  }

  public setNacionality(nacionality: string): void {
    this.nacionality = nacionality;
  }

  public getDirector(): Person {
    return this.director;
  }

  public setDirector(director: Person): void {
    this.director = director;
  }

  public getLanguages(): string[] {
    return this.languages;
  }

  public setLanguages(languages: string[]): void {
    this.languages = languages;
  }

  public getPlatforms(): Platform[] {
    return this.platforms;
  }

  public setPlataforms(plataforms: Platform[]): void {
    this.platforms = plataforms;
  }

  public getPrice(): number {
    return this.price;
  }

  public setPrice(price: number): void {
    this.price = price;
  }

  public getScore(): number {
    return this.score;
  }

  public setScore(score: number): void {
    this.score = score;
  }
}
