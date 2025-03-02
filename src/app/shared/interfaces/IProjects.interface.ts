import { IConfigImgs } from "./IConfigImgs.interface";

export interface IProjects {
  urlImg: IConfigImgs[];
  nameProject: string;
  description: string;
  urlWeb?: string;
}
