import { StorageType } from "./StorageType";
import * as rl from "readline-sync";

export class Platform {
  private name: string;
  private releaseYear: number;
  private company: string;
  private nBits: number;
  private generation: number;
  private hasHD: boolean;
  private hdSize: number;
  private hasInternetConnection: boolean;
  private storageDevice: StorageType;
  private color: string;

  constructor(
    name: string,
    releaseYear: number,
    company: string,
    nBits: number,
    generation: number,
    hasHD: boolean,
    hdSize: number,
    hasInternetConnection: boolean,
    storageDevice: StorageType,
    color: string
  ) {
    this.name = name;
    this.releaseYear = releaseYear;
    this.company = company;
    this.nBits = nBits;
    this.generation = generation;
    this.hasHD = hasHD;
    this.hdSize = hdSize;
    this.hasInternetConnection = hasInternetConnection;
    this.storageDevice = storageDevice;
  }

  //////////////////////////////////////////
  //            METODOS DE CLASE          //
  //////////////////////////////////////////

  public static createInteractive(): Platform {
    let prompt = " >> ";

    let name = rl.question("Platform name" + prompt);;
    let releaseYear = Number(rl.question("Release Year" + prompt));
    let company = rl.question("Company" + prompt);
    let nBs = Number(rl.question("Number of Bits" + prompt));
    let generation = rl.question("Generation" + prompt);
    let hasHD = rl.question("Has HD? (Y/n)" + prompt);
    let hdSize;

    if (hasHD.toLowerCase() != "n") {
      hdSize = rl.question("HD Size" + prompt);
    } else {
      hdSize = 0;
    }

    let hasInternetConnection = rl.question("Has internet connection (Y/n)" + prompt);
    let color = rl.question("Color" + prompt);
    let storageDevice: StorageType = StorageType.cartucho;
    let storageDevice_str: string = rl.question(
      "Storage Device ([C]artucho, [T]arjeta, C[D], D[V]D, [B]lu-Ray" + prompt);
    
      switch (storageDevice_str.toLocaleLowerCase()) {
      case "c":
        storageDevice = StorageType.cartucho;
        break;
      case "t":
        storageDevice = StorageType.tarjeta;
        break;
      case "d":
        storageDevice = StorageType.cd;
        break;
      case "v":
        storageDevice = StorageType.dvd;
        break;
      case "b":
        storageDevice = StorageType.bluray;
        break;
      default:
        console.log("Choose a valid option");
        this.createInteractive();
    }

    return new Platform(
      name,
      releaseYear,
      company,
      nBs,
      generation,
      hasHD,
      hdSize,
      hasInternetConnection,
      storageDevice,
      color
    );
  }

  public equals(platform: Platform): boolean {
    let equals = false;

    if (
      this.name == platform.getName() &&
      this.releaseYear == platform.getReleaseYear() &&
      this.company == platform.getCompany() &&
      this.nBits == platform.getNBits() &&
      this.generation == platform.getGeneration() &&
      this.hasHD == platform.getHasHD() &&
      this.hdSize == platform.getHDSize() &&
      this.hasInternetConnection == platform.getHasInternetConnection() &&
      this.storageDevice == platform.getStorageDevice()
    ) {
      equals = true;
    }

    return equals;
  }

  public print(): void {
    for (let prop in this) {
      switch (prop) {
        case "name":
        case "releaseYear":
        case "company":
        case "nBits":
        case "generation":
        case "hasHD":
        case "hdSize":
        case "hasInternetConnection":
        case "storageDevice":
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
        case "releaseYear":
        case "company":
        case "nBits":
        case "generation":
        case "hasHD":
        case "hdSize":
        case "hasInternetConnection":
        case "storageDevice":
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
  /////////////////////////////////////////
  public getReleaseYear(): number {
    return this.releaseYear;
  }
  public setReleaseYear(value: number): void {
    this.releaseYear = value;
  }
  /////////////////////////////////////////
  public getCompany(): string {
    return this.company;
  }
  public setCompany(value: string): void {
    this.company = value;
  }
  /////////////////////////////////////////
  public getNBits(): number {
    return this.nBits;
  }
  public setNBits(value: number): void {
    this.nBits = value;
  }
  /////////////////////////////////////////
  public getGeneration(): number {
    return this.generation;
  }
  public setGeneration(value: number): void {
    this.generation = value;
  }
  /////////////////////////////////////////
  public getHasHD(): boolean {
    return this.hasHD;
  }
  public setHasHSD(value: boolean): void {
    this.hasHD = value;
  }
  /////////////////////////////////////////
  public getHDSize(): number {
    return this.hdSize;
  }
  public setHDSize(value: number): void {
    this.hdSize = value;
  }
  /////////////////////////////////////////
  public getHasInternetConnection(): boolean {
    return this.hasInternetConnection;
  }
  public setHasInternetConnection(value: boolean): void {
    this.hasInternetConnection = value;
  }
  /////////////////////////////////////////
  public getStorageDevice(): StorageType {
    return this.storageDevice;
  }
  public setStorageDevice(value: StorageType): void {
    this.storageDevice = value;
  }
  /////////////////////////////////////////
  public getColor(): string {
    return this.color;
  }
  public setColor(value: string): void {
    this.color = value;
  }
  /////////////////////////////////////////
}
