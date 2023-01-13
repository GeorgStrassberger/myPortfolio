import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isOpen: boolean = false;
  index: number = 0;
  MENU_IMAGES: string[] = [
    '../../../assets/images/menu/menu1.png',
    '../../../assets/images/menu/menu2.png',
    '../../../assets/images/menu/menu3.png',
    '../../../assets/images/menu/menu4.png',
    '../../../assets/images/menu/menu5.png'
  ];
  // menu = document.getElementById('menu')as HTMLImageElement;
  // kopf = document.getElementById('kopf') as HTMLElement;
  // top = document.getElementById('top') as HTMLDivElement;
  // bot = document.getElementById('bot') as HTMLDivElement;
  
  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(){
    if(!this.isOpen){
      this.openMenu();
      this.isOpen = true;
    }else{
      this.closeMenu();
      this.isOpen = false;
    }    
  }


  openMenu(){
    this.openMenuAnimation(this.index);

    let kopf = document.getElementById('kopf') as HTMLDivElement;
    let top = document.getElementById('top') as HTMLDivElement;
    let bot = document.getElementById('bot') as HTMLDivElement;

    kopf.classList.add('collapsible');
    top.classList.add('animateContent');
    bot.classList.add('animateFooter');

    // this.kopf.classList.add('collapsible');
    // this.top.classList.add('animateContent');
    // this.bot.classList.add('animateFooter');
  }

  closeMenu(){
    this.closeMenuAnimation(this.index);

    let kopf = document.getElementById('kopf') as HTMLDivElement;
    let top = document.getElementById('top') as HTMLDivElement;
    let bot = document.getElementById('bot') as HTMLDivElement;

    setTimeout(()=>{
      kopf.classList.remove('collapsible');
    },1000)
    top.classList.remove('animateContent');
    bot.classList.remove('animateFooter');
  }


  openMenuAnimation(index: number) {
    const menu = document.getElementById('menu')as HTMLImageElement;
    const TIMER = setInterval(() => {
        this.index++
        menu.src = this.MENU_IMAGES[index];
        if (this.index >= 4) {
            clearInterval(TIMER);
        }
    }, 100);
  }


  closeMenuAnimation(index:number) {
    const menu = document.getElementById('menu')as HTMLImageElement;
    const TIMER = setInterval(() => {
      this.index--
      menu.src = this.MENU_IMAGES[index];
      if (this.index <= 0) {
          clearInterval(TIMER);
      }
    }, 100);
  }


  goToSection(sectionID:string){
    document.location = '#' + sectionID;
    this.closeMenu();
  }
}
