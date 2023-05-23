import { Injectable } from '@angular/core';
import { Project } from './project/project.model';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  private projects: Project[] = [
    new Project(
      'Photography',
      ['SCSS', 'CSS', 'HTML'],
      'PROJECT_PHOTOGRAPHY_DESCRIPTION',
      '/assets/images/projects/photography.620w-460h',
      'https://github.com/GeorgStrassberger/Photography-Project',
      'http://photography.georg-strassberger.de/'
    ),
    new Project(
      'El Pollo Loco',
      ['JavaScript', 'OOP', 'HTML', 'CSS'],
      'PROJECT_ELPOLLO_DESCRIPTION',
      '/assets/images/projects/epl.620w-460h',
      'https://github.com/GeorgStrassberger/El-Pollo-Loco',
      'http://el-pollo-loco.georg-strassberger.de/'
    ),
    new Project(
      'Ring of Fire',
      ['Angular', 'Firebase', 'TypeScript'],
      'PROJECT_RING_DESCRIPTION',
      '/assets/images/projects/rof.620w-460h',
      'https://github.com/GeorgStrassberger/RingOfFire',
      'http://ring-of-fire.georg-strassberger.de/'
    ),
    new Project(
      'My Homepage',
      ['Angular', 'TypeScript', 'HTML', 'SCSS'],
      'PROJECT_HOMEPAGE_DESCRIPTION',
      '/assets/images/projects/myPage.620w-460h',
      'https://github.com/GeorgStrassberger/myPortfolio',
      'https://www.georg-strassberger.de/'
    ),
    new Project(
      'Pokedex',
      ['Rest-Api', 'JavaScript', 'HTML', 'CSS'],
      'PROJECT_POKEDEX_DESCRIPTION',
      '/assets/images/projects/pokedex.620w-460h',
      'https://github.com/GeorgStrassberger/Pokedex',
      'http://pokedex.georg-strassberger.de/'
    ),
    // new Project(
    //   'Drag & Drop',
    //   ['TypeScript', 'OOP', 'HTML', 'CSS'],
    //   'You can create Tasks and change the status form Active to Finished with drag & drop.',
    //   '/assets/images/projects/ddp.jpg',
    //   'https://github.com/GeorgStrassberger/Drag-Drop-Project',
    //   'http://dragdrop.georg-strassberger.de/'
    // ),
  ];

  constructor() {}

  getProjects(): Project[] {
    return this.projects.slice();
  }

  getProject(index: number): Project {
    return this.projects.slice()[index];
  }
}
