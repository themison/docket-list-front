export class ProjectModel {
  title: string;
  id: number;
  parentProject: number;
  owner?: string;
  color?: string;
  depth: number;
}
