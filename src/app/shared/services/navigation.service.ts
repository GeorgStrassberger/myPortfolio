import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  isMenuOpen: boolean = false;

  MENU_IMAGES: string[] = [
    '../../../assets/images/menu/menu1.png',
    '../../../assets/images/menu/menu2.png',
    '../../../assets/images/menu/menu3.png',
    '../../../assets/images/menu/menu4.png',
    '../../../assets/images/menu/menu5.png',
  ];

  constructor(public router: Router) {}

  forceNavigate(name: string) {
    this.router
      .navigate(['/'], { fragment: name })
      .then((result) => {
        console.log('result: ', result);
      })
      .catch((error) => {
        console.error(error);
      });
    this.closeNavMenu();
  }

  openNavMenu() {
    if (!this.isMenuOpen) {
      let kopf: HTMLDivElement = document.getElementById(
        'header'
      ) as HTMLDivElement;
      let top = document.getElementById('top') as HTMLDivElement;
      let bot = document.getElementById('bot') as HTMLDivElement;

      kopf.classList.add('collapsible');
      top.classList.add('animateContent');
      bot.classList.add('animateFooter');
      this.openBtnAnimation();
      this.isMenuOpen = true;
    }
  }

  closeNavMenu() {
    if (this.isMenuOpen) {
      let kopf = document.getElementById('header') as HTMLDivElement;
      let top = document.getElementById('top') as HTMLDivElement;
      let bot = document.getElementById('bot') as HTMLDivElement;

      setTimeout(() => {
        kopf.classList.remove('collapsible');
      }, 1000);
      top.classList.remove('animateContent');
      bot.classList.remove('animateFooter');
      this.closeBtnAnimation();
      this.isMenuOpen = false;
    }
  }

  /**
   * Disable a HTMLElement with ID for TIME milliseconds,
   * toggle class .disabledbutton {pointer-events: none;}
   * @param time
   * @param id
   */
  disabledClickFor(time: number, id: string) {
    let elem = document.getElementById(id) as HTMLElement;
    elem.classList.add('disabledbutton');
    setTimeout(() => {
      elem.classList.remove('disabledbutton');
    }, time);
  }

  openBtnAnimation() {
    let i = 0;
    let menu = document.getElementById('menu_btn') as HTMLImageElement;
    let TIMER = setInterval(() => {
      i++;
      menu.src = this.MENU_IMAGES[i];
      if (i === 4) {
        clearInterval(TIMER);
      }
    }, 100);
  }

  closeBtnAnimation() {
    let i = 4;
    let menu = document.getElementById('menu_btn') as HTMLImageElement;
    let TIMER = setInterval(() => {
      i--;
      menu.src = this.MENU_IMAGES[i];
      if (i === 0) {
        clearInterval(TIMER);
      }
    }, 100);
  }
}
