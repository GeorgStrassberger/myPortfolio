import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './portfolio.service';
import { Project } from './project/project.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss', './portfolio.@media.scss']
})
export class PortfolioComponent implements OnInit {

  projects: Project[] = [];

  constructor(public portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.projects = this.portfolioService.getProjects();
    console.log('projects', this.projects)
  }



}
