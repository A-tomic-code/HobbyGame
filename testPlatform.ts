import { pid } from "process";
import { Platform } from "./Platform";
import { StorageType } from "./StorageType";

let platform1 = new Platform(
  "p1",
  2000,
  "Sony",
  64,
  1,
  true,
  256,
  true,
  StorageType.cd,
  "gris"
);
let platform2 = new Platform(
  "p2",
  2005,
  "Microsoft",
  32,
  2,
  true,
  512,
  true,
  StorageType.cd,
  "blanco"
);

platform1.print();

console.log(platform2.toString());
