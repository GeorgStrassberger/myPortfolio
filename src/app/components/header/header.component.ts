import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NavigationService } from 'src/app/shared/services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.scss',
    './header.@keyframe.scss',
    './header.@media.scss',
  ],
})
export class HeaderComponent implements OnInit {
  color = document.getElementById('color')! as HTMLInputElement;

  constructor(
    public navService: NavigationService,
    public router: Router,
    public translate: TranslateService
  ) {}

  ngOnInit(): void {}

  toggleMenuBtn(): void {
    if (!this.navService.isMenuOpen) {
      this.navService.openNavMenu();
    } else {
      this.navService.closeNavMenu();
    }
    this.navService.disabledClickFor(1000, 'menu_btn');
  }

  resetColor() {
    document.documentElement.style.setProperty('--color-green', '#00BC8F');
  }

  getColor() {
    const color = document.getElementById('color')! as HTMLInputElement;
    document.documentElement.style.setProperty('--color-green', color.value);
  }
}
