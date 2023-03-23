export class Project {
    public title: string;
    public languages: string[];
    public description: string;
    public imagePath: string;
    public github: string;
    public url: string;

    constructor(
        title: string,
        languages: string[],
        description: string,
        imagePath: string,
        github: string,
        url: string,
    ) {
        this.title = title;
        this.languages = languages;
        this.description = description;
        this.imagePath = imagePath;
        this.github = github;
        this.url = url;
    }

}