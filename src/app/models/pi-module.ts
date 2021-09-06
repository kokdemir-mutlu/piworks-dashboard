import { PIProject } from "./pi-project";

export interface PIModule{
  id : number;
  idForTreeView : string;
  name : string;
  projects : PIProject[];
  modules : PIModule[];
}
