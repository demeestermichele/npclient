import {Sex} from "./sex";
import {Role} from "./role";

export interface Character {
  id: number;
  firstName: string;
  lastName: string;
  sex: Sex;
  role?: Role;
  mother?: Character;
  father?: Character;
}
