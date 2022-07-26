import { stdin, stdout } from "process";
import { Profesion } from "./Profesion";
import * as rl from "readline-sync";

export class Person {
  private name: string;
  private nationality: string;
  private profesion: Profesion;
  private experienceYears: number;

  constructor(
    name: string,
    nationality: string,
    profesion: Profesion,
    experienceYears: number
  ) {
    this.name = name;
    this.nationality = nationality;
    this.profesion = profesion;
    this.experienceYears = experienceYears;
  }

  //////////////////////////////////////////
  //            METODOS DE CLASE          //
  //////////////////////////////////////////

  public static createInteractive():Person {
    let prompt = " >> ";
    
    let tmp: Person;
  
    let dir_name = rl.question("Name" + prompt);
    let dir_nationality = rl.question("Nationality" + prompt);
    let dir_exp = rl.question("Experience years" + prompt);

    tmp = new Person(
      dir_name,
      dir_nationality,
      Profesion.director,
      dir_exp
    );

    return tmp
  }

  public equals(persona: Person): boolean {
    let equals = false;

    if (
      this.name == persona.getName() &&
      this.nationality == persona.getNationality() &&
      this.profesion == persona.getProfesion() &&
      this.experienceYears == persona.getExperienceYears()
    ) {
      equals = true;
    }

    return equals;
  }

  public print(): void {
    for (let prop in this) {
      switch (prop) {
        case "name":
        case "nationality":
        case "profesion":
        case "experienceYears":
          console.log(`${prop}: ${eval("this." + prop)}`);
          break;
      }
    }
  }

  public toString(): string {
    let salida: string = "";

    for (let prop in this) {
      switch (prop) {
        case "name":
        case "nationality":
        case "profesion":
        case "experienceYears":
          salida += `${prop}: ${eval("this." + prop)}\n`;
          break;
      }
    }

    return salida;
  }

  //////////////////////////////////////////
  //            GETTER Y SETTER           //
  //////////////////////////////////////////

  public getName(): string {
    return this.name;
  }
  public setName(value: string): void {
    this.name = value;
  }
  public getNationality(): string {
    return this.nationality;
  }
  public setNationality(value: string): void {
    this.nationality = value;
  }
  public getProfesion(): string {
    return this.profesion;
  }
  public setProfesion(value: Profesion): void {
    this.profesion = value;
  }
  public getExperienceYears(): number {
    return this.experienceYears;
  }
  public setExperienceYears(value: number): void {
    this.experienceYears = value;
  }
}
