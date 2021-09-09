import { PIProject } from "./pi-project";

export interface GroupNode{
  projects : PIProject[];
  subGroups: GroupNode[];
}
