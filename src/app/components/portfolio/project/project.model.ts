export class Project {
  constructor(
    public title: string,
    public languages: string[],
    public description: string,
    public imagePath: string,
    public github: string,
    public url: string
  ) {}
}
