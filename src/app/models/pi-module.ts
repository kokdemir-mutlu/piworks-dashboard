import { PIProject } from "./pi-project";
import { TreeListItem } from "./tree-list-item";

export interface PIModule{
  id : number;
  name : string;
  projects : PIProject[];
  modules : PIModule[];
}
