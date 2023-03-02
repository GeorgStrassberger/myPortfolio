import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/shared/services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './header.@keyframe.scss', './header.@media.scss']
})
export class HeaderComponent implements OnInit {


  constructor(
    public navService: NavigationService,
    public router: Router
  ) { }


  ngOnInit(): void {
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
