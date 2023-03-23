import { Component, OnInit } from '@angular/core';
import { Project } from './project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss', './project.@media.scss', './project.@keyframes.scss']
})
export class ProjectComponent implements OnInit {

  myProjects: Project[] = [
    {
      title: 'Pokedex',
      languages: ['HTML', 'CSS', 'JS', 'Rest-Api'],
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      imagePath: '',
      github: 'https://github.com/GeorgStrassberger',
      url: 'https://www.georg-strassberger.de/'
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
