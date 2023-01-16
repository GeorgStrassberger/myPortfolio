import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/shared/services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isOpen: boolean = false;
  
  MENU_IMAGES: string[] = [
    '../../../assets/images/menu/menu1.png',
    '../../../assets/images/menu/menu2.png',
    '../../../assets/images/menu/menu3.png',
    '../../../assets/images/menu/menu4.png',
    '../../../assets/images/menu/menu5.png'
  ];

  
  constructor( public navService: NavigationService) { }

  ngOnInit(): void {
  }
  

  toggleMenuBtn(){
    if(!this.isOpen){
      this.openImageAnimation();
      this.openNavMenu();
      this.isOpen = true;
    }else{
      this.closeImageAnimation();
      this.closeNavMenu();
      this.isOpen = false;
    }
    this.navService.disabledClickFor(1000, 'menu'); 
  }


  openNavMenu(){
    let kopf = document.getElementById('kopf') as HTMLDivElement;
    let top = document.getElementById('top') as HTMLDivElement;
    let bot = document.getElementById('bot') as HTMLDivElement;

    kopf.classList.add('collapsible');
    top.classList.add('animateContent');
    bot.classList.add('animateFooter');
  }


  closeNavMenu(){
    let kopf = document.getElementById('kopf') as HTMLDivElement;
    let top = document.getElementById('top') as HTMLDivElement;
    let bot = document.getElementById('bot') as HTMLDivElement;

    setTimeout(()=>{
      kopf.classList.remove('collapsible');
    },1000)
    top.classList.remove('animateContent');
    bot.classList.remove('animateFooter');
  }


  openImageAnimation() {
    let i = 0;
    const menu = document.getElementById('menu')as HTMLImageElement;
    const TIMER = setInterval(() => {
        i++
        menu.src = this.MENU_IMAGES[i];
        if (i === 4) {
            clearInterval(TIMER);
        }
    }, 100);
    this.isOpen = true;
  }


  closeImageAnimation() {
    let i = 4;
    const menu = document.getElementById('menu')as HTMLImageElement;
    const TIMER = setInterval(() => {
      i--;
      menu.src = this.MENU_IMAGES[i];
      if (i === 0) {
          clearInterval(TIMER);
      }
    }, 100);
    this.isOpen = false;
  }


  scrollToID(id: string){
    this.navService.locateSection(id)
    this.toggleMenuBtn();
  }
}
