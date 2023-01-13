import { Component, OnInit } from '@angular/core';

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

  
  constructor() { }

  ngOnInit(): void {
  }

  disableClick(){
    let menu = document.getElementById('menu') as HTMLImageElement;
    menu.classList.add('disabledbutton');
    setTimeout(() => {
      menu?.classList.remove('disabledbutton');
    }, 1000);
  }


  toggleMenu(){
    if(!this.isOpen){
      this.openMenuAnimation();
      this.openMenu();
      this.isOpen = true;
    }else{
      this.closeMenuAnimation();
      this.closeMenu();
      this.isOpen = false;
    }
    this.disableClick();    
  }


  openMenu(){
    let kopf = document.getElementById('kopf') as HTMLDivElement;
    let top = document.getElementById('top') as HTMLDivElement;
    let bot = document.getElementById('bot') as HTMLDivElement;

    kopf.classList.add('collapsible');
    top.classList.add('animateContent');
    bot.classList.add('animateFooter');
  }


  closeMenu(){
    let kopf = document.getElementById('kopf') as HTMLDivElement;
    let top = document.getElementById('top') as HTMLDivElement;
    let bot = document.getElementById('bot') as HTMLDivElement;

    setTimeout(()=>{
      kopf.classList.remove('collapsible');
    },1000)
    top.classList.remove('animateContent');
    bot.classList.remove('animateFooter');
  }


  openMenuAnimation() {
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


  closeMenuAnimation() {
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


  goToSection(sectionID:string){
    document.location = '#' + sectionID;
    this.closeMenuAnimation();
    this.closeMenu();
  }

  disableBtn(){
    const menu = document.getElementById('menu') as HTMLDivElement;
    menu.ariaDisabled
  }
}
