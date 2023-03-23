import { Injectable } from "@angular/core";
import { Project } from "./project/project.model";


@Injectable({
    providedIn: 'root',
})
export class PortfolioService {
    private projects: Project[] = [
        new Project(
            'Pokedex',
            ['Rest-Api', 'JavaScript', 'HTML', 'CSS'],
            'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
            '/assets/images/projects/pokedex.png',
            'https://github.com/GeorgStrassberger',
            'https://www.georg-strassberger.de/'
        ),
        new Project(
            'Ring of Fire',
            ['Angular', 'Firebase', 'TypeScript', 'HTML', 'CSS'],
            'Is a Carddrinking game, every player has to pick up a card from the stack, and the rulse explain who has to drink.',
            '/assets/images/projects/ringoffire.jpg',
            'https://github.com/GeorgStrassberger',
            'https://www.georg-strassberger.de/'
        ),
        new Project(
            'Join',
            ['JavaScript', 'HTML', 'CSS'],
            'A Kanban board to create Tasks and following the status of the task.',
            '/assets/images/projects/join.png',
            'https://github.com/GeorgStrassberger',
            'https://www.georg-strassberger.de/'
        ),
        new Project(
            'My Homepage',
            ['Angular', 'TypeScript', 'HTML', 'SCSS'],
            'My Homepage build in Angular, to represent me and my projects',
            '/assets/images/projects/myPage.jpg',
            'https://github.com/GeorgStrassberger',
            'https://www.georg-strassberger.de/'
        ),
        new Project(
            'El Pollo Loco',
            ['JavaScript', 'OOP', 'HTML', 'SCSS'],
            'El Pollo Loco is a small 2D Jump & Run Game, to lern the OOP in JavaScript.',
            '/assets/images/projects/sharkie.png',
            'https://github.com/GeorgStrassberger',
            'https://www.georg-strassberger.de/'
        ),
        new Project(
            'Drag & Drop',
            ['TypeScript', 'OOP', 'HTML', 'CSS'],
            'You can create Tasks and change the status form Active to Finished, to lern the OOP in TypeScript.',
            '/assets/images/projects/crm.png',
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