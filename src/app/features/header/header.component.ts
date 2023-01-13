import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isOpen: boolean = false;
  // kopf = document.getElementById('kopf') as HTMLElement;
  // top = document.getElementById('top') as HTMLDivElement;
  // bot = document.getElementById('bot') as HTMLDivElement;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(){
    if(this.isOpen){
      this.closeMenu();
    }else{
      this.openMenu();
    }    
  }

  openMenu(){
    console.log('openMenu');
    let kopf = document.getElementById('kopf') as HTMLDivElement;
    let top = document.getElementById('top') as HTMLDivElement;
    let bot = document.getElementById('bot') as HTMLDivElement;

    kopf.classList.add('collapsible');
    top.classList.add('animateContent');
    bot.classList.add('animateFooter');

    this.isOpen = true;
    // this.kopf.classList.add('collapsible');
    // this.top.classList.add('animateContent');
    // this.bot.classList.add('animateFooter');
  }

  closeMenu(){
    console.log('closeMenu');
    let kopf = document.getElementById('kopf') as HTMLDivElement;
    let top = document.getElementById('top') as HTMLDivElement;
    let bot = document.getElementById('bot') as HTMLDivElement;

    setTimeout(()=>{
      kopf.classList.remove('collapsible');

    },1000)
    top.classList.remove('animateContent');
    bot.classList.remove('animateFooter');

    this.isOpen = false;
  }


  goToSection(sectionID:string){
    document.location = '#' + sectionID;
    let container = document.getElementById(sectionID);
    console.log('container:',container);

    this.closeMenu();
  }
}
