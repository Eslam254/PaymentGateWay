export class Menu {
  name!:string;
  icon!:string;
  url!:string;
}
export class MenuList {
  name!:string;
  icon!:string;
  url!:string;
  subMemu!:Menu[];
}
