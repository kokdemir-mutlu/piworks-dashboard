import { ProjectBuild } from "./project-build";

export interface PIProject{
  id : number;
  idForTreeView : string;
  name : string;
  builds : ProjectBuild[];
}
