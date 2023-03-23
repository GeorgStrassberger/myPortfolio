import { Injectable } from "@angular/core";
import { Project } from "./project/project.model";


@Injectable({
    providedIn: 'root',
})
export class PortfolioService {
    private projects: Project[] = [
        new Project(
            'Pokedex',
            ['HTML', 'CSS'],
            'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
            '/assets/images/projects/pokedex.png',
            'https://github.com/GeorgStrassberger',
            'https://www.georg-strassberger.de/'
        ),
        new Project(
            'Pokedex2',
            ['HTML', 'CSS', 'JavaScript'],
            'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
            '/assets/images/projects/pokedex.png',
            'https://github.com/GeorgStrassberger',
            'https://www.georg-strassberger.de/'
        ),
        new Project(
            'Pokedex3',
            ['HTML', 'CSS', 'Rest-Api'],
            'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
            '/assets/images/projects/pokedex.png',
            'https://github.com/GeorgStrassberger',
            'https://www.georg-strassberger.de/'
        )
    ];

    constructor() { }

    getProjects(): Project[] {
        return this.projects.slice();
    }

    getProject(index: number): Project {
        return this.projects.slice()[index];
    }



}