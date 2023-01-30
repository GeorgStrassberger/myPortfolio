import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/shared/services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss','./header.@keyframe.scss','./header.@media.scss']
})
export class HeaderComponent implements OnInit {

  isMenuOpen: boolean = false;
  
  MENU_IMAGES: string[] = [
    '../../../assets/images/menu/menu1.png',
    '../../../assets/images/menu/menu2.png',
    '../../../assets/images/menu/menu3.png',
    '../../../assets/images/menu/menu4.png',
    '../../../assets/images/menu/menu5.png'
  ];

  
  constructor( 
    public navService: NavigationService, 
    public router: Router
    ) { }

  ngOnInit(): void {
  }
  

  toggleMenuBtn(){
    if(!this.isMenuOpen){
      this.openBtnAnimation();
      this.navService.openNavMenu();
      this.isMenuOpen = true;
    }else{
      this.closeBtnAnimation();
      this.navService.closeNavMenu();
      this.isMenuOpen = false;
    }
    this.navService.disabledClickFor(1000, 'menu'); 
  }


  openBtnAnimation() {
    let i = 0;
    const menu = document.getElementById('menu')as HTMLImageElement;
    const TIMER = setInterval(() => {
        i++
        menu.src = this.MENU_IMAGES[i];
        if (i === 4) {
            clearInterval(TIMER);
        }
    }, 100);
  }


  closeBtnAnimation() {
    let i = 4;
    const menu = document.getElementById('menu')as HTMLImageElement;
    const TIMER = setInterval(() => {
      i--;
      menu.src = this.MENU_IMAGES[i];
      if (i === 0) {
          clearInterval(TIMER);
      }
    }, 100);
  }

}
