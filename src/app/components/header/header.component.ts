import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/shared/services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './header.@keyframe.scss', './header.@media.scss']
})
export class HeaderComponent implements OnInit {

  color = document.getElementById('color')! as HTMLInputElement;

  constructor(
    public navService: NavigationService,
    public router: Router
  ) { }


  ngOnInit(): void {
    // this.getColor();
    this.resetColor();
  }

  resetColor() {
    document.documentElement.style.setProperty("--color-green", "#00BC8F");
  }

  getColor() {
    const color = document.getElementById('color')! as HTMLInputElement;
    console.log('color: ', color.value);
    document.documentElement.style.setProperty("--color-green", color.value);
  }


  toggleMenuBtn(): void {
    if (!this.navService.isMenuOpen) {
      // this.navService.openBtnAnimation();
      this.navService.openNavMenu();
    } else {
      // this.navService.closeBtnAnimation();
      this.navService.closeNavMenu();
    }
    this.navService.disabledClickFor(1000, 'menu');
  }


}
