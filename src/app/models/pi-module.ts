import { PIProject } from "./pi-project";
import { TreeListItem } from "./tree-list-item";

export interface PIModule extends TreeListItem{
  id : number;
  name : string;
  projects : PIProject[];
}
