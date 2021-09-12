import { ProjectBranch } from "./project-branch";

export interface PIProject{
  id : number;
  idForTreeView : string;
  name : string;
  children : ProjectBranch[];
}
