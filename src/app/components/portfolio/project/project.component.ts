import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PortfolioService } from '../portfolio.service';
import { Project } from './project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: [
    './project.component.scss',
    './project.@media.scss',
    './project.@keyframes.scss',
    './project.hover.none.scss',
  ],
})
export class ProjectComponent implements OnInit {
  projects!: Project[];
  @Input() project!: Project;
  @Input() index!: number;

  constructor(
    private portfolioService: PortfolioService,
    public translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.projects = this.portfolioService.getProjects();
  }
}
