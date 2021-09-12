import { BuildNumberDetail } from "./build-number-detail";

export interface ProjectBranch{
  id : number;
  name : string;
  idForTreeView : string;
  buildNumberDetails : BuildNumberDetail[];
  status : string;
  changes : string[]; // names
  agent : string;
  started : string;
  duration : string;
}
