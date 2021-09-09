import { BuildNumberDetail } from "./build-number-detail";

export interface ProjectBuild{
  buildNumberDetails : BuildNumberDetail[];
  status : string;
  changes : string[]; // names
  agent : string;
  started : string;
  duration : string;
}
