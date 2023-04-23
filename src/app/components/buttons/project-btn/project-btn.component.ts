import { Component, Input } from '@angular/core';
import { NavigationService } from 'src/app/shared/services/navigation.service';
import { PortfolioService } from '../../portfolio/portfolio.service';

@Component({
  selector: 'project-btn',
  template: ``,
  styleUrls: [
    './project-btn.component.scss',
    './project-btn.mobile.component.scss',
  ],
})
export class ProjectButton {
  @Input() btnText: string = '';

  constructor(
    public navService: NavigationService,
    public portfolioService: PortfolioService
  ) {}
}
