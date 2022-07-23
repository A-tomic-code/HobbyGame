import { Person } from "./Person";
import { Platform } from "./Platform";

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

  public print(): void {
    console.log("-------------- VIDEOGAME --------------\n\n");
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
    let salida: string = "-------------- VIDEOGAME --------------\n\n";

    for (let prop in this) {
      switch (prop) {
        case "director":
          salida += "------- DIRECTOR -------";
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
