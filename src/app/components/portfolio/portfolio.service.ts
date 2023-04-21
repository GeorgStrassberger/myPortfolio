import { Injectable } from '@angular/core';
import { Project } from './project/project.model';

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
      'https://github.com/GeorgStrassberger/Pokedex',
      'http://pokedex.georg-strassberger.de/'
    ),
    new Project(
      'El Pollo Loco',
      ['JavaScript', 'OOP', 'HTML', 'SCSS'],
      'El Pollo Loco is a small 2D Jump & Run Game, to lern the OOP in JavaScript.',
      '/assets/images/projects/epl.png',
      'https://github.com/GeorgStrassberger/El-Pollo-Loco',
      'http://el-pollo-loco.georg-strassberger.de/'
    ),
    // new Project(
    //   'Ring of Fire',
    //   ['Angular', 'Firebase', 'TypeScript'],
    //   'Is a Carddrinking game, every player has to pick up a card from the stack, and the rulse explain who has to drink.',
    //   '/assets/images/projects/rof.png',
    //   'https://github.com/GeorgStrassberger/RingOfFire',
    //   'http://ring-of-fire.georg-strassberger.de/'
    // ),
    // new Project(
    //   'Join',
    //   ['JavaScript', 'HTML', 'CSS'],
    //   'A Kanban board to create Tasks and following the status of the task.',
    //   '/assets/images/projects/join.png',
    //   'https://github.com/abaraev95/Join---Project-Management-System',
    //   'http://join.georg-strassberger.de/'
    // ),
    new Project(
      'My Homepage',
      ['Angular', 'TypeScript', 'HTML', 'SCSS'],
      'PROJECT_HOMEPAGE_DESCRIPTION',
      '/assets/images/projects/myPage.jpg',
      'https://github.com/GeorgStrassberger/myPortfolio',
      'https://www.georg-strassberger.de/'
    ),
    new Project(
      'Photography',
      ['SCSS', 'CSS', 'HTML'],
      'A Webpage created with SCSS/HTML to lern BEM (Block Element Modifier), to write and read better CSS.',
      '/assets/images/projects/photography.jpg',
      'https://github.com/GeorgStrassberger/Photography-Project',
      'http://photography.georg-strassberger.de/'
    ),
    new Project(
      'Drag & Drop',
      ['TypeScript', 'OOP', 'HTML', 'CSS'],
      'You can create Tasks and change the status form Active to Finished with drag & drop.',
      '/assets/images/projects/ddp.jpg',
      'https://github.com/GeorgStrassberger/Drag-Drop-Project',
      'http://dragdrop.georg-strassberger.de/'
    ),
  ];

  constructor() {}

  getProjects(): Project[] {
    return this.projects.slice();
  }

  getProject(index: number): Project {
    return this.projects.slice()[index];
  }
}
